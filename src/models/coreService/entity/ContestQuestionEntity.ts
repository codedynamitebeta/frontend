export interface ContestQuestionEntity {
  questionId: string;
  codeQuestionId: string;
  organization?: {
    id: string;
    name: string;
    description: string;
  };
  difficulty: string;
  name: string;
  questionText: string;
  defaultMark: number;
  maxGrade: number;
  grade?: number;
  numOfSubmissions?: number;
  numOfCorrectSubmissions?: number;
  doTime?: number;
}
