import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { Avatar, Box, Chip, Grid, Stack } from "@mui/material";
import {
  GridActionsCellItem,
  GridCallbackDetails,
  GridColDef,
  GridPaginationModel
} from "@mui/x-data-grid";
import CustomBreadCrumb from "components/common/Breadcrumb";
import CustomDataGrid from "components/common/CustomDataGrid";
import ConfirmDelete from "components/common/dialogs/ConfirmDelete";
import CustomSearchFeatureBar from "components/common/featurebar/CustomSearchFeaturebar";
import Heading3 from "components/text/Heading3";
import ParagraphBody from "components/text/ParagraphBody";
import { CertificateCourseEntity } from "models/coreService/entity/CertificateCourseEntity";
import { ProgrammingLanguageEntity } from "models/coreService/entity/ProgrammingLanguageEntity";
import React from "react";
import { useCallback, useEffect, useMemo, useState } from "react";
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setErrorMess, setSuccessMess } from "reduxes/AppStatus";
import { setLoading as setInititalLoading, setLoading } from "reduxes/Loading";
import { setAdminCertificateCourses } from "reduxes/coreService/AdminCertificateCourse";
import { routes } from "routes/routes";
import { CertificateCourseService } from "services/coreService/CertificateCourseService";
import { AppDispatch, RootState } from "store";

interface CertificateCourseDataGridProps extends CertificateCourseEntity {
  id: string;
}

const CertificateCourseManagement = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [searchValue, setSearchValue] = useState<string>("");

  const [filters, setFilters] = React.useState<
    {
      key: string;
      value: string;
    }[]
  >([
    {
      key: "Status",
      value: "All"
    }
  ]);
  const [page, setPage] = useState(0);
  const [pageSize, setPageSize] = useState(10);
  const certificateCourseState = useSelector((state: RootState) => state.adminCertificateCourse);
  const dispatch = useDispatch<AppDispatch>();

  const handleGetCertificateCourses = useCallback(
    async ({
      searchName,
      pageNo = 0,
      pageSize = 10
    }: {
      searchName?: string;
      pageNo?: number;
      pageSize?: number;
    }) => {
      try {
        dispatch(setLoading(true));
        const response = await CertificateCourseService.getAllCertificateCourses({
          searchName,
          pageNo,
          pageSize
        });
        dispatch(setAdminCertificateCourses(response));
        dispatch(setLoading(false));
      } catch (error: any) {
        console.error("error", error);
        if (error.code === 401 || error.code === 403) {
          dispatch(setErrorMess(t("common_please_login_to_continue")));
        }
        dispatch(setLoading(false));
      }
    },
    [dispatch, t]
  );

  useEffect(() => {
    const fetchCertificateCourses = async () => {
      dispatch(setInititalLoading(true));
      await handleGetCertificateCourses({});
      dispatch(setInititalLoading(false));
    };

    fetchCertificateCourses();
    console.log("certificate list", certificateCourseState.certificateCourses);
  }, [dispatch, handleGetCertificateCourses]);

  const handleSearchChange = useCallback(
    (value: string) => {
      handleGetCertificateCourses({
        searchName: value
      });
    },
    [handleGetCertificateCourses]
  );

  const [isOpenConfirmDelete, setIsOpenConfirmDelete] = useState(false);
  const [deletedCertificateCourseId, setDeletedCertificateCourseId] = useState<string>("");

  const onCancelConfirmDelete = () => {
    setIsOpenConfirmDelete(false);
  };

  const onDeleteConfirmDelete = async () => {
    CertificateCourseService.deleteCertificateCourseById(deletedCertificateCourseId)
      .then((res) => {
        setPage(0);
        handleGetCertificateCourses({
          searchName: searchValue,
          pageNo: 0,
          pageSize
        });
        dispatch(setSuccessMess(t("delete_certificate_course_success")));
      })
      .catch((error) => {
        console.error("error", error);
        dispatch(setErrorMess(t("delete_certificate_course_failed")));
      })
      .finally(() => {
        setIsOpenConfirmDelete(false);
      });
  };
  const totalElement = useMemo(
    () => certificateCourseState.certificateCourses.totalItems || 0,
    [certificateCourseState.certificateCourses]
  );

  const certificateCourseList: CertificateCourseDataGridProps[] = useMemo(
    () =>
      certificateCourseState.certificateCourses.certificateCourses.map((certificateCourse) => ({
        ...certificateCourse,
        id: certificateCourse.certificateCourseId
      })),
    [certificateCourseState.certificateCourses]
  );
  const pageChangeHandler = (model: GridPaginationModel, details: GridCallbackDetails<any>) => {
    setPage(model.page);
    setPageSize(model.pageSize);
    handleGetCertificateCourses({
      searchName: searchValue,
      pageNo: model.page,
      pageSize: model.pageSize
    });
  };

  const tableHeading: GridColDef[] = useMemo(
    () => [
      {
        field: "name",
        headerName: t("common_name"),
        renderHeader: () => {
          return (
            <ParagraphBody fontSize={"12px"} color={"#525151"} fontWeight={"500"}>
              {t("common_name")}
            </ParagraphBody>
          );
        },
        flex: 1,
        renderCell: (params) => {
          return (
            <Stack
              direction='row'
              gap={2}
              alignItems='center'
              justifyContent='flex-start'
              margin={"5px"}
            >
              <Avatar alt={params.row.name} src={params.row.topic.thumbnailUrl} />

              <ParagraphBody fontSize={".875rem"} color={"#212121"} fontWeight={"600"}>
                {params.row.name}
              </ParagraphBody>
            </Stack>
          );
        }
      },
      {
        field: "skillLevel",
        headerName: t("common_skill"),
        renderHeader: () => {
          return (
            <ParagraphBody fontSize={"12px"} color={"#525151"} fontWeight={"500"}>
              {t("common_skill")}
            </ParagraphBody>
          );
        },
        flex: 0.8,
        renderCell: (params) => {
          return (
            <ParagraphBody fontSize={".875rem"} color={"#212121"} fontWeight={"600"}>
              {params.row.skillLevel}
            </ParagraphBody>
          );
        }
      },

      {
        field: "programmingLanguages",
        headerName: t("common_programming_languages"),
        renderHeader: () => {
          return (
            <ParagraphBody fontSize={"12px"} color={"#525151"} fontWeight={"500"}>
              {t("common_programming_languages")}
            </ParagraphBody>
          );
        },
        flex: 1,
        renderCell: (params) => {
          return (
            <Grid container spacing={1}>
              {params.row.topic.programmingLanguages?.map(
                (language: ProgrammingLanguageEntity, index: number) => (
                  <Grid item>
                    <Chip key={index} label={language.name} size='small' />
                  </Grid>
                )
              )}
            </Grid>
          );
        }
      },
      {
        field: "avgRating",
        headerName: t("common_avg_rating"),
        renderHeader: () => {
          return (
            <ParagraphBody fontSize={"12px"} color={"#525151"} fontWeight={"500"}>
              {t("common_avg_rating")}
            </ParagraphBody>
          );
        },
        flex: 0.3,
        renderCell: (params) => {
          return (
            <ParagraphBody fontSize={".875rem"} color={"#212121"} fontWeight={"600"}>
              {params.row.avgRating}
            </ParagraphBody>
          );
        }
      },
      {
        field: "action",
        headerName: t("common_action"),
        type: "actions",
        flex: 0.6,
        renderHeader: () => {
          return (
            <ParagraphBody fontSize={"12px"} color={"#525151"} fontWeight={"500"}>
              {t("common_action")}
            </ParagraphBody>
          );
        },
        getActions: (params) => {
          return [
            <GridActionsCellItem
              icon={<EditIcon />}
              label='Edit'
              onClick={() => {
                navigate(
                  routes.admin.certificate.detail.replace(":id", params.row.certificateCourseId)
                );
              }}
            />,
            <GridActionsCellItem
              icon={<DeleteIcon />}
              label='Delete'
              onClick={() => {
                setDeletedCertificateCourseId(params.row.certificateCourseId);
                setIsOpenConfirmDelete(true);
              }}
            />
          ];
        }
      }
    ],
    []
  );

  return (
    <>
      <Helmet>
        <title>{t("certificate_course_management")}</title>
      </Helmet>
      <ConfirmDelete
        isOpen={isOpenConfirmDelete}
        title={t("dialog_confirm_delete_title")}
        description={t("dialog_confirm_delete_description")}
        onCancel={onCancelConfirmDelete}
        onDelete={onDeleteConfirmDelete}
      />

      <Box
        sx={{
          paddingLeft: "13px"
        }}
      >
        <CustomBreadCrumb
          breadCrumbData={[{ navLink: routes.admin.dashboard, label: "Home" }]}
          lastBreadCrumbLabel='Certificate Course Management'
        />
      </Box>

      <Grid
        container
        spacing={2}
        sx={{
          padding: "0 20px"
        }}
      >
        <Grid item xs={12}>
          <Heading3 translate-key='certificate_course_management_title'>
            {t("certificate_course_management_title").toUpperCase()}
          </Heading3>
        </Grid>
        <Grid item xs={12}>
          <CustomSearchFeatureBar
            isFilter={false}
            isLoading={certificateCourseState.isLoading}
            searchValue={searchValue}
            setSearchValue={setSearchValue}
            onHandleChange={handleSearchChange}
            createBtnText={t("certificate_course_create_btn")}
            onClickCreate={() => {
              navigate(routes.admin.certificate.create);
            }}
            numOfResults={totalElement}
            // filterKeyList={[
            //   {
            //     label: t("common_status"),
            //     value: "Status"
            //   }
            // ]}
            // filterValueList={{
            //   Status: [
            //     {
            //       label: t("common_all"),
            //       value: ContestStartTimeFilterEnum.ALL
            //     },
            //     {
            //       label: t("common_upcoming"),
            //       value: ContestStartTimeFilterEnum.UPCOMING
            //     },
            //     {
            //       label: t("common_in_progress"),
            //       value: ContestStartTimeFilterEnum.HAPPENING
            //     },
            //     {
            //       label: t("common_ended"),
            //       value: ContestStartTimeFilterEnum.ENDED
            //     }
            //   ] as { label: string; value: string }[]
            // }}
            filters={filters}
            handleChangeFilters={(filters: { key: string; value: string }[]) => {
              setFilters(filters);
            }}
            // onHandleApplyFilter={handleApplyFilter}
            // onHandleCancelFilter={handleCancelFilter}
          />
        </Grid>
        <Grid item xs={12}>
          <CustomDataGrid
            loading={certificateCourseState.isLoading}
            dataList={certificateCourseList}
            tableHeader={tableHeading}
            onSelectData={() => {}}
            dataGridToolBar={{ enableToolbar: true }}
            page={page}
            pageSize={pageSize}
            totalElement={totalElement}
            onPaginationModelChange={pageChangeHandler}
            showVerticalCellBorder={false}
            getRowHeight={() => "50"}
            // onClickRow={rowClickHandler}
            sx={{
              "&.MuiDataGrid-withBorderColor": {
                border: "1px solid white"
              },
              "& .MuiDataGrid-columnHeaders": {
                backgroundColor: "white",
                borderBottom: "2px solid var(--gray-50)"
              },
              "& .MuiDataGrid-toolbarContainer": {
                backgroundColor: "#f5f9fb"
              },
              minHeight: "500px"
            }}
            personalSx={true}
          />
        </Grid>
      </Grid>
    </>
  );
};

export default CertificateCourseManagement;
