import FlagIcon from "@mui/icons-material/Flag";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import SchoolIcon from "@mui/icons-material/School";
import StarIcon from "@mui/icons-material/Star";
import { LinearProgress } from "@mui/joy";
import JoyButton from "@mui/joy/Button";
import { Box, Container, Grid, Tab, Tabs, Tooltip } from "@mui/material";
import Heading2 from "components/text/Heading2";
import ParagraphBody from "components/text/ParagraphBody";
import ParagraphSmall from "components/text/ParagraphSmall";
import useAuth from "hooks/useAuth";
import i18next from "i18next";
import { CertificateCourseEntity } from "models/coreService/entity/CertificateCourseEntity";
import { ChapterEntity } from "models/coreService/entity/ChapterEntity";
import { ResourceTypeEnum } from "models/coreService/enum/ResourceTypeEnum";
import { SkillLevelEnum } from "models/coreService/enum/SkillLevelEnum";
import { useCallback, useEffect, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { Route, Routes, matchPath, useLocation, useNavigate, useParams } from "react-router-dom";
import { setErrorMess, setSuccessMess } from "reduxes/AppStatus";
import { setLoading as setInititalLoading } from "reduxes/Loading";
import { routes } from "routes/routes";
import { CertificateCourseService } from "services/coreService/CertificateCourseService";
import { ChapterService } from "services/coreService/ChapterService";
import { AppDispatch } from "store";
import { calcCertificateCourseProgress } from "utils/coreService/calcCertificateCourseProgress";
import CertificateDetails from "./components/Certificate";
import CertificateCourseReviews from "./components/CertificateCourseReviews";
import CourseCertificateIntroduction from "./components/Introduction";
import CourseCertificateLesson from "./components/Lesson";
import classes from "./styles.module.scss";

const enum CertificateCourseCompletedStatus {
  START = "START",
  CONTINUE = "CONTINUE",
  DONE = "DONE"
}

const CourseCertificateDetail = () => {
  const navigate = useNavigate();
  const { courseId } = useParams<{ courseId: string }>();
  const { pathname } = useLocation();

  const { isLoggedIn } = useAuth();
  const [isRegisterLoading, setIsRegisterLoading] = useState(false);

  const dispatch = useDispatch<AppDispatch>();
  const [certificateCourseDetails, setCertificateCourseDetails] =
    useState<CertificateCourseEntity | null>(null);
  const [chapters, setChapters] = useState<ChapterEntity[]>([]);

  const progress = useMemo(() => {
    if (!certificateCourseDetails) return 0;
    return calcCertificateCourseProgress(
      certificateCourseDetails.numOfCompletedResources || 0,
      certificateCourseDetails.numOfResources
    );
  }, [certificateCourseDetails]);

  const certificateCourseCompletedStatus = useMemo(() => {
    if (progress > 0 && progress < 85) {
      return CertificateCourseCompletedStatus.CONTINUE;
    } else if (progress === 0) {
      return CertificateCourseCompletedStatus.START;
    } else if (progress >= 85) {
      return CertificateCourseCompletedStatus.DONE;
    }
  }, [progress]);

  const handleChange = (_: React.SyntheticEvent, newTab: number) => {
    if (courseId) navigate(tabs[newTab].replace(":courseId", courseId));
  };

  const tabs: string[] = useMemo(() => {
    return [
      routes.user.course_certificate.detail.introduction,
      routes.user.course_certificate.detail.lesson.root,
      routes.user.course_certificate.detail.certificate,
      routes.user.course_certificate.detail.review
    ];
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [routes]);

  const activeRoute = (routeName: string) => {
    const match = matchPath(pathname, routeName);
    return !!match;
  };

  const activeTab = useMemo(() => {
    if (courseId) {
      const index = tabs.findIndex((it) => activeRoute(it.replace(":courseId", courseId)));
      if (index === -1) return 0;
      return index;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname, tabs]);

  const { t } = useTranslation();

  const handleGetCertificateCourseById = useCallback(
    async (id: string) => {
      try {
        const getCertificateCourseByIdResponse =
          await CertificateCourseService.getCertificateCourseById(id);
        setCertificateCourseDetails(getCertificateCourseByIdResponse);
      } catch (error: any) {
        console.error("Failed to fetch certificate course by id", {
          code: error.response?.code || 503,
          status: error.response?.status || "Service Unavailable",
          message: error.response?.message || error.message
        });
        // Show snackbar here
        dispatch(setErrorMess(error.response?.message || error.message));
      }
    },
    [dispatch]
  );

  const handleGetChaptersByCertificateCourseId = useCallback(
    async (id: string) => {
      try {
        const getChaptersByCertificateCourseIdResponse =
          await ChapterService.getChaptersByCertificateCourseIdResponse(id);
        setChapters(getChaptersByCertificateCourseIdResponse);
      } catch (error: any) {
        // console.error("Failed to fetch chapters by certificate course id", {
        //   code: error.response?.code || 503,
        //   status: error.response?.status || "Service Unavailable",
        //   message: error.response?.message || error.message
        // });
        // Show snackbar here
        dispatch(setErrorMess(error.response?.message || error.message));
      }
    },
    [dispatch]
  );

  const handleRegisterCertificateCourseById = useCallback(
    async (id: string) => {
      // Check if isRegistered is true
      if (certificateCourseDetails?.isRegistered) return;
      setIsRegisterLoading(true);
      try {
        const registerCertificateCourseByIdResponse =
          await CertificateCourseService.registerCertificateCourseById(id);
        setIsRegisterLoading(false);
        if (
          registerCertificateCourseByIdResponse &&
          registerCertificateCourseByIdResponse.certificateCourseId === id
        ) {
          setCertificateCourseDetails((prev) => {
            if (!prev) return null;
            return {
              ...prev,
              isRegistered: true
            };
          });
          dispatch(
            setSuccessMess(
              t("register_certificate_course_success", {
                courseName: certificateCourseDetails?.name
              })
            )
          );
        } else {
          dispatch(
            setSuccessMess(
              t("register_certificate_course_failed", {
                courseName: certificateCourseDetails?.name
              })
            )
          );
        }
      } catch (error: any) {
        console.error("Failed to register certificate course by id", {
          code: error.response?.code || 503,
          status: error.response?.status || "Service Unavailable",
          message: error.response?.message || error.message
        });
        setIsRegisterLoading(false);
        dispatch(setErrorMess(error.response?.message || error.message));
      }
    },
    [certificateCourseDetails, dispatch, t]
  );

  useEffect(() => {
    const fetchInitialData = async () => {
      if (courseId) {
        dispatch(setInititalLoading(true));
        await handleGetCertificateCourseById(courseId);
        await handleGetChaptersByCertificateCourseId(courseId);
        dispatch(setInititalLoading(false));
      }
    };
    fetchInitialData();
  }, [courseId, dispatch, handleGetCertificateCourseById, handleGetChaptersByCertificateCourseId]);

  if (!courseId || !certificateCourseDetails) return null;

  return (
    <Box id={classes.courseCertificateDetailRoot}>
      <Container id={classes.container}>
        <Grid container id={classes.bodyWrapper}>
          <Grid item xs={12} md={12} id={classes.rightBody}>
            <Box id={classes.breadcumpWrapper}>
              <ParagraphSmall
                colorname='--blue-3'
                className={classes.cursorPointer}
                onClick={() => navigate(routes.user.course_certificate.root)}
                translation-key='certificate_detail_breadcrump'
              >
                {t("certificate_detail_breadcrump")}
              </ParagraphSmall>
              <KeyboardDoubleArrowRightIcon id={classes.icArrow} />
              <ParagraphSmall colorname='--blue-3'>{certificateCourseDetails.name}</ParagraphSmall>
            </Box>
            <Box id={classes.courseInfoWrapper}>
              <Box id={classes.courseTitle}>
                <Box className={classes.imgCourseRecommend}>
                  <img
                    style={{
                      maxWidth: "70px",
                      maxHeight: "70px",
                      borderRadius: "5px"
                    }}
                    src={certificateCourseDetails.topic.thumbnailUrl}
                    alt='img course recommend'
                  />
                </Box>
                <Heading2>{certificateCourseDetails.name}</Heading2>
              </Box>
              <Grid container>
                <Grid item xs={12} md={6} id={classes.courseDetails} container>
                  <Grid
                    item
                    xs={4}
                    borderRight={"1px solid var(--gray-40)"}
                    className={classes.courseDetailsWrapper}
                  >
                    <Box id={classes.userRating}>
                      <ParagraphBody fontWeight={"600"}>
                        {certificateCourseDetails.avgRating.toFixed(1)}
                      </ParagraphBody>
                      <StarIcon id={classes.icStar} />
                    </Box>
                    <Box id={classes.userReviews}>
                      <ParagraphBody
                        colorname='--gray-60'
                        translation-key='certificate_detail_rating'
                      >
                        {certificateCourseDetails.numOfReviews} {t("certificate_detail_rating")}
                      </ParagraphBody>
                    </Box>
                  </Grid>
                  <Grid
                    item
                    xs={4}
                    borderRight={"1px solid var(--gray-40)"}
                    className={classes.courseDetailsWrapper}
                  >
                    <Box id={classes.numberLesson}>
                      <ParagraphBody fontWeight={"600"} translation-key='certificate_detail_lesson'>
                        {certificateCourseDetails.numOfResources}{" "}
                        {t("certificate_detail_lesson", { count: 2 })}
                      </ParagraphBody>
                    </Box>
                    <Box id={classes.courseLevel}>
                      <ParagraphBody
                        colorname='--gray-60'
                        translation-key={["common_easy", "common_level"]}
                      >
                        {t("common_level", { count: 1 })}:{" "}
                        {certificateCourseDetails.skillLevel === SkillLevelEnum.BASIC
                          ? t("common_easy")
                          : certificateCourseDetails.skillLevel === SkillLevelEnum.INTERMEDIATE
                            ? t("common_medium")
                            : t("common_hard")}
                      </ParagraphBody>
                    </Box>
                  </Grid>
                  <Grid item xs={4} className={classes.courseDetailsWrapper}>
                    <Box id={classes.numberLearner}>
                      <ParagraphBody fontWeight={"600"}>
                        {certificateCourseDetails.numOfStudents}
                      </ParagraphBody>
                    </Box>
                    <Box>
                      <ParagraphBody
                        colorname='--gray-60'
                        translation-key='certificate_detail_participant'
                      >
                        {t("certificate_detail_participant")}
                      </ParagraphBody>
                    </Box>
                  </Grid>
                </Grid>
              </Grid>
              <Grid container>
                <Grid item xs={12} md={6}>
                  <Box id={classes.courseProgress}>
                    <Box id={classes.progressTitle}>
                      <ParagraphBody colorname='--gray-80' translation-key={"common_progress"}>
                        {i18next.format(t("common_progress"), "firstUppercase")}:{" "}
                        {calcCertificateCourseProgress(
                          certificateCourseDetails.numOfCompletedResources || 0,
                          certificateCourseDetails.numOfResources
                        )}
                        %
                      </ParagraphBody>
                      <FlagIcon id={classes.icFlag} />
                    </Box>
                    <LinearProgress
                      determinate
                      value={calcCertificateCourseProgress(
                        certificateCourseDetails.numOfCompletedResources || 0,
                        certificateCourseDetails.numOfResources
                      )}
                    />
                  </Box>
                </Grid>
                <Grid item md={1}></Grid>
                <Grid item xs={12} md={5}>
                  <Tooltip
                    title={isLoggedIn === false ? t("certificate_detail_register_tooltip") : ""}
                    placement='top'
                    arrow
                  >
                    <span>
                      <JoyButton
                        loading={isRegisterLoading}
                        disabled={isLoggedIn === false}
                        color='primary'
                        startDecorator={<SchoolIcon />}
                        translation-key={
                          certificateCourseDetails.isRegistered === true
                            ? certificateCourseCompletedStatus ===
                              CertificateCourseCompletedStatus.CONTINUE
                              ? "certificate_detail_continue_button"
                              : "certificate_detail_start_button"
                            : "certificate_detail_register_button"
                        }
                        onClick={() => {
                          if (
                            certificateCourseDetails.isRegistered === true &&
                            certificateCourseDetails.currentResource
                          ) {
                            const url =
                              certificateCourseDetails.currentResource.resourceType ===
                              ResourceTypeEnum.CODE
                                ? routes.user.course_certificate.detail.lesson.description
                                    .replace(":courseId", courseId)
                                    .replace(
                                      ":lessonId",
                                      certificateCourseDetails.currentResource?.chapterResourceId ||
                                        ""
                                    )
                                    .replace("*", "")
                                : routes.user.course_certificate.detail.lesson.detail
                                    .replace(":courseId", courseId)
                                    .replace(
                                      ":lessonId",
                                      certificateCourseDetails.currentResource?.chapterResourceId ||
                                        ""
                                    )
                                    .replace("*", "");

                            navigate(url);
                          } else {
                            handleRegisterCertificateCourseById(courseId);
                          }
                        }}
                      >
                        {certificateCourseDetails.isRegistered === true
                          ? certificateCourseCompletedStatus ===
                            CertificateCourseCompletedStatus.CONTINUE
                            ? t("certificate_detail_continue_button")
                            : t("certificate_detail_start_button")
                          : t("certificate_detail_register_button")}
                      </JoyButton>
                    </span>
                  </Tooltip>
                </Grid>
              </Grid>
              <Box sx={{ border: "1px solid var(--gray-10)" }}>
                <Tabs
                  value={activeTab}
                  onChange={handleChange}
                  aria-label='basic tabs example'
                  className={classes.tabs}
                >
                  <Tab
                    sx={{ textTransform: "none" }}
                    label={
                      <ParagraphBody translation-key='common_introduction'>
                        {t("common_introduction")}
                      </ParagraphBody>
                    }
                    value={0}
                  />
                  <Tab
                    sx={{ textTransform: "none" }}
                    label={
                      <ParagraphBody translation-key='certificate_detail_lesson'>
                        {t("certificate_detail_lesson")}
                      </ParagraphBody>
                    }
                    value={1}
                  />
                  <Tab
                    sx={{ textTransform: "none" }}
                    label={
                      <ParagraphBody translation-key='common_certificate'>
                        {t("common_certificate")}
                      </ParagraphBody>
                    }
                    value={2}
                  />
                  <Tab
                    sx={{ textTransform: "none" }}
                    label={
                      <ParagraphBody translation-key='common_review'>
                        {t("common_review")}
                      </ParagraphBody>
                    }
                    value={3}
                  />
                </Tabs>
              </Box>
              <Box>
                <Routes>
                  <Route
                    path={"introduction"}
                    element={
                      <CourseCertificateIntroduction
                        description={certificateCourseDetails.description}
                      />
                    }
                  />
                  <Route
                    path={"lesson"}
                    element={
                      <CourseCertificateLesson
                        isRegistered={certificateCourseDetails.isRegistered || false}
                        chapters={chapters}
                      />
                    }
                  />
                  <Route path={"certificate"} element={<CertificateDetails />} />
                  <Route path={"review"} element={<CertificateCourseReviews />} />
                </Routes>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default CourseCertificateDetail;
