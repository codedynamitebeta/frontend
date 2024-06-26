import { Box, Container, Grid, Stack, Divider } from "@mui/material";
import Header from "components/Header";
import TextEditor from "components/editor/TextEditor";
import { useMemo, useState, useEffect } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import classes from "./styles.module.scss";
import { routes } from "routes/routes";
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import {
  MultiChoiceQuestion,
  PutMultipleChoiceQuestion
} from "models/coreService/entity/MultipleChoiceQuestionEntity";
import { QuestionService } from "services/coreService/QuestionService";
import { yupResolver } from "@hookform/resolvers/yup";
import { Controller, useForm } from "react-hook-form";
import * as yup from "yup";
import ErrorMessage from "components/text/ErrorMessage";
import isQuillEmpty from "utils/coreService/isQuillEmpty";
import { isValidDecimal } from "utils/coreService/convertDecimalPoint";
import InputTextFieldColumn from "components/common/inputs/InputTextFieldColumn";
import Footer from "components/Footer";

import TitleWithInfoTip from "../../../../../../../../components/text/TitleWithInfo";
import JoyRadioGroup from "components/common/radio/JoyRadioGroup";
import JoyButton from "@mui/joy/Button";
import { Helmet } from "react-helmet";
import { useDispatch, useSelector } from "react-redux";
import { setQuestionCreate } from "reduxes/coreService/questionCreate";

import CustomBreadCrumb from "components/common/Breadcrumb";
import { CourseService } from "services/courseService/CourseService";
import { CourseDetailEntity } from "models/courseService/entity/detail/CourseDetailEntity";
import Heading2 from "components/text/Heading2";
import RuleRoundedIcon from "@mui/icons-material/RuleRounded";
import { Button, Card } from "@mui/joy";
import ParagraphBody from "components/text/ParagraphBody";
import { RootState } from "store";
import { MultichoiceQuestionService } from "services/coreService/QtypeMultichoiceQuestionService";

import useAuth from "hooks/useAuth";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import qtype from "utils/constant/Qtype";
import { PostQuestionDetailList } from "models/coreService/entity/QuestionEntity";
import { setErrorMess, setSuccessMess } from "reduxes/AppStatus";

interface Props {
  qtype: String;
  insideCrumb?: boolean;
}

interface FormData {
  questionName: string;
  questionDescription: string;
  defaultScore: string;
  generalDescription?: string;
  correctFeedback?: string;
  incorrectFeedback?: string;
  showInstructions: string;
  showNumCorrect: string;
}

const EditTrueFalseQuestion = (props: Props) => {
  const { questionId } = useParams<{ questionId: string }>();
  const { examId } = useParams<{ examId: string }>();
  const { courseId } = useParams<{ courseId: string }>();
  const user = useAuth().loggedUser;
  const { t, i18n } = useTranslation();
  const [currentLang, setCurrentLang] = useState(() => {
    return i18next.language;
  });
  const [submitLoading, setSubmitLoading] = useState(false);

  const [submitCount, setSubmitCount] = useState(0);
  const [courseData, setCourseData] = useState<CourseDetailEntity>();
  const [trueFalseQuestionData, setTrueFalseQuestionData] = useState<MultiChoiceQuestion>();
  const navigate = useNavigate();

  const sidebarStatus = useSelector((state: RootState) => state.sidebarStatus);
  const [headerHeight, setHeaderHeight] = useState(sidebarStatus.headerHeight);
  if (props.insideCrumb) setHeaderHeight(0);

  const urlParams = useParams();

  const handleGetMultichoiceQuestionDetailForm = async (questionId: string) => {
    try {
      const questionCommands: PostQuestionDetailList = {
        questionCommands: [
          {
            questionId: questionId,
            qtype: qtype.multiple_choice.code
          }
        ]
      };
      const response = await QuestionService.getQuestionDetail(questionCommands);
      return response;
    } catch (error) {
      console.log(error);
    }
  };

  //  Form handler
  const schema = useMemo(() => {
    return yup.object().shape({
      questionName: yup.string().required(t("question_name_required")).trim(),
      questionDescription: yup
        .string()
        .required(t("question_description_required"))
        .trim("")
        .test("isQuillEmpty", t("question_description_required"), (value) => !isQuillEmpty(value)),
      defaultScore: yup
        .string()
        .required(t("question_default_score_required"))
        .test(
          "is-decimal",
          "Invalid number, default score must be a number greater than or equal 0",
          (value) => isValidDecimal(value)
        )
        .transform((value) => value.replace(",", ".")),
      generalDescription: yup.string().trim(""),

      correctFeedback: yup.string(),
      incorrectFeedback: yup.string(),
      showInstructions: yup.string().required(t("question_show_instructions_required")),
      showNumCorrect: yup.string().required(t("question_show_num_correct_required"))
    });
  }, [t]);

  const {
    control,
    handleSubmit,
    formState: { errors },
    trigger,
    setValue
  } = useForm<FormData>({
    resolver: yupResolver(schema),
    defaultValues: {
      defaultScore: "1",
      generalDescription: "",
      questionDescription: "",
      questionName: "",

      correctFeedback: "",
      incorrectFeedback: "",
      showInstructions: "1",
      showNumCorrect: "1"
    }
  });

  const location = useLocation();
  const isQuestionBank = location.state?.isQuestionBank;
  const isOrgQuestionBank = location.state?.isOrgQuestionBank;
  const isAdminQuestionBank = location.state?.isAdminQuestionBank;
  const isOrgAdminQuestionBank = location.state?.isOrgQuestionBank;
  const categoryName = location.state?.categoryName;
  const categoryId = useParams()["categoryId"];

  const submitHandler = async (data: any) => {
    setSubmitLoading(true);

    const formSubmittedData: FormData = { ...data };
    const newQuestion: PutMultipleChoiceQuestion = {
      qtMultichoiceQuestionId: trueFalseQuestionData?.id || "",
      correctFeedback: formSubmittedData.correctFeedback,
      partiallyCorrectFeedback: "",
      incorrectFeedback: formSubmittedData.incorrectFeedback,
      showNumCorrect: Number(formSubmittedData.showNumCorrect),
      showStandardInstructions: formSubmittedData.showInstructions.toString(),

      question: {
        difficulty: "EASY",
        name: formSubmittedData.questionName,
        questionText: formSubmittedData.questionDescription,
        generalFeedback: formSubmittedData?.generalDescription,
        defaultMark: Number(formSubmittedData.defaultScore),
        updatedBy: user.userId,
        answers: [
          {
            feedback: "Correct",
            answer: Number(formSubmittedData.showNumCorrect) === 1 ? "true" : "false",
            fraction: 1
          }
        ]
      }
    };

    MultichoiceQuestionService.updateMultichoiceQuestion(newQuestion)
      .then((res) => {
        console.log(res);
        // if (!isQuestionBank) getQuestionByQuestionId(res.questionId);
        dispatch(
          setSuccessMess(
            t("question_management_edit_question_success", {
              questionType: t("common_question_type_with_question_truefalse")
            })
          )
        );
      })
      .catch((err) => {
        console.log(err);
        dispatch(
          setErrorMess(
            t("question_management_edit_question_success", {
              questionType: t("common_question_type_with_question_truefalse")
            })
          )
        );
      })
      .finally(() => {
        setSubmitLoading(false);

        // if (isAdminQuestionBank)
        //   navigate(routes.admin.question_bank.detail.replace(":categoryId", categoryId ?? ""));
        // else if (isOrgAdminQuestionBank)
        //   navigate(routes.org_admin.question_bank.detail.replace(":categoryId", categoryId ?? ""));
        // else if (isQuestionBank)
        //   navigate(routes.lecturer.question_bank.detail.replace(":categoryId", categoryId ?? ""));
        // else navigate(routes.lecturer.exam.create.replace(":courseId", courseId));
      });
  };

  const dispatch = useDispatch();
  const getQuestionByQuestionId = async (questionId: string) => {
    try {
      const response = await QuestionService.getQuestionsByQuestionId(questionId);
      dispatch(setQuestionCreate(response));
    } catch (error) {
      console.log(error);
    }
  };
  const getCourseData = async (courseId: string) => {
    try {
      const response = await CourseService.getCourseDetail(courseId);
      setCourseData(response);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      if (courseId) getCourseData(courseId);

      if (questionId) {
        const res = await handleGetMultichoiceQuestionDetailForm(questionId);
        setTrueFalseQuestionData(res.questionResponses[0].qtypeMultichoiceQuestion);
      }
    };

    fetchData();
  }, [courseId]);

  useEffect(() => {
    if (trueFalseQuestionData) {
      setValue("questionName", trueFalseQuestionData.question.name);
      setValue("questionDescription", trueFalseQuestionData.question.questionText);
      setValue("defaultScore", trueFalseQuestionData.question.defaultMark.toString());
      setValue("generalDescription", trueFalseQuestionData.question.generalFeedback);

      setValue("correctFeedback", trueFalseQuestionData.correctFeedback || "");
      setValue("incorrectFeedback", trueFalseQuestionData.incorrectFeedback || "");
      setValue(
        "showInstructions",
        trueFalseQuestionData.showStandardInstructions?.toString() || "1"
      );
      setValue("showNumCorrect", trueFalseQuestionData.showNumCorrect?.toString() || "1");
    }
  }, [trueFalseQuestionData]);

  useEffect(() => {
    if (i18n.language !== currentLang && errors?.questionName) {
      console.log("triggered");
      trigger();
      setCurrentLang(i18n.language);
    }
  }, [i18n.language]);

  const showNumCorrectOptions = [
    { value: "1", label: t("common_true") },
    { value: "0", label: t("common_false") }
  ];
  const showInstructionsOptions = [
    { value: "1", label: t("question_management_show_instructions") },
    { value: "0", label: t("question_management_no_show_instructions") }
  ];

  const breadCrumbData = isQuestionBank
    ? [
        {
          navLink: routes.lecturer.question_bank.path,
          label: i18next.format(t("common_question_bank"), "firstUppercase")
        },
        {
          navLink: `/lecturer/question-bank-management/${urlParams["categoryId"]}`,
          label: categoryName
        }
      ]
    : [
        {
          navLink: routes.lecturer.course.management,
          label: t("common_course_management")
        },
        {
          navLink: routes.lecturer.course.information.replace(":courseId", courseId || ""),
          label: courseData?.name
        },
        {
          navLink: routes.lecturer.course.assignment.replace(":courseId", courseId || ""),
          label: t("common_type_assignment")
        },
        {
          navLink: routes.lecturer.exam.edit
            .replace(":courseId", courseId || "")
            .replace(":examId", examId || ""),
          label: `${t("common_edit")} ${t("course_detail_exam").toLowerCase()}`
        }
      ];

  return (
    <>
      <Helmet>
        <title>Course | Edit true false question</title>
      </Helmet>

      {trueFalseQuestionData && (
        <Grid className={classes.root}>
          <Header />
          <form onSubmit={handleSubmit(submitHandler, () => setSubmitCount((count) => count + 1))}>
            <Container style={{ marginTop: `${headerHeight}px` }} className={classes.container}>
              <CustomBreadCrumb
                breadCrumbData={breadCrumbData}
                lastBreadCrumbLabel={`${t("common_edit")} ${t("common_question_type_with_question_truefalse").toLowerCase()}`}
              />

              <Stack direction='row' spacing={1} alignItems='center' justifyContent='flex-start'>
                <Box
                  sx={{
                    borderRadius: "1000px",
                    backgroundColor: "#DFF2E0",
                    width: "40px",
                    height: "40px"
                  }}
                  display={"flex"}
                  justifyContent={"center"}
                  alignItems={"center"}
                >
                  <RuleRoundedIcon
                    sx={{
                      color: "#4CAF50"
                    }}
                  />
                </Box>
                <Heading2
                  translation-key={["common_add", "common_question_type_with_question_truefalse"]}
                >
                  {t("common_edit").toUpperCase()}{" "}
                  {t("common_question_type_with_question_truefalse").toUpperCase()}
                </Heading2>
              </Stack>
              <Button
                onClick={() => {
                  navigate(
                    routes.lecturer.exam.edit
                      .replace(":courseId", courseId || "")
                      .replace(":examId", examId || "")
                  );
                }}
                startDecorator={<ChevronLeftIcon fontSize='small' />}
                color='neutral'
                variant='soft'
                size='md'
                sx={{ width: "fit-content", marginTop: "20px", marginLeft: "7px" }}
              >
                {t("common_back")}
              </Button>
              <Box className={classes.formBody}>
                <Grid container spacing={3}>
                  <Grid item xs={12} md={12}>
                    <Grid container spacing={3}>
                      <Grid item xs={12}>
                        <Card
                          variant='soft'
                          color='primary'
                          sx={{
                            padding: "10px"
                          }}
                        >
                          <ParagraphBody fontWeight={"600"} colorname='--blue-2'>
                            {i18next.t("common_general").toUpperCase()}
                          </ParagraphBody>
                        </Card>
                      </Grid>
                      {/* Question name */}
                      <Grid item xs={12} md={6}>
                        <Controller
                          defaultValue=''
                          control={control}
                          name='questionName'
                          render={({ field: { ref, ...field } }) => (
                            <InputTextFieldColumn
                              inputRef={ref}
                              error={Boolean(errors?.questionName)}
                              errorMessage={errors.questionName?.message}
                              title={`${t("exam_management_create_question_name")}`}
                              type='text'
                              placeholder={t("exam_management_create_question_name")}
                              titleRequired={true}
                              translation-key='exam_management_create_question_name'
                              useDefaultTitleStyle
                              {...field}
                            />
                          )}
                        />
                      </Grid>

                      {/* Default Score */}
                      <Grid item xs={12} md={6}>
                        <Controller
                          defaultValue={"0"}
                          control={control}
                          name='defaultScore'
                          render={({ field: { ref, ...field } }) => (
                            <InputTextFieldColumn
                              useDefaultTitleStyle
                              inputRef={ref}
                              titleRequired={true}
                              error={Boolean(errors?.defaultScore)}
                              errorMessage={errors.defaultScore?.message}
                              title={`${t("question_management_default_score")}`}
                              type='text'
                              placeholder={t("question_management_default_score")}
                              required
                              translation-key={[
                                "question_management_default_score",
                                "question_default_score_description"
                              ]}
                              tooltipDescription={t("question_default_score_description")}
                              {...field}
                            />
                          )}
                        />
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={12} md={12}>
                    <Grid container spacing={3}>
                      {/* Question description */}
                      <Grid item xs={12} md={6}>
                        <TitleWithInfoTip
                          translation-key='exam_management_create_question_description'
                          title={`${t("exam_management_create_question_description")} `}
                          titleRequired
                          fontSize='12px'
                          color='var(--gray-60)'
                          gutterBottom
                          fontWeight='600'
                        />
                        <Grid container spacing={1}>
                          <Grid item xs={12} md={12} className={classes.textEditor}>
                            <Controller
                              defaultValue=''
                              control={control}
                              name='questionDescription'
                              render={({ field }) => (
                                <TextEditor
                                  submitCount={submitCount}
                                  title={t("exam_management_create_question_description")}
                                  openDialog
                                  roundedBorder={true}
                                  error={Boolean(errors?.questionDescription)}
                                  placeholder={`${t("question_management_enter_question_description")}...`}
                                  required
                                  translation-key='question_management_enter_question_description'
                                  {...field}
                                />
                              )}
                            />
                          </Grid>
                          <Grid item xs={12} md={12}>
                            <></>
                          </Grid>
                          <Grid item xs={12} md={12}>
                            <></>
                          </Grid>
                          <Grid item xs={12} md={12}>
                            {Boolean(errors?.questionDescription) && (
                              <ErrorMessage>{errors.questionDescription?.message}</ErrorMessage>
                            )}
                          </Grid>
                        </Grid>
                      </Grid>

                      {/* General feedback */}
                      <Grid item xs={12} md={6}>
                        <TitleWithInfoTip
                          translation-key='question_management_general_comment'
                          title={`${t("question_management_general_comment")} `}
                          optional
                          fontSize='12px'
                          color='var(--gray-60)'
                          gutterBottom
                          fontWeight='600'
                        />
                        <Grid container spacing={1}>
                          <Grid item xs={12} md={12} className={classes.textEditor}>
                            <Controller
                              defaultValue=''
                              control={control}
                              name='generalDescription'
                              render={({ field }) => (
                                <TextEditor
                                  title={t("question_management_general_comment")}
                                  openDialog
                                  error={Boolean(errors?.generalDescription)}
                                  roundedBorder={true}
                                  placeholder={`${t("question_management_enter_general_comment")}...`}
                                  translation-key='question_management_enter_general_comment'
                                  {...field}
                                />
                              )}
                            />
                          </Grid>
                          <Grid item xs={12} md={12}>
                            <></>
                          </Grid>
                          <Grid item xs={12} md={12}></Grid>
                          <Grid item xs={12} md={12}>
                            {Boolean(errors?.generalDescription) && (
                              <ErrorMessage marginBottom={"10px"}>
                                {errors.generalDescription?.message}
                              </ErrorMessage>
                            )}
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={12} md={12}>
                    <Grid container spacing={3}>
                      <Grid item xs={12} />
                      <Grid item xs={12}>
                        <Card
                          variant='soft'
                          color='primary'
                          sx={{
                            padding: "10px"
                          }}
                        >
                          <ParagraphBody fontWeight={"600"} colorname='--blue-2'>
                            {i18next.t("common_detail").toUpperCase()}
                          </ParagraphBody>
                        </Card>
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <TitleWithInfoTip
                          translation-key='question_management_correct_answer'
                          title={`${t("question_management_correct_answer")} `}
                          tooltipDescription={t("question_management_correct_answer_description")}
                          fontSize='12px'
                          color='var(--gray-60)'
                          gutterBottom
                          fontWeight='600'
                        />
                        <Controller
                          name='showNumCorrect'
                          control={control}
                          defaultValue={"1"}
                          render={({ field: { onChange, value } }) => (
                            <JoyRadioGroup
                              value={value}
                              onChange={(newValue) => {
                                onChange(newValue);
                              }}
                              values={showNumCorrectOptions}
                              orientation='horizontal'
                              size='md'
                            />
                          )}
                        />
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <TitleWithInfoTip
                          title={t("question_multiple_choice_show_instructions")}
                          fontSize='12px'
                          color='var(--gray-60)'
                          gutterBottom
                          fontWeight='600'
                        />
                        <Controller
                          name='showInstructions'
                          control={control}
                          defaultValue={"1"}
                          render={({ field: { onChange, value } }) => (
                            <JoyRadioGroup
                              value={value}
                              onChange={onChange}
                              values={showInstructionsOptions}
                              orientation='horizontal'
                              size='md'
                            />
                          )}
                        />
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={12} md={12}>
                    <Grid container spacing={3}>
                      {/* Correct feedback */}
                      <Grid item xs={12} md={6}>
                        <TitleWithInfoTip
                          optional
                          translation-key='question_multiple_choice_correct_feedback'
                          title={t("question_multiple_choice_correct_feedback")}
                          fontSize='12px'
                          color='var(--gray-60)'
                          gutterBottom
                          fontWeight='600'
                        />
                        <Grid container spacing={1}>
                          <Grid item xs={12} md={12} className={classes.textEditor}>
                            <Controller
                              defaultValue=''
                              control={control}
                              name='correctFeedback'
                              render={({ field }) => (
                                <TextEditor
                                  openDialog
                                  title={t("question_multiple_choice_correct_feedback")}
                                  roundedBorder={true}
                                  error={Boolean(errors?.correctFeedback)}
                                  placeholder={`${t("question_multiple_choice_enter_correct_feedback")}...`}
                                  translation-key='question_multiple_choice_enter_correct_feedback'
                                  {...field}
                                />
                              )}
                            />
                          </Grid>
                          <Grid item xs={12} md={12}>
                            <></>
                          </Grid>
                          <Grid item xs={12} md={12}>
                            <></>
                          </Grid>
                          <Grid item xs={12} md={12}>
                            {Boolean(errors?.correctFeedback) && (
                              <ErrorMessage>{errors.correctFeedback?.message}</ErrorMessage>
                            )}
                          </Grid>
                        </Grid>
                      </Grid>

                      {/* Incorrect feedback */}
                      <Grid item xs={12} md={6}>
                        <TitleWithInfoTip
                          optional
                          translation-key='question_multiple_choice_incorrect_feedback'
                          title={t("question_multiple_choice_incorrect_feedback")}
                          fontSize='12px'
                          color='var(--gray-60)'
                          gutterBottom
                          fontWeight='600'
                        />
                        <Grid container spacing={1}>
                          <Grid item xs={12} md={12} className={classes.textEditor}>
                            <Controller
                              defaultValue=''
                              control={control}
                              name='incorrectFeedback'
                              render={({ field }) => (
                                <TextEditor
                                  openDialog
                                  title={t("question_multiple_choice_incorrect_feedback")}
                                  roundedBorder={true}
                                  error={Boolean(errors?.correctFeedback)}
                                  placeholder={`${t("question_multiple_choice_enter_incorrect_feedback")}...`}
                                  translation-key='question_multiple_choice_enter_incorrect_feedback'
                                  {...field}
                                />
                              )}
                            />
                          </Grid>
                          <Grid item xs={12} md={12}>
                            <></>
                          </Grid>
                          <Grid item xs={12} md={12}>
                            <></>
                          </Grid>
                          <Grid item xs={12} md={12}>
                            {Boolean(errors?.incorrectFeedback) && (
                              <ErrorMessage>{errors.incorrectFeedback?.message}</ErrorMessage>
                            )}
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>

                <Divider />
                <Stack spacing={{ xs: 2 }} direction={"row"} justifyContent={"center"}>
                  <JoyButton
                    loading={submitLoading}
                    variant='solid'
                    type='submit'
                    translation-key='common_save'
                  >
                    {t("common_save")}
                  </JoyButton>
                  <JoyButton
                    variant='outlined'
                    translation-key='common_cancel'
                    onClick={() => {
                      if (isQuestionBank)
                        navigate(
                          routes.lecturer.question_bank.detail.replace(
                            ":categoryId",
                            categoryId ?? ""
                          )
                        );
                      else
                        navigate(
                          routes.lecturer.exam.edit
                            .replace(":courseId", courseId || "")
                            .replace(":examId", examId || "")
                        );
                    }}
                  >
                    {t("common_cancel")}
                  </JoyButton>
                </Stack>
              </Box>
            </Container>
          </form>
          <Footer />
        </Grid>
      )}
    </>
  );
};

export default EditTrueFalseQuestion;
