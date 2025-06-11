
import { motion } from 'framer-motion';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Bot, User } from 'lucide-react';

interface Message {
  id: string;
  text: string;
  isBot: boolean;
  timestamp: Date;
}

interface ChatMessageProps {
  message: Message;
}

export default function ChatMessage ({ message }: ChatMessageProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className={`flex gap-3 ${message.isBot ? 'justify-start' : 'justify-end'}`}
    >
      {message.isBot && (
        <Avatar className="w-8 h-8 bg-blue-100">
          <AvatarFallback>
            <Bot className="w-4 h-4 text-blue-600" />
          </AvatarFallback>
        </Avatar>
      )}
      
      <div
        className={`max-w-[70%] p-4 rounded-2xl ${
          message.isBot
            ? 'bg-background border border-gray-600 dark:border-gray-200 text-gray-800 dark:text-gray-200'
            : 'bg-primary text-gray-200'
        }`}
      >
        <p className="text-sm leading-relaxed">{message.text}</p>
        <span className={`text-xs mt-2 block ${
          message.isBot ? 'text-gray-500' : 'text-blue-100'
        }`}>
          {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
        </span>
      </div>

      {!message.isBot && (
        <Avatar className="w-8 h-8 bg-blue-100">
          <AvatarFallback>
            <User className="w-4 h-4 text-blue-600" />
          </AvatarFallback>
        </Avatar>
      )}
    </motion.div>
  );
};
