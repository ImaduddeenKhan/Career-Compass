import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface MCQQuestionProps {
  question: string;
  options: string[];
  onSelect: (answer: string) => void;
  disabled?: boolean;
}

export const MCQQuestion = ({ question, options, onSelect, disabled }: MCQQuestionProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-4 w-full"
    >
      <Card className="p-6 bg-background border-blue-200 w-full">
        <h3 className="text-lg font-semibold dark:text-gray-200 text-gray-800 mb-4">{question}</h3>
        <div className="grid gap-3">
          {options.map((option, index) => (
            <Button
              key={index}
              variant="outline"
              className="justify-start text-left h-auto p-4 hover:border-blue-300 transition-colors w-full whitespace-normal break-words"
              onClick={() => onSelect(option)}
              disabled={disabled}
            >
              <div className="flex items-start gap-3 w-full">
                <div className="w-6 h-6 mt-1 rounded-full border-2 border-blue-300 flex items-center justify-center text-sm font-semibold text-blue-600 shrink-0">
                  {String.fromCharCode(65 + index)}
                </div>
                <span className="flex-1">{option}</span>
              </div>
            </Button>
          ))}
        </div>
      </Card>
    </motion.div>
  );
};
