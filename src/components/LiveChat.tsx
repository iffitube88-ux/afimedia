import { useState, useRef, useEffect } from 'react';

export default function LiveChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { id: 1, text: "Hi! 👋 Welcome to lamaMedia. How can I help you today?", sender: 'agent', time: '10:00 AM' }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const quickReplies = [
    "I need a marketing audit",
    "What are your pricing plans?",
    "I want to discuss a project",
    "How quickly can you start?"
  ];

  const getAutoReply = (userMessage: string): string => {
    const msg = userMessage.toLowerCase();
    if (msg.includes('price') || msg.includes('pricing') || msg.includes('cost')) {
      return "Our pricing starts at $500 for project-based work and $1,500/month for retainers. We'd love to give you a custom quote based on your needs. Would you like to schedule a free consultation?";
    }
    if (msg.includes('audit') || msg.includes('review')) {
      return "Great choice! We offer a comprehensive free marketing audit that covers SEO, paid ads, social media, and conversion optimization. I'll have our team reach out within 24 hours. Can I get your email?";
    }
    if (msg.includes('start') || msg.includes('timeline') || msg.includes('how long')) {
      return "We can typically kick off new projects within 1-2 weeks. For urgent needs, we offer expedited onboarding. What's your timeline looking like?";
    }
    if (msg.includes('seo')) {
      return "Our SEO services include technical audits, keyword research, on-page optimization, content strategy, and local SEO. We've achieved an average 312% traffic increase for our clients. Want to learn more?";
    }
    if (msg.includes('ads') || msg.includes('ppc') || msg.includes('google') || msg.includes('facebook')) {
      return "We manage campaigns across Google Ads, Meta Ads, and TikTok Ads. Our average ROAS is 150%+. We'd love to discuss your advertising goals!";
    }
    if (msg.includes('hello') || msg.includes('hi') || msg.includes('hey')) {
      return "Hello! 👋 Great to have you here. Are you looking for help with SEO, paid ads, social media, or something else?";
    }
    return "Thanks for your message! Our team will review this and get back to you shortly. In the meantime, feel free to explore our services or book a free consultation.";
  };

  const sendMessage = (text?: string) => {
    const messageText = text || input;
    if (!messageText.trim()) return;

    const newMessage = {
      id: messages.length + 1,
      text: messageText,
      sender: 'user',
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, newMessage]);
    setInput('');
    setIsTyping(true);

    setTimeout(() => {
      const reply = {
        id: messages.length + 2,
        text: getAutoReply(messageText),
        sender: 'agent',
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages(prev => [...prev, reply]);
      setIsTyping(false);
    }, 1500);
  };

  return (
    <>
      {/* Chat Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-24 right-8 w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-full shadow-2xl shadow-blue-500/50 hover:shadow-blue-500/70 hover:scale-110 transition-all duration-300 z-50 flex items-center justify-center group"
      >
        {isOpen ? (
          <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
        )}
        {!isOpen && (
          <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full text-xs flex items-center justify-center animate-pulse">1</span>
        )}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 sm:bottom-44 right-0 sm:right-8 w-full sm:w-96 h-[calc(100vh-120px)] sm:h-[600px] max-h-[600px] bg-slate-900 rounded-none sm:rounded-2xl border-0 sm:border border-blue-500/20 shadow-2xl shadow-blue-500/20 z-50 flex flex-col overflow-hidden animate-fade-in-up">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 to-cyan-600 p-4 flex items-center gap-3">
            <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
              <span className="text-xl">🦙</span>
            </div>
            <div className="flex-1">
              <h3 className="text-white font-bold text-sm">lamaMedia Support</h3>
              <div className="flex items-center gap-1">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                <span className="text-white/80 text-xs">Online now</span>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-white/80 hover:text-white">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((msg) => (
              <div key={msg.id} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] rounded-2xl px-4 py-3 ${
                  msg.sender === 'user' 
                    ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-br-sm' 
                    : 'bg-slate-800 text-slate-200 rounded-bl-sm'
                }`}>
                  <p className="text-sm leading-relaxed">{msg.text}</p>
                  <p className={`text-xs mt-1 ${msg.sender === 'user' ? 'text-white/60' : 'text-slate-500'}`}>{msg.time}</p>
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-slate-800 rounded-2xl rounded-bl-sm px-4 py-3">
                  <div className="flex gap-1">
                    <span className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '0s' }}></span>
                    <span className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></span>
                    <span className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></span>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Replies */}
          {messages.length <= 2 && (
            <div className="px-4 pb-2 flex flex-wrap gap-2">
              {quickReplies.map((reply, idx) => (
                <button
                  key={idx}
                  onClick={() => sendMessage(reply)}
                  className="text-xs px-3 py-1.5 bg-slate-800 border border-blue-500/20 rounded-full text-blue-400 hover:bg-blue-500/10 hover:border-blue-500/50 transition-all"
                >
                  {reply}
                </button>
              ))}
            </div>
          )}

          {/* Input */}
          <div className="p-4 border-t border-slate-800">
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
                placeholder="Type your message..."
                className="flex-1 px-4 py-3 bg-slate-800 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:border-blue-500 focus:outline-none text-sm"
              />
              <button
                onClick={() => sendMessage()}
                className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center hover:shadow-lg hover:shadow-blue-500/30 transition-all"
              >
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </button>
            </div>
            <p className="text-xs text-slate-600 mt-2 text-center">Powered by lamaMedia • Avg. response: 2 min</p>
          </div>
        </div>
      )}
    </>
  );
}
