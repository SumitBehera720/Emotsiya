import React from 'react';
import { motion, Variants } from 'framer-motion';
import { Star, Quote, Building2, ShieldCheck } from 'lucide-react';

export const ImpactPartnersSection: React.FC = () => {
  const partnerSchools = [
    'Delhi Public School',
    'Kendriya Vidyalaya Sangathan',
    'DAV Public Schools',
    'St. Xavier’s Group',
    'Army Public School',
    'City Montessori School',
  ];

  const testimonials = [
    {
      id: 1,
      quote: "Emotsiya’s habit-discipline curriculum transformed our students’ approach toward civic duty and self-control. The impact on school environment has been extraordinary.",
      name: "Dr. Sunita Sharma",
      role: "Principal, Delhi Partner School",
      rating: 5,
      tag: "School Leadership",
    },
    {
      id: 2,
      quote: "The Public Speaking & EQ Masterclass gave our teenagers confidence to articulate ideas without fear. A must-have initiative for every school across India.",
      name: "Rajesh V. Nair",
      role: "Senior Educator & Counselor",
      rating: 5,
      tag: "Youth Mentorship",
    },
    {
      id: 3,
      quote: "Participating in the Cleanliness & Waste Drive opened my eyes. I now lead our student environmental club and mentor 200+ junior students.",
      name: "Ananya Deshmukh",
      role: "Student Youth Delegate (Class 12)",
      rating: 5,
      tag: "Student Changemaker",
    },
  ];

  const textVariants: Variants = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section id="impact" className="py-24 lg:py-32 bg-[#f4fbfb] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: '-100px' }}
          variants={textVariants}
          className="max-w-2xl mx-auto text-center space-y-4 mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0d9488]/10 border border-[#0d9488]/20 text-[#0d9488] text-xs font-bold uppercase tracking-wider">
            <Building2 className="w-3.5 h-3.5" />
            <span>National Impact Network</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#164e63] leading-tight font-serif-heading">
            Trusted Across <span className="text-[#0d9488] italic font-serif">1,000+ Partner Schools</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-600 font-medium leading-relaxed">
            Transforming school culture, student discipline, and civic awareness nationwide.
          </p>
        </motion.div>

        {/* Partner School Badges Bar */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          variants={textVariants}
          className="flex flex-wrap justify-center items-center gap-3 mb-16"
        >
          {partnerSchools.map((school, idx) => (
            <div
              key={idx}
              className="px-5 py-2.5 rounded-2xl bg-white border border-slate-200/80 text-xs font-bold text-slate-700 shadow-sm flex items-center gap-2"
            >
              <ShieldCheck className="w-4 h-4 text-[#0d9488]" />
              <span>{school}</span>
            </div>
          ))}
        </motion.div>

        {/* Testimonials 3-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <motion.div
              key={t.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false }}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: idx * 0.15 } },
              }}
              whileHover={{ y: -6 }}
              className="bg-white rounded-3xl border border-slate-200/80 p-8 shadow-sm hover:shadow-xl hover:border-[#0d9488]/30 transition-all flex flex-col justify-between group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="p-3 rounded-2xl bg-teal-50 text-[#0d9488]">
                    <Quote className="w-5 h-5" />
                  </div>
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                </div>

                <p className="text-sm text-slate-700 font-medium leading-relaxed italic">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>

              <div className="pt-6 border-t border-slate-100 mt-6 flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-bold text-[#164e63]">{t.name}</h4>
                  <p className="text-xs text-slate-500 font-medium">{t.role}</p>
                </div>
                <span className="px-3 py-1 rounded-full bg-[#0d9488]/10 text-[#0d9488] text-[11px] font-bold">
                  {t.tag}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom National Stat Banner */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          variants={textVariants}
          className="mt-16 p-8 rounded-3xl bg-gradient-to-r from-teal-900 to-[#164e63] text-white shadow-xl grid grid-cols-2 md:grid-cols-4 gap-6 text-center"
        >
          <div>
            <p className="text-3xl sm:text-4xl font-black font-serif-heading text-teal-300">100K+</p>
            <p className="text-xs text-teal-100 font-bold uppercase tracking-wider mt-1">Youth Impacted</p>
          </div>
          <div>
            <p className="text-3xl sm:text-4xl font-black font-serif-heading text-white">1,000+</p>
            <p className="text-xs text-teal-100 font-bold uppercase tracking-wider mt-1">Partner Institutions</p>
          </div>
          <div>
            <p className="text-3xl sm:text-4xl font-black font-serif-heading text-teal-300">50+</p>
            <p className="text-xs text-teal-100 font-bold uppercase tracking-wider mt-1">Cities Covered</p>
          </div>
          <div>
            <p className="text-3xl sm:text-4xl font-black font-serif-heading text-white">100%</p>
            <p className="text-xs text-teal-100 font-bold uppercase tracking-wider mt-1">Certified Impact</p>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
