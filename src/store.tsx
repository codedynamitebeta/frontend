import { configureStore } from "@reduxjs/toolkit";
import selectedReducer from "reduxes/Selected/index";
import codePlagiarismReducer from "reduxes/CodePlagiarism/index";
import selectRubricDialogReducer from "reduxes/SelectRubricDialog/index";
import rubricDialogReducer from "reduxes/NewEditRubricDialog/index";
import selectRubricCriteriaDialog from "reduxes/SelectRubricCriteriaDialog";
import rubricCriteriaConfigDialog from "reduxes/NewEditRubricCriteriaDialog";
import topicReducer from "reduxes/coreService/Topic/index";
import certificateCourseReducer from "reduxes/coreService/CertificateCourse/index";
import chapterReducer from "reduxes/coreService/Chapter/index";
import algorithmTagReducer from "reduxes/CodeAssessmentService/CodeQuestion/Filter/Algorithm";
import courseReducer from "reduxes/courseService/course/index";
import examReducer from "reduxes/courseService/exam/index";
import SearchAndDifficultyAndSolved from "reduxes/CodeAssessmentService/CodeQuestion/Filter/SearchAndDifficultyAndSolved";

const store = configureStore({
  reducer: {
    selected: selectedReducer,
    codePlagiarism: codePlagiarismReducer,
    selectRubricDialog: selectRubricDialogReducer,
    rubricDialog: rubricDialogReducer,
    selectCriteriaDialog: selectRubricCriteriaDialog,
    rubricCriteriaConfigDialog: rubricCriteriaConfigDialog,
    topic: topicReducer,
    certifcateCourse: certificateCourseReducer,
    chapter: chapterReducer,
    algorithmnTag: algorithmTagReducer,
    course: courseReducer,
    exam: examReducer,
    difficultyAndSolved: SearchAndDifficultyAndSolved
  },
  // middleware: getDefaultMiddleWare => getDefaultMiddleWare().concat(ap)
  devTools: true
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export default store;
