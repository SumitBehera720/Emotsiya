import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Sparkles, 
  Award, 
  CheckCircle2, 
  ArrowRight, 
  RotateCcw, 
  ShieldCheck, 
  Share2,
  Users
} from 'lucide-react';

interface InteractiveSectionProps {
  onOpenPassModal: (tier?: '199' | '499') => void;
}

export const InteractiveSection: React.FC<InteractiveSectionProps> = ({ onOpenPassModal }) => {
  const [activeTab, setActiveTab] = useState<'quiz' | 'pledge'>('quiz');

  // Quiz State
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [quizCompleted, setQuizCompleted] = useState(false);

  // Pledge State
  const [pledgeName, setPledgeName] = useState('');
  const [selectedPledge, setSelectedPledge] = useState('Zero-Waste & Environmental Care');
  const [pledgeCount, setPledgeCount] = useState(124590);
  const [pledgeSubmitted, setPledgeSubmitted] = useState(false);

  const quizQuestions = [
    {
      id: 0,
      question: 'Which national issue concerns you the most in daily life?',
      options: [
        { label: 'Unmanaged Waste & Environmental Pollution', type: 'Green Steward' },
        { label: 'Lack of Traffic Safety & Pedestrian Discipline', type: 'Civic Leader' },
        { label: 'Youth Stress, EQ & Lack of Leadership Skills', type: 'EQ Champion' },
        { label: 'Substance Abuse & Unhealthy Lifestyles', type: 'Wellness Advocate' },
      ],
    },
    {
      id: 1,
      question: 'How do you prefer to create real-world impact?',
      options: [
        { label: 'Leading ground drives and field campaigns', type: 'Field Action' },
        { label: 'Mentoring students in schools & colleges', type: 'Educator' },
        { label: 'Attending certified interactive masterclasses', type: 'Learner' },
        { label: 'Organizing digital awareness campaigns', type: 'Digital Advocate' },
      ],
    },
    {
      id: 2,
      question: 'What is your primary goal for personal development?',
      options: [
        { label: 'Mastering Public Speaking & EQ', type: 'Leadership' },
        { label: 'Building strong habit discipline', type: 'Discipline' },
        { label: 'Earning recognized national certificates', type: 'Certification' },
        { label: 'Creating safer, cleaner neighborhoods', type: 'Impact' },
      ],
    },
  ];

  const handleSelectAnswer = (optionLabel: string) => {
    setAnswers({ ...answers, [currentStep]: optionLabel });
    if (currentStep < quizQuestions.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setQuizCompleted(true);
    }
  };

  const resetQuiz = () => {
    setAnswers({});
    setCurrentStep(0);
    setQuizCompleted(false);
  };

  const handlePledgeSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!pledgeName.trim()) return;
    setPledgeCount(prev => prev + 1);
    setPledgeSubmitted(true);
  };

  return (
    <section id="interactive" className="py-24 lg:py-32 bg-[#f4fbfb] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0d9488]/10 border border-[#0d9488]/20 text-[#0d9488] text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Interactive Engagement</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#164e63] leading-tight font-serif-heading">
            Discover Your <span className="text-[#0d9488] italic font-serif">Civic Leadership Role</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-600 font-medium leading-relaxed">
            Take our quick 1-minute impact assessment or pledge your commitment to building a better nation.
          </p>

          {/* Tab Switcher */}
          <div className="flex justify-center items-center gap-3 pt-4">
            <button
              onClick={() => setActiveTab('quiz')}
              className={`px-6 py-2.5 rounded-full text-xs font-bold transition-all ${
                activeTab === 'quiz'
                  ? 'bg-[#0d9488] text-white shadow-sm'
                  : 'bg-white border border-slate-200 text-slate-700 hover:bg-teal-50'
              }`}
            >
              🎯 1-Min Changemaker Quiz
            </button>

            <button
              onClick={() => setActiveTab('pledge')}
              className={`px-6 py-2.5 rounded-full text-xs font-bold transition-all ${
                activeTab === 'pledge'
                  ? 'bg-[#0d9488] text-white shadow-sm'
                  : 'bg-white border border-slate-200 text-slate-700 hover:bg-teal-50'
              }`}
            >
              ✋ National Civic Pledge
            </button>
          </div>
        </div>

        {/* TAB 1: INTERACTIVE QUIZ */}
        {activeTab === 'quiz' && (
          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-3xl border border-slate-200/80 p-8 sm:p-12 shadow-sm relative overflow-hidden">
              
              {!quizCompleted ? (
                <div className="space-y-8">
                  {/* Progress Indicator */}
                  <div className="space-y-2">
                    <div className="flex justify-between items-center text-xs font-bold text-slate-500">
                      <span>Question {currentStep + 1} of {quizQuestions.length}</span>
                      <span className="text-[#0d9488]">{Math.round(((currentStep + 1) / quizQuestions.length) * 100)}% Completed</span>
                    </div>
                    <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-[#0d9488]"
                        initial={{ width: 0 }}
                        animate={{ width: `${((currentStep + 1) / quizQuestions.length) * 100}%` }}
                        transition={{ duration: 0.3 }}
                      />
                    </div>
                  </div>

                  {/* Question Title */}
                  <div className="space-y-2">
                    <h3 className="text-xl sm:text-2xl font-bold text-[#164e63] leading-snug">
                      {quizQuestions[currentStep].question}
                    </h3>
                  </div>

                  {/* Option Cards */}
                  <div className="space-y-3">
                    {quizQuestions[currentStep].options.map((opt, idx) => (
                      <button
                        key={idx}
                        onClick={() => handleSelectAnswer(opt.label)}
                        className="w-full p-4 sm:p-5 rounded-2xl border border-slate-200 hover:border-[#0d9488] hover:bg-teal-50/50 text-left text-sm font-bold text-slate-800 transition-all flex items-center justify-between group shadow-sm hover:shadow-md"
                      >
                        <span className="group-hover:text-[#0d9488] transition-colors">{opt.label}</span>
                        <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-[#0d9488] group-hover:translate-x-1 transition-all shrink-0" />
                      </button>
                    ))}
                  </div>
                </div>
              ) : (
                /* Quiz Result Screen */
                <AnimatePresence>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center space-y-6 py-4"
                  >
                    <div className="w-20 h-20 rounded-full bg-teal-50 border-2 border-[#0d9488] text-[#0d9488] mx-auto flex items-center justify-center shadow-md">
                      <Award className="w-10 h-10" />
                    </div>

                    <div className="space-y-2">
                      <span className="px-3.5 py-1 rounded-full bg-[#0d9488]/10 text-[#0d9488] text-xs font-bold uppercase tracking-wider">
                        Assessment Result
                      </span>
                      <h3 className="text-2xl sm:text-3xl font-black text-[#164e63]">
                        You are an <span className="text-[#0d9488]">Emotsiya Civic Changemaker</span>!
                      </h3>
                      <p className="text-sm text-slate-600 font-medium max-w-lg mx-auto leading-relaxed">
                        Based on your choices, you possess strong leadership potential in driving community discipline, environmental stewardship, and youth empowerment.
                      </p>
                    </div>

                    {/* Result Highlights */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-xl mx-auto p-4 rounded-2xl bg-[#f4fbfb] border border-slate-200/80 text-xs font-bold text-slate-700">
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#0d9488] shrink-0" />
                        <span>High Leadership Aptitude</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#0d9488] shrink-0" />
                        <span>Verified Badge Eligible</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#0d9488] shrink-0" />
                        <span>Field Drive Ready</span>
                      </div>
                    </div>

                    {/* Action CTAs */}
                    <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
                      <button
                        onClick={() => onOpenPassModal('199')}
                        className="px-8 py-3.5 text-xs font-bold text-white bg-[#0d9488] hover:bg-[#0f766e] rounded-full shadow-md transition-all flex items-center gap-2"
                      >
                        <span>Claim Citizen Badge & Pass</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>

                      <button
                        onClick={resetQuiz}
                        className="px-6 py-3.5 text-xs font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-full transition-all flex items-center gap-1.5"
                      >
                        <RotateCcw className="w-3.5 h-3.5" />
                        <span>Retake Quiz</span>
                      </button>
                    </div>
                  </motion.div>
                </AnimatePresence>
              )}

            </div>
          </div>
        )}

        {/* TAB 2: NATIONAL CIVIC PLEDGE WALL */}
        {activeTab === 'pledge' && (
          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-3xl border border-slate-200/80 p-8 sm:p-12 shadow-sm space-y-8">
              
              {/* Counter Header */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-6 rounded-2xl bg-[#f4fbfb] border border-slate-200/80 text-center sm:text-left">
                <div>
                  <span className="text-xs text-slate-500 font-bold uppercase tracking-wider block">Nationwide Impact Counter</span>
                  <p className="text-3xl sm:text-4xl font-black text-[#164e63] font-serif-heading">
                    {pledgeCount.toLocaleString()} <span className="text-base text-[#0d9488] font-sans font-bold">Youth Pledged</span>
                  </p>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white text-[#0d9488] text-xs font-bold shadow-sm border border-slate-200">
                  <Users className="w-4 h-4" />
                  <span>Join 100,000+ Citizens</span>
                </div>
              </div>

              {!pledgeSubmitted ? (
                <form onSubmit={handlePledgeSubmit} className="space-y-6">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={pledgeName}
                      onChange={(e) => setPledgeName(e.target.value)}
                      placeholder="e.g. Sumit Sharma"
                      className="w-full px-5 py-3.5 rounded-2xl border border-slate-300 focus:border-[#0d9488] focus:ring-2 focus:ring-[#0d9488]/20 outline-none text-sm font-medium transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                      Choose Your Primary Civic Commitment *
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {[
                        'Zero-Waste & Environmental Care',
                        'Strict Road Safety & Pedestrian Duty',
                        'Drug-Free & Healthy Lifestyle',
                        'Public Cleanliness & Transit Respect',
                      ].map((pledgeItem) => (
                        <button
                          key={pledgeItem}
                          type="button"
                          onClick={() => setSelectedPledge(pledgeItem)}
                          className={`p-4 rounded-2xl border text-xs font-bold text-left transition-all ${
                            selectedPledge === pledgeItem
                              ? 'bg-[#0d9488] text-white border-[#0d9488] shadow-sm'
                              : 'bg-slate-50 border-slate-200 text-slate-800 hover:bg-slate-100'
                          }`}
                        >
                          {pledgeItem}
                        </button>
                      ))}
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 text-xs font-bold text-white bg-[#0d9488] hover:bg-[#0f766e] rounded-2xl shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2"
                  >
                    <ShieldCheck className="w-4 h-4" />
                    <span>Take Official Youth Civic Pledge</span>
                  </button>
                </form>
              ) : (
                /* Pledge Confirmation Certificate */
                <AnimatePresence>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center space-y-6 py-4"
                  >
                    <div className="p-8 rounded-3xl bg-gradient-to-br from-teal-900 to-[#164e63] text-white space-y-4 shadow-xl border border-teal-700 relative overflow-hidden">
                      <div className="absolute -right-8 -bottom-8 w-40 h-40 bg-teal-400/10 rounded-full blur-2xl pointer-events-none" />
                      
                      <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 text-teal-200 text-[11px] font-bold tracking-wider uppercase backdrop-blur-md">
                        <Award className="w-3.5 h-3.5 text-teal-300" />
                        <span>Official Digital Commitment</span>
                      </div>

                      <h4 className="text-2xl sm:text-3xl font-serif italic text-white">
                        Civic Pledge Certificate
                      </h4>

                      <p className="text-sm font-medium text-teal-100">
                        This certifies that <span className="font-bold text-white text-lg underline decoration-teal-400">{pledgeName}</span> has pledged to honor:
                      </p>

                      <div className="p-4 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 text-xs font-bold text-teal-100 max-w-md mx-auto">
                        &ldquo;{selectedPledge}&rdquo;
                      </div>

                      <p className="text-[11px] text-teal-300 font-mono pt-2">
                        Pledge ID: EM-2026-{Math.floor(100000 + Math.random() * 900000)} • Emotsiya National Movement
                      </p>
                    </div>

                    <div className="flex flex-wrap justify-center gap-4">
                      <a
                        href={`https://wa.me/?text=${encodeURIComponent(`I just took the official Youth Civic Pledge on Emotsiya! Join me in building a better India: https://emotsiya.co.in`)}`}
                        target="_blank"
                        rel="noreferrer"
                        className="px-6 py-3 text-xs font-bold text-white bg-[#25D366] hover:bg-[#20ba5a] rounded-full shadow-md transition-all flex items-center gap-2"
                      >
                        <Share2 className="w-4 h-4" />
                        <span>Share Pledge Certificate</span>
                      </a>

                      <button
                        onClick={() => setPledgeSubmitted(false)}
                        className="px-6 py-3 text-xs font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-full transition-all"
                      >
                        Pledge Again
                      </button>
                    </div>
                  </motion.div>
                </AnimatePresence>
              )}

            </div>
          </div>
        )}

      </div>
    </section>
  );
};
