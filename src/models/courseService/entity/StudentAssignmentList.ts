import { AssignmentMaxGradeInfo } from "./AssignmentMaxGradeInfo";
import { StudentGrade } from "./StudentGrade";

export interface StudentAssignmentList {
  assignments: AssignmentMaxGradeInfo[];
  students: StudentGrade[];
  currentPage?: number;
  totalItems?: number;
  totalPages?: number;
}
