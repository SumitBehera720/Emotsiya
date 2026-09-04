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
          className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden my-8"
        >
          {/* Close Button */}
          <button
            onClick={handleResetAndClose}
            className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 flex items-center justify-center transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          {!isSuccess ? (
            <div>
              {/* Header */}
              <div className="p-6 sm:p-8 bg-[#f4fbfb] border-b border-slate-200/80 space-y-3">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0d9488]/10 border border-[#0d9488]/20 text-[#0d9488] text-xs font-bold uppercase tracking-wider">
                  <BookOpen className="w-3.5 h-3.5" />
                  <span>Course Enrollment</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-black text-[#164e63] leading-tight">
                  {course.title}
                </h3>

                <div className="flex flex-wrap items-center gap-4 text-xs text-slate-600 font-bold">
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-[#0d9488]" />
                    <span>{course.duration}</span>
                  </span>
                  <span className="flex items-center gap-1 text-teal-700">
                    <Star className="w-3.5 h-3.5 fill-teal-500 text-teal-500" />
                    <span>{course.rating} Rating</span>
                  </span>
                </div>
              </div>

              {/* Form Body */}
              <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-5">
                
                <div className="p-4 rounded-2xl bg-teal-50 border border-teal-200/80 flex items-center justify-between">
                  <div>
                    <span className="text-xs text-slate-600 font-bold block">TOTAL ENROLLMENT FEE</span>
                    <span className="text-2xl font-black text-[#164e63]">₹{course.price}</span>
                    <span className="text-xs text-slate-400 line-through ml-2">₹{course.originalPrice}</span>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-[#0d9488] text-white text-xs font-bold shadow-sm">
                    Lifetime Access
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rahul Sharma"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-[#0d9488] focus:ring-2 focus:ring-[#0d9488]/20 outline-none text-sm font-medium transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="rahul@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-[#0d9488] focus:ring-2 focus:ring-[#0d9488]/20 outline-none text-sm font-medium transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Phone Number (WhatsApp) *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-[#0d9488] focus:ring-2 focus:ring-[#0d9488]/20 outline-none text-sm font-medium transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      School / Institution *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Delhi Public School"
                      value={formData.institution}
                      onChange={(e) => setFormData({ ...formData, institution: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-[#0d9488] focus:ring-2 focus:ring-[#0d9488]/20 outline-none text-sm font-medium transition-all"
                    />
                  </div>
                </div>

                {/* Payment Option */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                    Select Payment Gateway
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      type="button"
                      onClick={() => setFormData({ ...formData, paymentMethod: 'upi' })}
                      className={`p-3 rounded-xl border text-xs font-bold text-center transition-all ${
                        formData.paymentMethod === 'upi'
                          ? 'bg-[#0d9488] text-white border-[#0d9488] shadow-sm'
                          : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
                      }`}
                    >
                      Instant UPI / QR Code
                    </button>
                    <button
                      type="button"
                      onClick={() => setFormData({ ...formData, paymentMethod: 'card' })}
                      className={`p-3 rounded-xl border text-xs font-bold text-center transition-all ${
                        formData.paymentMethod === 'card'
                          ? 'bg-[#0d9488] text-white border-[#0d9488] shadow-sm'
                          : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
                      }`}
                    >
                      Credit / Debit Card / NetBanking
                    </button>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 text-sm font-bold text-white bg-[#0d9488] hover:bg-[#0f766e] rounded-xl shadow-lg transition-all flex items-center justify-center gap-2"
                >
                  <span>Complete Enrollment (₹{course.price})</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <div className="flex items-center justify-center gap-2 text-xs text-slate-500 font-semibold pt-1">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>256-Bit SSL Encrypted & Instant Certificate Guarantee</span>
                </div>

              </form>
            </div>
          ) : (
            <div className="p-8 sm:p-12 text-center space-y-5">
              <div className="w-16 h-16 rounded-full bg-teal-100 text-[#0d9488] mx-auto flex items-center justify-center">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <h3 className="text-2xl sm:text-3xl font-black text-[#164e63]">
                Enrollment Successful!
              </h3>

              <p className="text-sm text-slate-600 font-medium max-w-md mx-auto leading-relaxed">
                Welcome to <span className="font-bold text-slate-900">{course.title}</span>! Confirmation and login details have been sent to <span className="font-bold text-[#0d9488]">{formData.email}</span>.
              </p>

              <div className="pt-4">
                <button
                  onClick={handleResetAndClose}
                  className="px-8 py-3 text-sm font-bold text-white bg-[#164e63] hover:bg-cyan-950 rounded-xl transition-all shadow-md"
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
