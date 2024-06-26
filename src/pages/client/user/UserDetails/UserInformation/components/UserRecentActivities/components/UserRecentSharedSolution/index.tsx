import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import TextTitle from "components/text/TextTitle";
import EmptyListView from "../../../EmptyListView";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp } from "@fortawesome/free-regular-svg-icons";
import { Box, Grid, Stack } from "@mui/material";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import ParagraphBody from "components/text/ParagraphBody";
import { useTranslation } from "react-i18next";
import CustomPagination from "components/common/pagination/CustomPagination";
import { useCallback, useEffect, useState } from "react";
import { SharedSolutionEntity } from "models/codeAssessmentService/entity/SharedSolutionEntity";
import { useDispatch } from "react-redux";
import { SharedSolutionService } from "services/codeAssessmentService/SharedSolutionService";
import { setErrorMess } from "reduxes/AppStatus";
import { standardlizeUTCStringToLocaleString } from "utils/moment";
import i18next from "i18next";
import { ESharedSolutionType } from "../..";
import { CircularProgress } from "@mui/joy";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14
  }
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0
  },
  // change cursor to pointer on hover
  "&:hover": {
    cursor: "pointer"
  }
}));

interface UserRecentSharedSolutionProps {
  sharedSolutionType: ESharedSolutionType;
}

export default function UserRecentSharedSolution({
  sharedSolutionType
}: UserRecentSharedSolutionProps) {
  const { t } = useTranslation();
  const [data, setData] = useState<{
    sharedSolutions: {
      sharedSolutions: SharedSolutionEntity[];
      currentPage: number;
      totalItems: number;
      totalPages: number;
    };
  }>({
    sharedSolutions: {
      sharedSolutions: [],
      currentPage: 0,
      totalItems: 0,
      totalPages: 0
    }
  });
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [pageNo, setPageNo] = useState(1);

  const dispatch = useDispatch();

  const handleRecentSharedSolution = useCallback(
    async ({
      pageNo = 0,
      pageSize = 10,
      newest = true
    }: {
      pageNo?: number;
      pageSize?: number;
      newest?: boolean;
    }) => {
      const sortBy =
        sharedSolutionType === ESharedSolutionType.RECENT ? "createdAt" : "totalComment";
      setIsLoading(true);
      try {
        const getRecentSharedSolutionResponse = await SharedSolutionService.getRecentSharedSolution(
          pageSize,
          pageNo,
          newest,
          sortBy
        );
        setData((prev) => ({
          ...prev,
          sharedSolutions: {
            currentPage: getRecentSharedSolutionResponse.currentPage,
            totalItems: getRecentSharedSolutionResponse.totalItems,
            totalPages: getRecentSharedSolutionResponse.totalPages,
            sharedSolutions: getRecentSharedSolutionResponse.sharedSolution
          }
        }));
      } catch (error: any) {
        console.error("error", error);
        if (error.code === 401 || error.code === 403) {
          dispatch(setErrorMess(t("common_please_login_to_continue")));
        }
      }
      setIsLoading(false);
    },
    [dispatch, t, sharedSolutionType]
  );

  useEffect(() => {
    const fetchRecentSharedSolution = async () => {
      await handleRecentSharedSolution({});
    };

    fetchRecentSharedSolution();
  }, [dispatch, handleRecentSharedSolution]);

  const handlePageChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPageNo(value);
    handleRecentSharedSolution({ pageNo: pageNo - 1 });
  };

  const [currentLang, setCurrentLang] = useState(() => {
    return i18next.language;
  });

  useEffect(() => {
    setCurrentLang(i18next.language);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [i18next.language]);

  return (
    <>
      {isLoading ? (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            height: "100%",
            gap: "10px"
          }}
        >
          <CircularProgress />
        </Box>
      ) : data.sharedSolutions.sharedSolutions.length === 0 ? (
        <EmptyListView />
      ) : (
        <>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 700 }} aria-label='customized table'>
              <TableBody>
                {data.sharedSolutions.sharedSolutions.map((sharedSolution) => (
                  <StyledTableRow key={sharedSolution.sharedSolutionId}>
                    <StyledTableCell component='th' scope='row'>
                      <Stack direction={"column"}>
                        <TextTitle>{sharedSolution.title}</TextTitle>
                        <ParagraphBody>
                          {standardlizeUTCStringToLocaleString(
                            sharedSolution.createdAt as string,
                            currentLang
                          )}
                        </ParagraphBody>
                      </Stack>
                    </StyledTableCell>
                    <StyledTableCell align='right'>
                      <Box
                        sx={{
                          display: "flex",
                          gap: "5px",
                          justifyContent: "flex-end",
                          alignItems: "center"
                        }}
                      >
                        <FontAwesomeIcon icon={faThumbsUp} />
                        <ParagraphBody>{sharedSolution.totalVote}</ParagraphBody>
                      </Box>
                    </StyledTableCell>
                    <StyledTableCell align='right'>
                      <Box
                        sx={{
                          display: "flex",
                          gap: "5px",
                          justifyContent: "flex-end",
                          alignItems: "center"
                        }}
                      >
                        <FontAwesomeIcon icon={faEye} />
                        <ParagraphBody>{sharedSolution.totalView}</ParagraphBody>
                      </Box>
                    </StyledTableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <Grid
            item
            xs={12}
            sx={{
              display: "flex",
              justifyContent: "center"
            }}
          >
            <CustomPagination
              count={data.sharedSolutions.totalPages}
              page={pageNo}
              handlePageChange={handlePageChange}
              showFirstButton
              showLastButton
              size={"large"}
            />
          </Grid>
        </>
      )}
    </>
  );
}
