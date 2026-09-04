import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle2, ShieldCheck, ArrowRight, BookOpen, Clock, Star } from 'lucide-react';
import { Course } from './CoursesSection';

interface CourseModalProps {
  isOpen: boolean;
  course: Course | null;
  onClose: () => void;
}

export const CourseModal: React.FC<CourseModalProps> = ({ isOpen, course, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    institution: '',
    paymentMethod: 'upi',
  });
  const [isSuccess, setIsSuccess] = useState(false);

  if (!isOpen || !course) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSuccess(true);
  };

  const handleResetAndClose = () => {
    setIsSuccess(false);
    setFormData({ name: '', email: '', phone: '', institution: '', paymentMethod: 'upi' });
    onClose();
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/60 backdrop-blur-sm">
        
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3 }}
          className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-stone-200 overflow-hidden my-8"
        >
          {/* Close Button */}
          <button
            onClick={handleResetAndClose}
            className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-stone-100 hover:bg-stone-200 text-stone-700 flex items-center justify-center transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          {!isSuccess ? (
            <div>
              {/* Header */}
              <div className="p-6 sm:p-8 bg-[#faf8f5] border-b border-stone-200/80 space-y-3">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#d96b52]/10 border border-[#d96b52]/20 text-[#d96b52] text-xs font-bold uppercase tracking-wider">
                  <BookOpen className="w-3.5 h-3.5" />
                  <span>Course Enrollment</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-black text-[#1a1a1a] leading-tight">
                  {course.title}
                </h3>

                <div className="flex flex-wrap items-center gap-4 text-xs text-stone-600 font-bold">
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-[#d96b52]" />
                    <span>{course.duration}</span>
                  </span>
                  <span className="flex items-center gap-1 text-amber-600">
                    <Star className="w-3.5 h-3.5 fill-amber-500" />
                    <span>{course.rating} Rating</span>
                  </span>
                </div>
              </div>

              {/* Form Body */}
              <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-5">
                
                <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-between">
                  <div>
                    <span className="text-xs text-stone-600 font-bold block">TOTAL ENROLLMENT FEE</span>
                    <span className="text-2xl font-black text-[#1a1a1a]">₹{course.price}</span>
                    <span className="text-xs text-stone-500 line-through ml-2">₹{course.originalPrice}</span>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-black">
                    Instant Lifetime Access
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1.5">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rahul Sharma"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-stone-300 focus:border-[#d96b52] focus:ring-2 focus:ring-[#d96b52]/20 outline-none text-sm font-medium transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1.5">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="rahul@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-stone-300 focus:border-[#d96b52] focus:ring-2 focus:ring-[#d96b52]/20 outline-none text-sm font-medium transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1.5">
                      Phone Number (WhatsApp) *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-stone-300 focus:border-[#d96b52] focus:ring-2 focus:ring-[#d96b52]/20 outline-none text-sm font-medium transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1.5">
                      School / Institution *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Delhi Public School"
                      value={formData.institution}
                      onChange={(e) => setFormData({ ...formData, institution: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-stone-300 focus:border-[#d96b52] focus:ring-2 focus:ring-[#d96b52]/20 outline-none text-sm font-medium transition-all"
                    />
                  </div>
                </div>

                {/* Payment Option */}
                <div>
                  <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-2">
                    Select Payment Gateway
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      type="button"
                      onClick={() => setFormData({ ...formData, paymentMethod: 'upi' })}
                      className={`p-3 rounded-xl border text-xs font-bold text-center transition-all ${
                        formData.paymentMethod === 'upi'
                          ? 'bg-[#d96b52] text-white border-[#d96b52] shadow-sm'
                          : 'bg-stone-50 border-stone-200 text-stone-700 hover:bg-stone-100'
                      }`}
                    >
                      Instant UPI / QR Code
                    </button>
                    <button
                      type="button"
                      onClick={() => setFormData({ ...formData, paymentMethod: 'card' })}
                      className={`p-3 rounded-xl border text-xs font-bold text-center transition-all ${
                        formData.paymentMethod === 'card'
                          ? 'bg-[#d96b52] text-white border-[#d96b52] shadow-sm'
                          : 'bg-stone-50 border-stone-200 text-stone-700 hover:bg-stone-100'
                      }`}
                    >
                      Credit / Debit Card / NetBanking
                    </button>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 text-sm font-black text-white bg-[#d96b52] hover:bg-[#c85a42] rounded-xl shadow-lg transition-all flex items-center justify-center gap-2"
                >
                  <span>Complete Enrollment (₹{course.price})</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <div className="flex items-center justify-center gap-2 text-xs text-stone-500 font-semibold pt-1">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>256-Bit SSL Encrypted & Instant Certificate Guarantee</span>
                </div>

              </form>
            </div>
          ) : (
            <div className="p-8 sm:p-12 text-center space-y-5">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <h3 className="text-2xl sm:text-3xl font-black text-[#1a1a1a]">
                Enrollment Successful!
              </h3>

              <p className="text-sm text-stone-600 font-medium max-w-md mx-auto leading-relaxed">
                Welcome to <span className="font-bold text-[#1a1a1a]">{course.title}</span>! Confirmation and your student portal login link have been sent to <span className="font-bold text-[#d96b52]">{formData.email}</span>.
              </p>

              <div className="pt-4">
                <button
                  onClick={handleResetAndClose}
                  className="px-8 py-3 text-sm font-bold text-white bg-[#1a1a1a] hover:bg-stone-800 rounded-xl transition-all shadow-md"
                >
                  Back to Website
                </button>
              </div>
            </div>
          )}

        </motion.div>

      </div>
    </AnimatePresence>
  );
};
