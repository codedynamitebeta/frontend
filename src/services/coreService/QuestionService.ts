import axios from "axios";
import { API } from "constants/API";
import { PostEssayQuestion, PostMultipleChoiceQuestion, PostShortAnswerQuestion } from "models/coreService/entity/QuestionEntity";

const coreServiceApiUrl = process.env.REACT_APP_CORE_SERVICE_API_URL || "";

export class QuestionService {
  static async createShortAnswerQuestion(shortAnswerQuestionData: PostShortAnswerQuestion) {
    try {
      const response = await axios.post(
        `${coreServiceApiUrl}${API.CORE.QUESTION.SHORT_ANSWER_QUESTION.CREATE}`,
        shortAnswerQuestionData
      );
      if (response.status === 200) {
        return response.data;
      }
    } catch (error: any) {
      console.error("Failed to create short answer question", error);
      return Promise.reject({
        code: error.response?.data?.code || 503,
        status: error.response?.data?.status || "Service Unavailable",
        message: error.response?.data?.message || error.message
      });
    }
  }

  static async createEssayQuestion(essayQuestionData: PostEssayQuestion) {
    try {
      const response = await axios.post(
        `${coreServiceApiUrl}${API.CORE.QUESTION.ESSAY_QUESTION.CREATE}`,
        essayQuestionData
      );
      if (response.status === 200) {
        return response.data;
      }
    } catch (error: any) {
      console.error("Failed to create essay question", error);
      return Promise.reject({
        code: error.response?.data?.code || 503,
        status: error.response?.data?.status || "Service Unavailable",
        message: error.response?.data?.message || error.message
      });
    }
  }

  static async createMultichoiceQuestion(multipleChoiceQuestionData: PostMultipleChoiceQuestion) {
    try {
      const response = await axios.post(
        `${coreServiceApiUrl}${API.CORE.QUESTION.MULTIPLE_CHOICE_QUESTION.CREATE}`,
        multipleChoiceQuestionData
      );
      if (response.status === 200) {
        return response.data;
      }
    } catch (error: any) {
      console.error("Failed to create multiple choice question", error);
      return Promise.reject({
        code: error.response?.data?.code || 503,
        status: error.response?.data?.status || "Service Unavailable",
        message: error.response?.data?.message || error.message
      });
    }
  }
}