
import { analyzeCareerProfile } from './geminiService';
import { db } from './firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

interface CareerProfile {
  name: string;
  personalityType: string;
  topCareerMatches: string[];
  personalityTraits: string[];
  recommendations: {
    dos: string[];
    donts: string[];
  };
  insights: string[];
  careerFacts: string[];
}

export const generateCareerReport = async (responses: string[]): Promise<CareerProfile> => {
  try {
    // Analyze using Gemini AI
    const analysis = await analyzeCareerProfile(responses);
    
    const profile: CareerProfile = {
      name: responses[0] || 'User',
      personalityType: analysis.personalityType,
      topCareerMatches: analysis.topCareerMatches,
      personalityTraits: analysis.personalityTraits,
      recommendations: analysis.recommendations,
      insights: analysis.insights,
      careerFacts: analysis.careerFacts
    };

    // Save to Firebase
    try {
      await addDoc(collection(db, 'career_assessments'), {
        userName: profile.name,
        responses: responses,
        analysis: profile,
        timestamp: serverTimestamp()
      });
      console.log('Assessment saved to Firebase');
    } catch (firebaseError) {
      console.error('Error saving to Firebase:', firebaseError);
    }

    return profile;
  } catch (error) {
    console.error('Error generating career report:', error);
    
    // Fallback profile
    return {
      name: responses[0] || 'User',
      personalityType: 'Creative Innovator',
      topCareerMatches: ['Software Engineer', 'Product Manager', 'Data Scientist'],
      personalityTraits: ['analytical', 'creative', 'problem-solving', 'innovative'],
      recommendations: {
        dos: [
          'Focus on developing technical skills',
          'Build a strong portfolio of projects',
          'Network with industry professionals'
        ],
        donts: [
          'Don\'t limit yourself to one technology',
          'Don\'t ignore soft skills development',
          'Don\'t neglect work-life balance'
        ]
      },
      insights: [
        'You have strong analytical thinking capabilities',
        'You prefer structured approaches to problem-solving',
        'You excel in collaborative environments'
      ],
      careerFacts: [
        'Tech jobs are growing 25% faster than average',
        'Remote work opportunities are abundant in tech',
        'Continuous learning is essential in technology careers'
      ]
    };
  }
};
