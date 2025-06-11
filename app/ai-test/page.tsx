"use client"
import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { ArrowLeft, Send, Download, MessageSquare, List, ChevronRight } from 'lucide-react';
import ChatMessage  from '@/components/ChatMessage';
import { MCQQuestion } from '@/components/MCQQuestion';
import { ProgressBar } from '@/components/ProgressBar';
import { generateCareerReport } from '@/lib/careerAnalyzer';
import { generateNextQuestion, QuestionResponse } from '@/lib/geminiService';
import { generateCareerReportPDF } from '@/lib/pdfGenerator';
import { toast } from '@/hooks/use-toast';
import Link from 'next/link';
import { Navbar } from '@/components/Navbar';
import { ThemeToggle } from '@/components/theme-toggle';

interface Message {
  id: string;
  text: string;
  isBot: boolean;
  timestamp: Date;
}

interface CareerTestChatProps {
  onBack: () => void;
}

export default function CareerTestChat ({ onBack }: CareerTestChatProps) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [currentInput, setCurrentInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userResponses, setUserResponses] = useState<string[]>([]);
  const [isTestComplete, setIsTestComplete] = useState(false);
  const [userProfile, setUserProfile] = useState<any>(null);
  const [isGeneratingQuestion, setIsGeneratingQuestion] = useState(false);
  const [currentQuestionData, setCurrentQuestionData] = useState<QuestionResponse | null>(null);
  const [questionMode, setQuestionMode] = useState<'mcq' | 'text' | 'auto'>('auto');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const totalQuestions = 10;

  useEffect(() => {
    // Start the conversation
    addBotMessage("Hi! I'm your AI Career Counselor. Let's start with your name. What should I call you?");
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages, currentQuestionData]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const addBotMessage = (text: string) => {
    setIsTyping(true);
    setTimeout(() => {
      const newMessage: Message = {
        id: Date.now().toString(),
        text,
        isBot: true,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, newMessage]);
      setIsTyping(false);
    }, 1000 + Math.random() * 1000);
  };

  const addUserMessage = (text: string) => {
    const newMessage: Message = {
      id: Date.now().toString(),
      text,
      isBot: false,
      timestamp: new Date()
    };
    setMessages(prev => [...prev, newMessage]);
  };

  const handleAnswer = async (answer: string) => {
    addUserMessage(answer);
    setUserResponses(prev => [...prev, answer]);
    setCurrentQuestionData(null);

    if (currentQuestion < totalQuestions - 1) {
      setCurrentQuestion(prev => prev + 1);
      setIsGeneratingQuestion(true);
      
      try {
        const preferredType = questionMode === 'auto' ? undefined : questionMode;
        const nextQuestionData = await generateNextQuestion([...userResponses, answer], currentQuestion + 1, preferredType);
        
        setTimeout(() => {
          if (nextQuestionData.type === 'mcq') {
            setCurrentQuestionData(nextQuestionData);
          } else {
            addBotMessage(nextQuestionData.question);
          }
          setIsGeneratingQuestion(false);
        }, 1500);
      } catch (error) {
        console.error('Error generating next question:', error);
        setTimeout(() => {
          addBotMessage("What motivates you most in your ideal career - financial success, personal fulfillment, or making a positive impact?");
          setIsGeneratingQuestion(false);
        }, 1500);
      }
    } else {
      // Test complete
      setIsTestComplete(true);
      const responses = [...userResponses, answer];
      
      try {
        const profile = await generateCareerReport(responses);
        setUserProfile(profile);
        
        setTimeout(() => {
          addBotMessage("🎉 Your career analysis is complete! I've generated a comprehensive report with personalized insights about your ideal career paths, personality traits, and actionable recommendations. Click the download button to get your detailed PDF report!");
        }, 2000);
      } catch (error) {
        console.error('Error generating profile:', error);
        toast({
          title: "Analysis Complete",
          description: "Your career report is ready for download!",
        });
      }
    }
  };

  const handleSendMessage = () => {
    if (!currentInput.trim() || isGeneratingQuestion) return;
    handleAnswer(currentInput.trim());
    setCurrentInput('');
  };

  const handleDownloadReport = () => {
    if (userProfile) {
      try {
        generateCareerReportPDF(userProfile);
        toast({
          title: "Report Downloaded!",
          description: "Your personalized AI career report has been downloaded successfully.",
        });
      } catch (error) {
        console.error('Error generating PDF:', error);
        toast({
          title: "Download Error",
          description: "There was an issue generating your report. Please try again.",
          variant: "destructive"
        });
      }
    }
  };

  const progress = (currentQuestion / (totalQuestions-1)) * 100;

  return (
    <div className="min-h-screen bg-background  flex flex-col">
      {/* Header */}
      <div className=" bg-background backdrop-blur-sm border-b border-gray-200 p-4 sticky top-0 z-10">
        <div className="container mx-auto flex items-center justify-between">
         
          <Link
              href="/"
              className="text-primary hover:underline inline-flex items-center"
            >
              <ChevronRight className="h-4 w-4 mr-1 rotate-180" />
              Back to Home
            </Link>
          <h1 className="text-xl font-semibold">Career Compass AI Test</h1>
          <div className="flex items-center gap-2">
            <Button
              variant={questionMode === 'mcq' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setQuestionMode('mcq')}
              className="flex items-center gap-1"
            >
              <List className="w-4 h-4" />
              MCQ
            </Button>
            <Button
              variant={questionMode === 'text' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setQuestionMode('text')}
              className="flex items-center gap-1"
            >
              <MessageSquare className="w-4 h-4" />
              Text
            </Button>
            <Button
              variant={questionMode === 'auto' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setQuestionMode('auto')}
            >
              Auto
            </Button>
            <ThemeToggle />
          </div>
        </div>
        <ProgressBar progress={progress} />
      </div>

      {/* Chat Container */}
      <div className="flex-1 container mx-auto p-4 max-w-4xl">
        <Card className="h-full flex flex-col bg-background/95 backdrop-blur-sm shadow-xl">
          {/* Messages */}
          <div className="flex-1 p-6 overflow-y-auto space-y-4">
            <AnimatePresence>
              {messages.map((message) => (
                <ChatMessage key={message.id} message={message} />
              ))}
            </AnimatePresence>
            
            {currentQuestionData && (
              <MCQQuestion
                question={currentQuestionData.question}
                options={currentQuestionData.options!}
                onSelect={handleAnswer}
                disabled={isGeneratingQuestion}
              />
            )}
            
            {(isTyping || isGeneratingQuestion) && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-2 text-gray-500"
              >
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                  <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                </div>
                <span>{isGeneratingQuestion ? 'AI is crafting your next question...' : 'AI is thinking...'}</span>
              </motion.div>
            )}
            
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="p-6 border-t border-gray-200 bg-background">
            {!isTestComplete && !currentQuestionData ? (
              <div className="flex gap-3">
                <Input
                  value={currentInput}
                  onChange={(e) => setCurrentInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                  placeholder="Type your answer here..."
                  className="flex-1"
                  disabled={isTyping || isGeneratingQuestion}
                />
                <Button 
                  onClick={handleSendMessage} 
                  disabled={!currentInput.trim() || isTyping || isGeneratingQuestion}
                  className="bg-blue-600 hover:bg-blue-700"
                >
                  <Send className="w-4 h-4" />
                </Button>
              </div>
            ) : isTestComplete ? (
              <div className="text-center">
                <Button 
                  onClick={handleDownloadReport}
                  className="bg-green-600 hover:bg-green-700 text-white px-8 py-3"
                  size="lg"
                  disabled={!userProfile}
                >
                  <Download className="w-5 h-5 mr-2" />
                  Download AI Career Report (PDF)
                </Button>
              </div>
            ) : null}
          </div>
        </Card>
      </div>
    </div>
  );
};

