
import { GoogleGenerativeAI } from '@google/generative-ai';

const API_KEY = process.env.NEXT_PUBLIC_GEMINI_API!;
const genAI = new GoogleGenerativeAI(API_KEY);

export interface QuestionResponse {
  question: string;
  type: 'mcq' | 'text';
  options?: string[];
}

export const generateNextQuestion = async (
  userResponses: string[],
  questionNumber: number,
  preferredType?: 'mcq' | 'text'
): Promise<QuestionResponse> => {
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

  // Alternate between MCQ and text questions for variety
  const questionType = preferredType || (questionNumber % 3 === 0 ? 'text' : 'mcq');

  const context = `You are an AI career counselor conducting an adaptive career assessment. 
  Based on previous responses, generate the next relevant question.
  
  Previous responses: ${userResponses.join(', ')}
  Question number: ${questionNumber + 1}/50
  Question type: ${questionType}
  
  Guidelines:
  - Ask personalized questions based on previous answers
  - Focus on interests, personality, work preferences, skills, values
  - Keep questions conversational and engaging
  - Each question should help determine career fit
  - DO NOT repeat questions that have already been asked
  - Make sure each question is different from previous ones
  
  ${questionType === 'mcq' ? `
  For MCQ questions, provide exactly 4 options that are:
  - Comprehensive and cover different personality/career aspects
  - Mutually exclusive
  - Realistic and relatable
  - Help differentiate between different career paths
  
  Return in this JSON format:
  {
    "question": "Your question here?",
    "type": "mcq",
    "options": ["Option A", "Option B", "Option C", "Option D"]
  }
  ` : `
  For text questions, ask open-ended questions that allow for detailed responses.
  
  Return in this JSON format:
  {
    "question": "Your open-ended question here?",
    "type": "text"
  }
  `}
  
  Generate only valid JSON, nothing else.`;

  try {
    const result = await model.generateContent(context);
    const response = await result.response;
    const text = response.text().replace(/```json|```/g, '').trim();
    return JSON.parse(text);
  } catch (error) {
    console.error('Error generating question:', error);
    
    // Fallback questions based on type
    if (questionType === 'mcq') {
      return {
        question: "What motivates you most in your ideal career?",
        type: 'mcq',
        options: [
          "Financial success and stability",
          "Personal fulfillment and passion",
          "Making a positive impact on society",
          "Recognition and professional growth"
        ]
      };
    } else {
      return {
        question: "Describe your ideal work environment and what makes you feel most productive.",
        type: 'text'
      };
    }
  }
};

export const analyzeCareerProfile = async (responses: string[]): Promise<any> => {
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

  const prompt = `Based on these career assessment responses, provide a detailed analysis:
  
  Responses: ${responses.join('\n')}
  
  Provide analysis in this exact JSON format:
  {
    "personalityType": "One of: Creative Innovator, Analytical Thinker, People-Oriented Leader, Detail-Focused Specialist, Strategic Visionary, Practical Problem Solver",
    "topCareerMatches": ["Career 1", "Career 2", "Career 3"],
    "personalityTraits": ["trait1", "trait2", "trait3", "trait4"],
    "insights": ["insight about hidden personality aspects", "unique strength they may not know", "working style preference"],
    "careerFacts": ["industry fact", "growth trend", "salary insight"],
    "recommendations": {
      "dos": ["actionable advice 1", "actionable advice 2", "actionable advice 3"],
      "donts": ["what to avoid 1", "what to avoid 2", "what to avoid 3"]
    }
  }`;

  try {
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    return JSON.parse(text.replace(/```json|```/g, ''));
  } catch (error) {
    console.error('Error analyzing profile:', error);
    return {
      personalityType: "Creative Innovator",
      topCareerMatches: ["Software Engineer", "Product Manager", "Data Scientist"],
      personalityTraits: ["analytical", "creative", "problem-solving", "innovative"],
      insights: ["You have strong analytical thinking capabilities", "You prefer structured approaches to problem-solving", "You excel in collaborative environments"],
      careerFacts: ["Tech jobs are growing 25% faster than average", "Remote work opportunities are abundant in tech", "Continuous learning is essential in technology careers"],
      recommendations: {
        dos: ["Focus on developing technical skills", "Build a strong portfolio of projects", "Network with industry professionals"],
        donts: ["Don't limit yourself to one technology", "Don't ignore soft skills development", "Don't neglect work-life balance"]
      }
    };
  }
};
