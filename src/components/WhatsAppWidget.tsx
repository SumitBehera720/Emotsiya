import React, { useState } from 'react';
import { X, Send } from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppIcon';

export const WhatsAppWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');

  const defaultPhone = '918808037280'; // Official Emotsiya WhatsApp Contact

  const quickPrompts = [
    'Hi Emotsiya! I want to register for the ₹199 Standard Pass.',
    'Hi! I want details about the ₹499 Premium Leader Pass.',
    'Hi! I want to know about Live & Upcoming Events.',
    'Hi! I want to partner with Emotsiya for our school.',
  ];

  const handleSendMessage = (customMsg?: string) => {
    const textToSend = customMsg || message || 'Hi Emotsiya Team, I have a question about your initiative!';
    const encoded = encodeURIComponent(textToSend);
    window.open(`https://wa.me/${defaultPhone}?text=${encoded}`, '_blank');
    setMessage('');
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      
      {/* Floating Chat Popover */}
      {isOpen && (
        <div className="mb-4 w-80 sm:w-96 rounded-3xl bg-white/95 border border-white shadow-2xl overflow-hidden backdrop-blur-2xl animate-in fade-in slide-in-from-bottom-4 duration-300">
          
          {/* Header with Official WhatsApp Green */}
          <div className="p-4 bg-[#25D366] text-white flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-10 h-10 rounded-2xl bg-white/20 flex items-center justify-center backdrop-blur-md">
                  <WhatsAppIcon className="w-6 h-6 text-white" />
                </div>
                <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-white border-2 border-[#25D366]"></span>
              </div>
              <div>
                <h4 className="text-xs font-black leading-tight">Emotsiya WhatsApp Direct</h4>
                <p className="text-[10px] text-white/90 font-medium">+91 88080 37280 • Quick Response</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-full text-white/80 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body content */}
          <div className="p-4 space-y-4 max-h-96 overflow-y-auto bg-[#faf7f2]">
            <div className="p-3.5 rounded-2xl bg-white border border-amber-900/10 text-xs text-slate-800 space-y-1 shadow-sm">
              <p className="font-extrabold text-slate-900">👋 Welcome to Emotsiya!</p>
              <p className="font-medium text-slate-600">How can we assist your civic education or event pass registration today?</p>
            </div>

            <div className="space-y-1.5">
              <p className="text-[10px] font-extrabold text-slate-500 uppercase tracking-wider">Quick Prompts:</p>
              {quickPrompts.map((prompt, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSendMessage(prompt)}
                  className="w-full text-left p-2.5 rounded-xl bg-white hover:bg-amber-50 border border-slate-200 hover:border-amber-400 text-xs text-slate-700 hover:text-amber-900 transition-all flex items-center justify-between group shadow-sm font-medium"
                >
                  <span className="line-clamp-1">{prompt}</span>
                  <Send className="w-3.5 h-3.5 text-slate-400 group-hover:text-amber-800 shrink-0 ml-2" />
                </button>
              ))}
            </div>
          </div>

          {/* Footer Input */}
          <div className="p-3 bg-white border-t border-slate-200 flex items-center gap-2">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
              placeholder="Type your message..."
              className="flex-1 px-3 py-2 rounded-xl bg-[#faf7f2] border border-slate-200 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-amber-600 font-medium"
            />
            <button
              onClick={() => handleSendMessage()}
              className="p-2 rounded-xl bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold transition-all shrink-0 shadow-md"
            >
              <Send className="w-4 h-4" />
            </button>
          </div>

        </div>
      )}

      {/* Main Floating WhatsApp Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="group relative p-3.5 rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-white shadow-2xl border-2 border-white transition-all duration-300 transform hover:scale-110 flex items-center justify-center"
        aria-label="WhatsApp Support"
      >
        <span className="absolute -top-1 -right-1 w-3.5 h-3.5 rounded-full bg-emerald-400 border-2 border-white animate-pulse"></span>
        <WhatsAppIcon className="w-6 h-6 text-white" />

        {/* Hover Label */}
        <span className="absolute right-16 top-1/2 -translate-y-1/2 px-3 py-1.5 rounded-xl bg-slate-900 text-xs font-bold text-white whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-xl">
          Chat on WhatsApp
        </span>
      </button>

    </div>
  );
};
