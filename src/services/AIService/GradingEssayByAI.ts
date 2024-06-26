import { GoogleGenerativeAI } from "@google/generative-ai";
import { jsonrepair } from "jsonrepair";
// Access your API key as an environment variable (see "Set up your API key" above)
const genAI = new GoogleGenerativeAI(process.env.REACT_APP_GOOGLE_GEMINI_AI_KEY || "");

export interface QuestionEssay {
  content: string;
  answer: string;
  rubics: string;
  maxScore: number;
}

interface FeedbackContent {
  content: string;
  score: number;
}

interface FeedbackForm {
  content: string;
  score: number;
}

interface FeedbackStyle {
  content: string;
  score: number;
}

export interface IFeedback {
  content: FeedbackContent;
  form: FeedbackForm;
  style: FeedbackStyle;
  overall: string;
}

export interface IFeedbackGradedAI {
  studentSubmissionId: number;
  feedback: IFeedback;
}

export enum EFeedbackGradedCriteriaRate {
  CONTENT_FEEDBACK = 0.9,
  FORM_FEEDBACK = 0.05,
  STYLE_FEEDBACK = 0.05
}

const format_scoring: IFeedbackGradedAI[] = [
  {
    studentSubmissionId: 1,
    feedback: {
      content: {
        content: `
#### a. Độ chính xác: 
- Câu trả lời mô tả chính xác các bước liên quan đến việc tìm giá trị lớn nhất trong danh sách liên kết đơn.
#### b. Logic:
- Câu trả lời trình bày một chuỗi các bước hợp lý để lặp qua danh sách và cập nhật biến max.
#### c. Sáng tạo:
- Mặc dù không hoàn toàn cần thiết cho câu hỏi này, nhưng không đề cập đến các phương pháp tiếp cận thay thế.
#### d. Sử dụng nguồn:
- Không áp dụng cho dạng câu hỏi này.				
`,
        score: 6
      },
      form: {
        content: `
#### a. Ngữ pháp:
- Câu trả lời sử dụng ngữ pháp và cấu trúc câu thích hợp.
#### b. Từ vựng:
- Từ vựng được sử dụng rõ ràng, súc tích và phù hợp với giải thích kỹ thuật.
#### c. Chính tả:
- Không có lỗi chính tả.
#### d. Bố cục:
- Câu trả lời được cấu trúc tốt với các bước được đánh số, giúp dễ hiểu.`,
        score: 1
      },
      style: {
        content: `
#### a. Rõ ràng:
- Câu trả lời giải thích rõ ràng từng bước của thuật toán.
#### b. Hấp dẫn:
- Mặc dù câu trả lời mang tính thông tin, nhưng nó có thể không hấp dẫn đối với một đối tượng chung.
#### c. Phù hợp:
- Phong cách súc tích và đi vào trọng tâm, phù hợp với tính chất kỹ thuật của câu hỏi.`,
        score: 1
      },
      overall: `
#### 4. Tổng quát:
Câu trả lời này giải quyết hiệu quả lời nhắc bằng cách cung cấp một lời giải thích rõ ràng và chính xác về thuật toán để tìm giá trị lớn nhất trong danh sách liên kết đơn. Nó thể hiện sự hiểu biết tốt về các bước cần thiết và trình bày chúng theo cách có cấu trúc tốt.`
    }
  },
  {
    studentSubmissionId: 2,
    feedback: {
      content: {
        content: `
#### a. Độ chính xác: 
- Câu trả lời chỉ cung cấp một bước ("3. Trả về giá trị của max") và thiếu thông tin quan trọng về toàn bộ thuật toán.
#### b. Logic:
- Không có lời giải thích logic hoặc các bước để tìm phần tử lớn nhất.
#### c. Sáng tạo:
- Không có cách tiếp cận sáng tạo nào được thể hiện trong việc giải quyết vấn đề.
#### d. Sử dụng nguồn:
- Không áp dụng cho dạng câu hỏi này.	
`,
        score: 2
      },
      form: {
        content: `
#### a. Ngữ pháp:
- Câu trả lời đúng ngữ pháp như một câu đơn.
#### b. Từ vựng:
- Từ vựng được sử dụng đơn giản và phù hợp.
#### c. Chính tả:
- Không có lỗi chính tả.
#### d. Bố cục:
- Câu trả lời chỉ bao gồm một câu, vì vậy bố cục không áp dụng.`,
        score: 0.5
      },
      style: {
        content: `
#### a. Rõ ràng:
- Câu trả lời rõ ràng nhưng không đầy đủ.
#### b. Hấp dẫn:
- Câu trả lời không hấp dẫn vì thiếu lời giải thích hoặc ngữ cảnh.
#### c. Phù hợp:
- Phong cách câu trả lời phù hợp cho một tuyên bố ngắn gọn nhưng không đủ cho một giải pháp hoàn chỉnh.`,
        score: 0
      },
      overall: `
#### 4. Tổng quát:
- Câu trả lời chỉ cung cấp một bước và không giải quyết được yêu cầu cốt lõi là giải thích thuật toán tìm phần tử lớn nhất trong danh sách liên kết đơn.`
    }
  }
];

export interface AssignmentStudent {
  id: number;
  studentAnswer: string;
}
async function gradingEssayByAI(data: AssignmentStudent[], question: QuestionEssay) {
  const language = "Vietnamese";

  const AI_ROLE = `
I. YOUR ROLE:
	A. You are an Automated Essay Grading AI, trained on a massive dataset of essays and feedback from human experts. Your primary function is to evaluate student essays in a fair and consistent manner, providing comprehensive feedback and assigning scores based on the provided criteria.

	B. Your expertise lies in the domains of software engineering and programming. You are adept at identifying key concepts, assessing the clarity and structure of arguments, and pinpointing areas for improvement.
	- Identifying key concepts
	- Assessing the clarity, coherence, and structure of arguments
	- Highlighting areas for improvement, focusing on areas directly related to the grading criteria

	C. Strive to emulate the qualities of a patient, knowledgeable, and supportive educator who guides students towards academic excellence.`;

  const SYSTEM_INSTRUCTIONS = `
II. SYSTEM_INSTRUCTIONS:
	A. Your Task: Provide comprehensive feedback and assign scores to student essays based on the following information:
	
	B. Student Submissions follow the following structure:
		The list of student submissions is provided in JSON format (SubmissionStudent[]). There are two attributes id and studentAnswer for each student submission:
			- SubmissionStudent[]: The data structure for a list of student submissions.
				[
					{
						id: A unique identifier for the student's essay (number).
						studentAnswer: The content of the student's essay (string).
					},
					...
				] 

		This is the list of students' submissions (SubmissionStudent[]) that will be reviewed by you. You will provide feedback for the attribute studentAnswer (The content of the student's essay) for each student's submission (indentified by "ID").:
			${JSON.stringify(data)} 
			
	C. Feedback Results (${data.length} elements):
		The feedback results will have ${data.length} elements. Each element is based on question details below and studenAnswer to grade and provide feedback to user:
			- Question content:
				${question.content}
		
		This is the list of students' submissions (SubmissionStudent[]) that will be reviewed by you. You will provide feedback for the attribute studentAnswer (The content of the student's essay) for each student's submission (indentified by "ID").:
			${JSON.stringify(data)} 

		From the students' submission data above, please give me the grading and feedback suggestions for each student's submission. The studentSubmissionId should match the student's submission ID above. It must be follow JSON format !!! According to the following structure:
			- IFeedbackGradingAI[]: The feedback results will have ${data.length} elements. The data structure for a list of feedback.
			[
				{
					studentSubmissionId: number,
					feedback: {
						content: {
							content: string (not be empty and null),
							score: number
						},
						form: {
							content: string (not be empty and null),
							score: number
						},
						style: {
							content: string (not be empty and null),
							score: number
						},
						overall: string (not be empty and null),
					}
				},
				{
					...
				}
			]

			- Description: Each feedback has two attributes studentSubmissionId and feedback for each feedback (IFeedbackGradingAI): 
				+ studentSubmissionId:
					* Data type: number
					* Description: A unique identifier that will match the student's submission ID in the list of student submissions above.
				+ feedback:
					* Data type: object
					* Description: An object that contains the feedback for the student's submission (IFeedback). The feedback depends on the attribute studentAnswer, which matches the feedback ID and the student's submission ID.
						- IFeedback: The data structure for a feedback, has five attributes: content, form, style, overall, and score are same at level:
						{
							content (an object that contains the content criteria of the feedback (IFeedbackContent). It only has 2 sections: content and score) {
								- content: 
									+ A string (not be empty and null). Feedback follow the markdown syntax. You should use \`\` to wrap the highlighted text. 
									+ You must follow the following guideline to provide feedback to the user's essay. It only has 4 sections: accuracy, logic, creativity, and source usage:

									"
										- Accuracy: The extent to which the information in the essay is accurate, complete, and relevant to the topic assigned.
										- Logic: The extent to which the essay is logical, coherent, and consistent in its argument and presentation of ideas.
										- Creativity: The extent to which the essay is unique, original, and creative in its approach to and solution of the problem.
										- Source Usage: The extent to which sources are used appropriately, accurately, and with complete information.	
									"

									+ Note for the content of content criteria feedback:
										* Ensure the response is in valid Markdown format !!!
										* It will be use to feedback the question below to provide feedback to the user's essay:
											** Title of the code question: 
												${question.content}

									+ Here is example of the content of content criteria feedback:
										${format_scoring[0].feedback.content.content}

									+ Note for example of the content of content criteria feedback:
										* The example of the content of content criteria feedback is just for reference. You can change the example to fit your needs.

								- score: A number (not be null), indicates the content criteria score of the feedback. Content score must be between 0 and ${(EFeedbackGradedCriteriaRate.CONTENT_FEEDBACK * question.maxScore).toFixed(2)}
									+ Here is a rubric description that helped you calculate an exact content score:
										* Score: ${(1 * EFeedbackGradedCriteriaRate.CONTENT_FEEDBACK * question.maxScore).toFixed(2)}: The essay is complete, accurate, logical, creative, and uses sources appropriately.
										* Score: ${(0.75 * EFeedbackGradedCriteriaRate.CONTENT_FEEDBACK * question.maxScore).toFixed(2)}: The essay is complete, accurate, and logical, and uses sources appropriately.
										* Score: ${(0.5 * EFeedbackGradedCriteriaRate.CONTENT_FEEDBACK * question.maxScore).toFixed(2)}: The essay is complete, accurate, but lacks logic, and uses sources somewhat appropriately.
										* Score: ${(0.25 * EFeedbackGradedCriteriaRate.CONTENT_FEEDBACK * question.maxScore).toFixed(2)}: The essay is incomplete, inaccurate, illogical, and uses sources inappropriately.
											
							},

							form (an object that contains the form criteria of the feedback (IFeedbackForm). It only has 2 sections: content and score): {
								- content: 
									+ A string (not be empty and null). Feedback follow the markdown syntax. You should use \`\` to wrap the highlighted text.
									+ You must follow the following guideline to provide feedback to the user's essay. It only has 4 sections: grammar, vocabulary, spelling, and layout:

									"
										- Grammar: The extent to which grammar, sentence structure, and punctuation are used accurately and effectively.
										- Vocabulary: The extent to which vocabulary is varied, rich, and appropriate for the essay.
										- Spelling: The extent to which spelling is accurate.
										- Layout: The extent to which the layout is clear, organized, and easy to understand.
									"

									+ Here is example of the content of form criteria feedback:
										${format_scoring[0].feedback.form.content}

									+ Note for example of the content of form criteria feedback:
										* The example of the content of form criteria feedback is just for reference. You can change the example to fit your needs.
										* Ensure the response is in valid Markdown format !!!

								- score: A number (not be null), indicates the form criteria score of the feedback. Form score must be between 0 and ${(EFeedbackGradedCriteriaRate.FORM_FEEDBACK * question.maxScore).toFixed(2)}
									+ Here is a rubric description that helped you calculate an exact content score:
										* Score: ${(1 * EFeedbackGradedCriteriaRate.FORM_FEEDBACK * question.maxScore).toFixed(2)}: The essay has no errors in grammar, spelling, or punctuation, and uses varied, rich, and appropriate vocabulary with a clear layout.
										* Score: ${(0.75 * EFeedbackGradedCriteriaRate.FORM_FEEDBACK * question.maxScore).toFixed(2)}: The essay has few errors in grammar, spelling, or punctuation, uses varied, rich, and appropriate vocabulary, and has a relatively clear layout.
										* Score: ${(0.5 * EFeedbackGradedCriteriaRate.FORM_FEEDBACK * question.maxScore).toFixed(2)}: The essay has several errors in grammar, spelling, or punctuation, uses somewhat varied and rich vocabulary, and has a somewhat clear layout.
										* Score: ${(0.25 * EFeedbackGradedCriteriaRate.FORM_FEEDBACK * question.maxScore).toFixed(2)}: The essay has many errors in grammar, spelling, or punctuation, uses limited vocabulary, and has an unclear layout.
							},

							style (an object that contains the style criteria of the feedback (IFeedbackStyle). It only has 2 sections: content and score): {
								- content: 
									+ A string (not be empty and null). Feedback follow the markdown syntax. You should use \`\` to wrap the highlighted text.
									+ You must follow the following structure to provide the content of form criteria feedback to the user's essay. It only has 3 sections: clarity, engagement, and appropriateness:

										"
											- Clarity: The extent to which the essay is clear, concise, and direct in its presentation of information.
											- Engagement: The extent to which the essay is engaging, interesting, and creates a sense of excitement for the reader.
											- Appropriateness: The extent to which the style is appropriate for the topic, purpose, and audience.
										"

									+ Here is example of the content of style criteria feedback:
										${format_scoring[0].feedback.style.content}

									+ Note for example of the content of style criteria feedback:
										* The example of the content of style criteria feedback is just for reference. You can change the example to fit your needs.
										* Ensure the response is in valid Markdown format !!!
								
								- score: A number (not be null), indicates the style criteria score of the feedback. Style score must be between 0 and ${(EFeedbackGradedCriteriaRate.STYLE_FEEDBACK * question.maxScore).toFixed(2)}
									+ Here is a rubric description that helped you calculate an exact content score:
										* Score: ${(1 * EFeedbackGradedCriteriaRate.STYLE_FEEDBACK * question.maxScore).toFixed(2)}:	The essay is clear, engaging, and appropriate for the topic, purpose, and audience.
										* Score: ${(0.75 * EFeedbackGradedCriteriaRate.STYLE_FEEDBACK * question.maxScore).toFixed(2)}: The essay is relatively clear, engaging, and appropriate for the topic, purpose, and audience.
										* Score: ${(0.5 * EFeedbackGradedCriteriaRate.STYLE_FEEDBACK * question.maxScore).toFixed(2)}:	The essay is unclear, lacks engagement, and is somewhat appropriate for the topic, purpose, and audience.
										* Score: ${(0.25 * EFeedbackGradedCriteriaRate.STYLE_FEEDBACK * question.maxScore).toFixed(2)}: The essay is unclear, not engaging, and not appropriate for the topic, purpose, and audience.
							},

							overall: A string (not be empty and null), indicating the overall feedback of the student within the content, form, and style.
								- Here is example of the overall feedback:
									${format_scoring[0].feedback.overall}

								- Note for example of the overall feedback:
									* The example of the overall feedback is just for reference. You can change the example to fit your needs.
									* Ensure the response is in valid Markdown format !!!

						}

	D. Please use ${language} everywhere to write feedback messages for students.
	
	E. For example:
		This is a student submission:
			[
				{
					id: 1,
					studentAnswer:
          	"1. Khởi tạo một biến max để lưu giá trị lớn nhất ban đầu là giá trị của phần tử đầu tiên trong danh sách liên kết. 2. Duyệt qua danh sách liên kết, so sánh từng phần tử với max. Nếu phần tử hiện tại lớn hơn max thì gán max bằng giá trị của phần tử hiện tại. 3. Trả về giá trị của max."
				},
				{
					id: 2,
					studentAnswer:
						"3. Trả về giá trị của max."
				}
			],
			
		This is a response from the AI:
			${JSON.stringify(format_scoring)}
				
		Note of example:
			1. Ensure the response is in valid JSON format !!!
			2. The example is just for reference. You can change the example to fit your needs.
	`;

  const prompt = `
${AI_ROLE}

${SYSTEM_INSTRUCTIONS}`;

  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash-latest" });
  try {
    const result = await model.generateContent(prompt);
    const response = await result.response;
    let text = response.text();
    let cleanText = text.replace(/```/g, "");
    console.log("cleanText", cleanText);
    const repaired = jsonrepair(cleanText);
    const json = JSON.parse(repaired);
    return json;
  } catch (error) {
    return error;
  }
}

export { gradingEssayByAI };
