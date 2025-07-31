// components/Chatbot.jsx
'use client';

import { useState, useRef, useEffect } from 'react';
import { SendHorizontal, Bot, User, Cpu } from 'lucide-react';

export default function Chatbot() {
  const [messages, setMessages] = useState([
    {
      sender: 'bot',
      text: "Hello! I'm your college assistant. I can help you with exam dates, academic calendar, study materials, notices, and more. What would you like to know?",
    },
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (!inputValue.trim() && messages.length <= 1) return; // Prevent sending empty initial messages

    const userMessage = { sender: 'user', text: inputValue };
    setMessages((prevMessages) => [...prevMessages, userMessage]);
    setInputValue('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/chatbot', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: inputValue }),
      });

      if (!response.ok) throw new Error('API response not OK');

      const data = await response.json();
      const botMessage = { sender: 'bot', text: data.reply };
      setMessages((prevMessages) => [...prevMessages, botMessage]);
    } catch (error) {
      console.error('Chatbot API error:', error);
      const errorMessage = {
        sender: 'bot',
        text: 'Sorry, I am having trouble connecting. Please try again later.',
      };
      setMessages((prevMessages) => [...prevMessages, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };
  
  const handleQuickQuestion = (question) => {
     // This will simulate the user typing and sending the question
     setMessages((prevMessages) => [...prevMessages, { sender: 'user', text: question }]);
     setInputValue(question); // Set input value to trigger form submission effect
     
     // Use a timeout to make the interaction feel more natural before submitting
     setTimeout(() => {
        document.getElementById('chatbot-form').requestSubmit();
     }, 100);
  }

  const quickQuestions = [
    'What are the upcoming exam dates?',
    'Show me the academic calendar',
    'Any recent notices?',
    'Study materials for current semester',
  ];

  return (
    <div className="flex flex-col h-[90vh] max-h-[700px] bg-white border border-gray-200 rounded-xl shadow-2xl shadow-gray-300/30">
      {/* Header */}
      <div className="p-4 border-b border-gray-200 flex items-center justify-between bg-gray-50/50 rounded-t-xl">
        <div className="flex items-center gap-3">
            <div className="p-2 bg-gray-100 border border-gray-200 rounded-full">
                <Cpu className="w-6 h-6 text-gray-700" />
            </div>
            <div>
              <h2 className="text-lg font-semibold text-gray-800">College Assistant</h2>
              <p className="text-xs text-gray-500">Powered by StudySync AI</p>
            </div>
        </div>
        
      </div>

      {/* Message Area */}
      <div className="flex-1 p-6 overflow-y-auto space-y-6 bg-white">
        {messages.map((msg, index) => (
          <div key={index} className={`flex items-start gap-3.5 ${msg.sender === 'user' ? 'justify-end' : ''}`}>
             {msg.sender === 'bot' && (
                <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center border border-gray-200 flex-shrink-0">
                    <Bot className="w-5 h-5 text-gray-500" />
                </div>
             )}
             <div className={`px-4 py-2.5 rounded-lg max-w-md break-words ${ msg.sender === 'user'
                 ? 'bg-gray-800 text-white rounded-br-none'
                 : 'bg-gray-100 text-gray-800 rounded-bl-none border border-gray-200/80'
              }`}>
               <p className="text-sm leading-relaxed">{msg.text}</p>
             </div>
             {msg.sender === 'user' && (
                <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center border border-gray-200 flex-shrink-0">
                    <User className="w-5 h-5 text-gray-500" />
                </div>
             )}
          </div>
        ))}
        {isLoading && (
            <div className="flex items-start gap-3.5">
                <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center border border-gray-200 flex-shrink-0">
                    <Bot className="w-5 h-5 text-gray-500" />
                </div>
                <div className="px-4 py-3 rounded-lg bg-gray-100 text-gray-800 rounded-bl-none border border-gray-200/80">
                    <div className="flex items-center justify-center gap-1.5">
                        <span className="h-1.5 w-1.5 bg-gray-400 rounded-full animate-bounce [animation-delay:-0.3s]"></span>
                        <span className="h-1.5 w-1.5 bg-gray-400 rounded-full animate-bounce [animation-delay:-0.15s]"></span>
                        <span className="h-1.5 w-1.5 bg-gray-400 rounded-full animate-bounce"></span>
                    </div>
                </div>
            </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input Area */}
      <div className="p-4 border-t border-gray-200 bg-gray-50/50 rounded-b-xl">
        {messages.length <= 1 && (
         <div className="mb-3 grid grid-cols-2 gap-2">
            {quickQuestions.map((q, i) => (
              <button key={i} onClick={() => handleQuickQuestion(q)} className="text-sm text-left font-medium p-2.5 bg-white border border-gray-200 hover:bg-gray-100 text-gray-600 rounded-lg transition-colors duration-200 ease-in-out">
                {q}
              </button>
            ))}
         </div>
        )}
        <form id="chatbot-form" onSubmit={handleSendMessage} className="flex items-center gap-3">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Ask a question..."
            className="flex-1 px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400/50 transition-shadow duration-200"
            disabled={isLoading}
          />
          <button
            type="submit"
            className="p-2.5 bg-gray-800 text-white rounded-lg hover:bg-gray-900 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors duration-200 ease-in-out"
            disabled={isLoading || (!inputValue.trim() && messages.length > 1)}
            aria-label="Send Message"
          >
            <SendHorizontal className="w-5 h-5" />
          </button>
        </form>
      </div>
    </div>
  );
}