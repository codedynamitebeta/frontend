export const routes = {
  lecturer: {
    course: {
      management: "/lecturer/courses",
      detail: "/lecturer/courses/:courseId/*",
      information: "/lecturer/courses/:courseId/information",
      assignment: "/lecturer/courses/:courseId/assignment",
      grade: "/lecturer/courses/:courseId/grade",
      participant: "/lecturer/courses/:courseId/participant"
    },
    code_question: {
      management: "/lecturer/code-questions",
      create: "/lecturer/code-questions/create",
      detail: "/lecturer/code-questions/edit/:id/*",
      information: "/lecturer/code-questions/edit/:id/information",
      test_cases: "/lecturer/code-questions/edit/:id/test-cases",
      code_stubs: "/lecturer/code-questions/edit/:id/code-stubs",
      languages: "/lecturer/code-questions/edit/:id/languages"
    },
    assignment: {
      create: "/lecturer/assignment-management/create",
      grading: "/lecturer/assignment-management/grading"
    },
    question: {
      essay: {
        create: "/lecturer/question-management/essay/create"
      },
      multiple_choice: {
        create: "/lecturer/question-management/multiple-choice/create"
      },
      short_answer: {
        create: "/lecturer/question-management/short-answer/create"
      },
      true_false: {
        create: "/lecturer/question-management/true-false/create"
      }
    },
    question_bank: {
      path: "lecturer/question-bank-management"
    },
    exam: {
      create: "/lecturer/exam-management/create"
    }
  },
  student: {
    course: {
      management: "/student/courses",
      detail: "/student/courses/:courseId/*",
      information: "/student/courses/:courseId/information",
      assignment: "/student/courses/:courseId/assignment",
      grade: "/student/courses/:courseId/grade",
      participant: "/student/courses/:courseId/participant"
    }
  },
  user: {
    problem: {
      list: "/problems",
      detail: "/problems/:id"
    },
    assignment: {
      submission: "/assignments/:assignmentId/submission"
    }
  }
};
