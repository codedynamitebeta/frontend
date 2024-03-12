import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { Grid } from "@mui/material";
import Box from "@mui/material/Box";
import {
  GridCallbackDetails,
  GridColDef,
  GridColumnGroupingModel,
  GridPaginationModel,
  GridRowParams,
  GridRowSelectionModel
} from "@mui/x-data-grid";
import CustomDataGrid from "components/common/CustomDataGrid";
import Button, { BtnType } from "components/common/buttons/Button";
import Heading1 from "components/text/Heading1";
import ParagraphBody from "components/text/ParagraphBody";
import TextTitle from "components/text/TextTitle";
import { useNavigate } from "react-router-dom";
import { routes } from "routes/routes";
import qtype from "utils/constant/Qtype";
import ExamSubmissionFeatureBar from "./components/FeatureBar";
import SubmissionBarChart from "./components/SubmissionChart";
import classes from "./styles.module.scss";

export enum SubmissionStatusSubmitted {
  SUBMITTED = "Đã nộp",
  NOT_SUBMITTED = "Chưa nộp"
}

export enum SubmissionStatusGraded {
  GRADED = "Đã chấm",
  NOT_GRADED = "Chưa chấm"
}

const LecturerCourseExamSubmissions = () => {
  const navigate = useNavigate();
  const totalSubmissionCount = 20;
  const totalStudent = 30;
  const visibleColumnList = { id: false, name: true, email: true, role: true, action: true };
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

  const saveCodeStringToUniqueFile = ({
    codeString,
    fileName,
    fileExtension,
    submissionTime,
    studentId,
    questionId
  }: {
    codeString: string;
    fileName: string;
    fileExtension: string;
    submissionTime: string;
    studentId: number;
    questionId: number;
  }) => {
    return;
  };

  // const checkSourceCodePlagiarism = useCallback(
  //   async () =>
  //     async ({ questionId, studentId }: { questionId: number; studentId: number }) => {
  //       const result = {
  //         allPairs: [] as Pair[],
  //         report: [] as {
  //           left: {
  //             path: string;
  //             startRow: number;
  //             startCol: number;
  //             endRow: number;
  //             endCol: number;
  //           };
  //           right: {
  //             path: string;
  //             startRow: number;
  //             startCol: number;
  //             endRow: number;
  //             endCol: number;
  //           };
  //         }[]
  //       };

  //       const files = [
  //         "./Dolos/sample.js",
  //         "./Dolos/copied_function.js",
  //         "./Dolos/another_copied_function.js",
  //         "./Dolos/copy_of_sample.js"
  //       ];

  //       const dolos = new Dolos();
  //       const report = await dolos.analyzePaths(files);

  //       for (const pair of report.allPairs()) {
  //         result.allPairs.push(pair);
  //         for (const fragment of pair.buildFragments()) {
  //           const left = fragment.leftSelection;
  //           const right = fragment.rightSelection;
  //           result.report.push({
  //             left: {
  //               path: pair.leftFile.path,
  //               startRow: left.startRow,
  //               startCol: left.startCol,
  //               endRow: left.endRow,
  //               endCol: left.endCol
  //             },
  //             right: {
  //               path: pair.rightFile.path,
  //               startRow: right.startRow,
  //               startCol: right.startCol,
  //               endRow: right.endRow,
  //               endCol: right.endCol
  //             }
  //           });
  //         }
  //       }
  //       return result;
  //     },
  //   []
  // );

  const examData = {
    id: 1,
    max_grade: 30,
    questions: [
      {
        id: 1,
        question: "Câu hỏi 1",
        answer: "Đáp án 1",
        max_grade: 10,
        type: qtype.source_code,
        plagiarism_detection: {
          is_checked: true,
          result: {
            is_plagiarism: true,
            plagiarism_rate: 0.5
          }
        }
      },
      {
        id: 2,
        question: "Câu hỏi 2",
        answer: "Đáp án 2",
        max_grade: 10,
        type: qtype.true_false
      },
      {
        id: 3,
        question: "Câu hỏi 3",
        answer: "Đáp án 3",
        max_grade: 10,
        type: qtype.multiple_choice
      }
    ]
  };

  const submissionList = [
    {
      id: 1,
      student_name: "Nguyễn Đinh Quang Khánh",
      student_email: "khanhndq2002@gmail.com",
      status: {
        submission_status_submitted: SubmissionStatusSubmitted.SUBMITTED,
        grade_status: SubmissionStatusGraded.GRADED,
        late_submission: {
          is_late: true,
          late_duration: "1 ngày 2 giờ"
        }
      },
      last_submission_time: "Saturday, 3 February 2024, 9:46 AM",
      last_grade_time: "Saturday, 3 February 2024, 9:46 AM",
      current_final_grade: 0,
      grades: [
        {
          question_id: 1,
          grade_status: SubmissionStatusGraded.GRADED,
          current_grade: 10
        },
        {
          question_id: 2,
          grade_status: SubmissionStatusGraded.GRADED,
          current_grade: 8
        },
        {
          question_id: 3,
          grade_status: SubmissionStatusGraded.GRADED,
          current_grade: 5
        }
      ]
    },
    {
      id: 2,
      student_name: "Nguyễn Quốc Tuấn",
      student_email: "tuannguyen@gmail.com",
      status: {
        submission_status_submitted: SubmissionStatusSubmitted.NOT_SUBMITTED,
        grade_status: SubmissionStatusGraded.NOT_GRADED,
        late_submission: {
          is_late: false,
          late_duration: "1 ngày 2 giờ"
        }
      },
      last_submission_time: "Saturday, 3 February 2024, 9:46 AM",
      last_grade_time: "Saturday, 3 February 2024, 9:46 AM",
      current_final_grade: 10,
      grades: [
        {
          question_id: 1,
          grade_status: SubmissionStatusGraded.GRADED,
          current_grade: 8
        },
        {
          question_id: 2,
          grade_status: SubmissionStatusGraded.GRADED,
          current_grade: 10
        },
        {
          question_id: 3,
          grade_status: SubmissionStatusGraded.GRADED,
          current_grade: 9
        }
      ]
    }
  ];

  const tableHeading: GridColDef[] = [
    { field: "student_name", headerName: "Tên sinh viên", width: 200 },
    { field: "student_email", headerName: "Email", width: 200 },
    {
      field: "status",
      headerName: "Trạng thái",
      width: 250,
      renderCell: (params) => {
        return (
          <Box padding='5px' width='100%'>
            <Box
              sx={{
                padding: "5px",
                backgroundColor:
                  params.value.submission_status_submitted === SubmissionStatusSubmitted.SUBMITTED
                    ? "var(--green-300)"
                    : "#f5f5f5",
                fontSize: "17px"
              }}
            >
              {params.value.submission_status_submitted === SubmissionStatusSubmitted.SUBMITTED
                ? "Đã nộp"
                : "Chưa nộp"}
            </Box>
            <Box
              sx={{
                padding: "5px",
                backgroundColor: "#EFCFCF",
                fontSize: "17px",
                display: params.value.late_submission.is_late ? "block" : "none"
              }}
            >
              {"Quá hạn "}
              {params.value.late_submission.late_duration}
            </Box>
            <Box
              sx={{
                padding: "5px",
                backgroundColor:
                  params.value.submission_status_submitted === SubmissionStatusSubmitted.SUBMITTED
                    ? "var(--green-300)"
                    : "#f5f5f5",
                fontSize: "17px",
                display:
                  params.value.grade_status === SubmissionStatusGraded.GRADED ? "block" : "none"
              }}
            >
              {params.value.grade_status === SubmissionStatusGraded.GRADED
                ? "Đã chấm"
                : "Chưa chấm"}
            </Box>
          </Box>
        );
      }
    },
    { field: "last_submission_time", headerName: "Thời gian nộp cuối", width: 200 },
    { field: "last_grade_time", headerName: "Thời gian chấm cuối", width: 200 },
    {
      field: "current_final_grade",
      headerName: "Điểm tổng kết",
      width: 200,
      renderCell: (params) => {
        return (
          <Box
            sx={{
              padding: "10px 0"
            }}
          >
            <Button
              btnType={BtnType.Primary}
              onClick={() => {
                navigate(routes.lecturer.exam.grading);
              }}
              margin='0 0 10px 0'
            >
              Chấm điểm
            </Button>
            <TextTitle>
              {params.value} / {examData.max_grade}
            </TextTitle>
          </Box>
        );
      }
    }
  ];

  const columnGroupingModel: GridColumnGroupingModel = [];

  examData.questions.forEach((question) => {
    tableHeading.push({
      field: `question-${question.id}`,
      headerName: question.question,
      width: 180,
      renderCell: () => {
        for (let i = 0; i < submissionList.length; i++) {
          for (let j = 0; j < submissionList[i].grades.length; j++) {
            if (submissionList[i].grades[j].question_id === question.id) {
              return (
                <TextTitle>
                  {submissionList[i].grades[j].current_grade} / {question.max_grade}
                </TextTitle>
              );
            }
          }
        }
      }
    });

    columnGroupingModel.push({
      groupId: `question-${question.id}-plagiarism-detection`,
      children: [
        {
          groupId: `question-${question.id}-type`,
          children: [{ field: `question-${question.id}` }],
          headerName: `Câu hỏi ${question.type.vi_name}`
        }
      ],
      renderHeaderGroup() {
        return question.type.code === qtype.source_code.code ? (
          <Button
            btnType={BtnType.Outlined}
            onClick={async () => {
              navigate(
                `${routes.lecturer.exam.code_plagiarism_detection}?questionId=${question.id}`
              );
            }}
          >
            Kiểm tra gian lận
          </Button>
        ) : null;
      }
    });
  });

  const submissionDataset = [
    {
      student: 59,
      range: "0.00 - 5.00"
    },
    {
      student: 50,
      range: "5.00 - 6.00"
    },
    {
      student: 47,
      range: "6.00 - 7.00"
    },
    {
      student: 54,
      range: "7.00 - 8.00"
    },
    {
      student: 57,
      range: "8.00 - 9.00"
    },
    {
      student: 60,
      range: "9.00 - 10.00"
    },
    {
      student: 59,
      range: "10.00 - 11.00"
    },
    {
      student: 65,
      range: "11.00 - 12.00"
    },
    {
      student: 51,
      range: "12.00 - 13.00"
    },
    {
      student: 60,
      range: "13.00 - 14.00"
    },
    {
      student: 67,
      range: "14.00 - 15.00"
    },
    {
      student: 61,
      range: "15.00 - 16.00"
    }
  ];

  const rowClickHandler = (params: GridRowParams<any>) => {
    console.log(params);
  };

  return (
    <Box className={classes.examBody}>
      <Button
        btnType={BtnType.Primary}
        onClick={() => {
          navigate(routes.lecturer.exam.detail);
        }}
        startIcon={
          <ChevronLeftIcon
            sx={{
              color: "white"
            }}
          />
        }
        width='fit-content'
      >
        <ParagraphBody>Quay lại</ParagraphBody>
      </Button>
      <Heading1>Bài kiểm tra cuối kỳ</Heading1>
      <ParagraphBody>
        Số sinh viên nộp: {totalSubmissionCount}/{totalStudent}
      </ParagraphBody>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <SubmissionBarChart
          dataset={submissionDataset}
          xAxis={[{ scaleType: "band", dataKey: "range" }]}
          width={1000}
          height={500}
        />
      </Box>
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <Heading1>Danh sách bài làm</Heading1>
        </Grid>
        <Grid item xs={12}>
          <ExamSubmissionFeatureBar />
        </Grid>
        <Grid item xs={12}>
          <CustomDataGrid
            dataList={submissionList}
            tableHeader={tableHeading}
            onSelectData={rowSelectionHandler}
            visibleColumn={visibleColumnList}
            dataGridToolBar={dataGridToolbar}
            page={page}
            pageSize={pageSize}
            totalElement={totalElement}
            onPaginationModelChange={pageChangeHandler}
            showVerticalCellBorder={true}
            getRowHeight={() => "auto"}
            onClickRow={rowClickHandler}
            columnGroupingModel={columnGroupingModel}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default LecturerCourseExamSubmissions;