export interface ExamEntity {
  id: string;
  courseId: string;
  name: string;
  scores?: number;
  maxScores?: number;
  timeOpen: Date;
  timeClose: Date;
  timeLimit?: number;
  intro: string;
  overdueHanding?: string;
  canRedoQuestions?: boolean;
  maxAttempts?: number;
  shuffleAnswers?: boolean;
  gradeMethod: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface ExamCreateRequest {
  courseId: string;
  name: string;
  intro: string;
  score: number;
  maxScore: number;
  timeOpen: Date;
  timeClose: Date;
  timeLimit: number;
  overdueHandling: string;
  canRedoQuestions: boolean;
  maxAttempts: number;
  shuffleQuestions: boolean;
  gradeMethod: string;
  questionIds: ExamQuestion[];
}

export interface ExamQuestion {
  questionId: string;
  page: number;
}

export interface ExamOverview {
  numberOfStudents: number;
  submitted: number;
}

export interface StartEndExamRequest {
  examId: string;
  userId: string;
}

export interface SubmitExamRequest {
  examId: string;
  userId: string;
  questions: ExamQuestionSubmission[];
  startTime: string;
}

export interface ExamQuestionSubmission {
  questionId: string;
  content: string;
  numFile: number;
}
