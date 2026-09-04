import React, { useState, useEffect } from 'react';
import { X, CheckCircle2 } from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppIcon';

interface PassModalProps {
  isOpen: boolean;
  initialTier?: '199' | '499';
  onClose: () => void;
}

export const PassModal: React.FC<PassModalProps> = ({ isOpen, initialTier = '199', onClose }) => {
  const [selectedTier, setSelectedTier] = useState<'199' | '499'>(initialTier);
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [city, setCity] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    setSelectedTier(initialTier);
  }, [initialTier]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const whatsappMessage = encodeURIComponent(
    `Hi Emotsiya Team,\n\nI want to register for the Emotsiya Event Pass!\n\nName: ${fullName || 'N/A'}\nPhone: ${phone || 'N/A'}\nEmail: ${email || 'N/A'}\nCity: ${city || 'N/A'}\nSelected Pass: ₹${selectedTier} (${selectedTier === '499' ? 'Premium Leader Pass' : 'Standard Citizen Pass'})\n\nPlease share payment & joining details.`
  );

  const whatsappUrl = `https://wa.me/918808037280?text=${whatsappMessage}`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-md">
      <div className="relative max-w-lg w-full rounded-3xl bg-white p-6 sm:p-8 space-y-6 shadow-2xl overflow-hidden border border-slate-200">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-slate-100 text-slate-500 hover:text-slate-950 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {!isSubmitted ? (
          <>
            <div className="space-y-2 text-center sm:text-left">
              <span className="px-3 py-1 rounded-full bg-teal-50 border border-teal-200 text-[#0d9488] text-xs font-bold">
                Event Registration Pass
              </span>
              <h3 className="text-2xl font-black text-[#164e63]">Get Your Emotsiya Pass</h3>
              <p className="text-xs text-slate-600 font-medium">
                Select your pass tier and complete your contact info to join the movement.
              </p>
            </div>

            {/* Tier Selector Buttons */}
            <div className="grid grid-cols-2 gap-3 p-1 rounded-2xl bg-[#f4fbfb] border border-slate-200">
              <button
                type="button"
                onClick={() => setSelectedTier('199')}
                className={`py-3 px-4 rounded-xl text-xs font-bold transition-all text-center space-y-0.5 ${
                  selectedTier === '199'
                    ? 'bg-[#0d9488] text-white shadow-md'
                    : 'text-slate-700 hover:text-slate-900'
                }`}
              >
                <span className="block text-teal-100">Standard Pass</span>
                <span className="block text-lg font-black text-white">₹199</span>
              </button>

              <button
                type="button"
                onClick={() => setSelectedTier('499')}
                className={`py-3 px-4 rounded-xl text-xs font-bold transition-all text-center space-y-0.5 relative ${
                  selectedTier === '499'
                    ? 'bg-[#164e63] text-white shadow-md'
                    : 'text-slate-700 hover:text-slate-900'
                }`}
              >
                <span className="block text-cyan-200">Premium Leader</span>
                <span className="block text-lg font-black text-cyan-300">₹499</span>
                <span className="absolute -top-2 right-2 px-1.5 py-0.5 bg-[#0d9488] text-white font-bold text-[9px] rounded">
                  VIP
                </span>
              </button>
            </div>

            {/* Registration Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Full Name *</label>
                <input
                  type="text"
                  required
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="e.g. Rahul Sharma"
                  className="w-full px-4 py-2.5 rounded-xl bg-[#f4fbfb] border border-slate-200 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#0d9488] font-medium"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">WhatsApp Phone *</label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="e.g. 9876543210"
                    className="w-full px-4 py-2.5 rounded-xl bg-[#f4fbfb] border border-slate-200 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#0d9488] font-medium"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Email Address</label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="name@gmail.com"
                    className="w-full px-4 py-2.5 rounded-xl bg-[#f4fbfb] border border-slate-200 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#0d9488] font-medium"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">City / Institution</label>
                <input
                  type="text"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  placeholder="e.g. Lucknow / Delhi Public School"
                  className="w-full px-4 py-2.5 rounded-xl bg-[#f4fbfb] border border-slate-200 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#0d9488] font-medium"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 px-4 rounded-xl bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold text-xs shadow-md transition-all flex items-center justify-center gap-2"
              >
                <WhatsAppIcon className="w-4 h-4 text-white" />
                <span>Confirm & Proceed on WhatsApp (₹{selectedTier})</span>
              </button>
            </form>
          </>
        ) : (
          /* Confirmation State */
          <div className="text-center space-y-6 py-4">
            <div className="w-16 h-16 rounded-full bg-teal-50 text-[#0d9488] flex items-center justify-center mx-auto border border-teal-200 shadow-sm">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <div className="space-y-2">
              <h3 className="text-2xl font-black text-[#164e63]">Registration Details Saved!</h3>
              <p className="text-xs text-slate-600 max-w-sm mx-auto font-medium">
                Thank you <span className="font-bold text-[#0d9488]">{fullName}</span>! Click below to send your pre-filled pass request directly to our team on WhatsApp.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-[#f4fbfb] border border-slate-200 text-left text-xs text-slate-700 space-y-1 font-mono">
              <p><span className="text-slate-500">Selected Pass:</span> ₹{selectedTier} ({selectedTier === '499' ? 'Premium Leader Pass' : 'Standard Citizen Pass'})</p>
              <p><span className="text-slate-500">Phone:</span> {phone}</p>
              <p><span className="text-slate-500">City:</span> {city || 'N/A'}</p>
            </div>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              onClick={() => {
                setIsSubmitted(false);
                onClose();
              }}
              className="inline-flex items-center justify-center gap-2 w-full py-3.5 px-4 rounded-xl bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold text-xs shadow-lg transition-all"
            >
              <WhatsAppIcon className="w-5 h-5 text-white" />
              <span>Open WhatsApp Chat Now</span>
            </a>
          </div>
        )}

      </div>
    </div>
  );
};
