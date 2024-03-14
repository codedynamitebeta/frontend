import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import MenuIcon from "@mui/icons-material/Menu";
import { Box, Card, CssBaseline, Grid, IconButton, Toolbar } from "@mui/material";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import { styled } from "@mui/material/styles";
import Header from "components/Header";
import Heading1 from "components/text/Heading1";
import Heading3 from "components/text/Heading3";
import ParagraphBody from "components/text/ParagraphBody";
import ParagraphSmall from "components/text/ParagraphSmall";
import useBoxDimensions from "hooks/useBoxDimensions";
import * as React from "react";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import { routes } from "routes/routes";
import classes from "./styles.module.scss";
import CustomDataGrid from "components/common/CustomDataGrid";
import FilePairsFeatureBar from "./components/FeatureBar";
import {
  GridCallbackDetails,
  GridColDef,
  GridPaginationModel,
  GridRowParams,
  GridRowSelectionModel
} from "@mui/x-data-grid";
import CircularProgressWithLabel from "../SourceCodePlagiarismOverview/components/FilePairsTable/components/CircularProgressWithLabel";

const drawerWidth = 450;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })<{
  open?: boolean;
}>(({ theme, open }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
  transition: theme.transitions.create("margin", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen
  }),
  marginRight: -drawerWidth,
  ...(open && {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    }),
    marginRight: 0
  }),
  /**
   * This is necessary to enable the selection of content. In the DOM, the stacking order is determined
   * by the order of appearance. Following this rule, elements appearing later in the markup will overlay
   * those that appear earlier. Since the Drawer comes after the Main content, this adjustment ensures
   * proper interaction with the underlying content.
   */
  position: "relative"
}));

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open"
})<AppBarProps>(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    }),
    marginRight: drawerWidth
  })
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-start"
}));

export default function LecturerSourceCodePlagiarismSubmissions() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const questionId = searchParams.get("questionId") || "0";

  const dataGridToolbar = { enableToolbar: true };
  const rowSelectionHandler = (
    selectedRowId: GridRowSelectionModel,
    details: GridCallbackDetails<any>
  ) => {
    console.log(selectedRowId);
  };
  const pageChangeHandler = (model: GridPaginationModel, details: GridCallbackDetails<any>) => {
    console.log(model);
  };
  const page = 0;
  const pageSize = 5;
  const totalElement = 100;

  const location = useLocation();
  const [data, setData] = React.useState({
    filePairList: location.state?.filePairList || []
  });

  const tableHeading: GridColDef[] = [
    { field: "left_file", headerName: "Tệp trái", flex: 1 },
    { field: "right_file", headerName: "Tệp phải", flex: 1 },
    {
      field: "highest_similarity",
      headerName: "Độ tương đồng cao nhất",
      flex: 1,
      renderCell: (params) => {
        return <CircularProgressWithLabel value={Number(params.row.highest_similarity) || 0} />;
      }
    },
    { field: "longest_fragment", headerName: "Đoạn trùng dài nhất", flex: 1 },
    { field: "total_overlap", headerName: "Trùng lặp tổng cộng", flex: 1 }
  ];

  const rowClickHandler = (params: GridRowParams<any>) => {
    console.log("rowClickHandler", params);
  };

  const headerRef = React.useRef<HTMLDivElement>(null);
  const { height: headerHeight } = useBoxDimensions({
    ref: headerRef
  });

  return (
    <Grid className={classes.root}>
      <Header ref={headerRef} />
      <Box
        className={classes.container}
        sx={{
          marginTop: `${headerHeight + 20}px`
        }}
      >
        <CssBaseline />
        <AppBar
          position='fixed'
          sx={{
            // margin top to avoid appbar overlap with content
            marginTop: "64px",
            backgroundColor: "white"
          }}
          open={false}
        >
          <Toolbar>
            <Box id={classes.breadcumpWrapper}>
              <ParagraphSmall
                colorname='--blue-500'
                className={classes.cursorPointer}
                onClick={() => navigate(routes.lecturer.course.management)}
              >
                Quản lý khoá học
              </ParagraphSmall>
              <KeyboardDoubleArrowRightIcon id={classes.icArrow} />
              <ParagraphSmall
                colorname='--blue-500'
                className={classes.cursorPointer}
                onClick={() => navigate(routes.lecturer.course.information)}
              >
                CS202 - Nhập môn lập trình
              </ParagraphSmall>
              <KeyboardDoubleArrowRightIcon id={classes.icArrow} />
              <ParagraphSmall
                colorname='--blue-500'
                className={classes.cursorPointer}
                onClick={() => navigate(routes.lecturer.course.assignment)}
              >
                Danh sách bài tập
              </ParagraphSmall>
              <KeyboardDoubleArrowRightIcon id={classes.icArrow} />
              <ParagraphSmall
                colorname='--blue-500'
                className={classes.cursorPointer}
                onClick={() => navigate(routes.lecturer.exam.detail)}
              >
                Bài kiểm tra cuối kỳ
              </ParagraphSmall>
              <KeyboardDoubleArrowRightIcon id={classes.icArrow} />
              <ParagraphSmall
                colorname='--blue-500'
                className={classes.cursorPointer}
                onClick={() => navigate(routes.lecturer.exam.submissions)}
              >
                Danh sách bài nộp
              </ParagraphSmall>
              <KeyboardDoubleArrowRightIcon id={classes.icArrow} />
              <ParagraphSmall
                colorname='--blue-500'
                className={classes.cursorPointer}
                onClick={() =>
                  navigate(
                    routes.lecturer.exam.code_plagiarism_detection + `?questionId=${questionId}`
                  )
                }
              >
                Kiểm tra gian lận
              </ParagraphSmall>
              <KeyboardDoubleArrowRightIcon id={classes.icArrow} />
              <ParagraphSmall colorname='--blue-500'>Danh sách bài lập trình</ParagraphSmall>{" "}
            </Box>
            <IconButton
              color='inherit'
              aria-label='open drawer'
              edge='end'
              sx={{ display: "none" }}
            >
              <MenuIcon color='action' />
            </IconButton>
          </Toolbar>
        </AppBar>
        <Main open={true} className={classes.mainContent}>
          <DrawerHeader />
          <Card>
            <Box component='form' className={classes.formBody} autoComplete='off'>
              <Heading1>Danh sách cặp tệp bài nộp lập trình</Heading1>
              <Heading3>Câu hỏi code 1 - Bài kiểm tra cuối kỳ</Heading3>
              <ParagraphBody>
                Một cặp là một tập hợp 2 tệp tin được so sánh với nhau để tìm ra sự tương đồng và
                các đoạn mã khớp nhau.
              </ParagraphBody>
              <Grid container spacing={1}>
                <Grid item xs={12}>
                  <FilePairsFeatureBar />
                </Grid>
                <Grid item xs={12}>
                  <CustomDataGrid
                    dataList={data.filePairList || []}
                    tableHeader={tableHeading}
                    onSelectData={rowSelectionHandler}
                    dataGridToolBar={dataGridToolbar}
                    page={page}
                    pageSize={pageSize}
                    totalElement={totalElement}
                    onPaginationModelChange={pageChangeHandler}
                    showVerticalCellBorder={true}
                    getRowHeight={() => "auto"}
                    onClickRow={rowClickHandler}
                  />
                </Grid>
              </Grid>
            </Box>
          </Card>
        </Main>
      </Box>
    </Grid>
  );
}