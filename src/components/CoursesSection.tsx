import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Clock, Star, ArrowRight, CheckCircle2 } from 'lucide-react';

export interface Course {
  id: string;
  title: string;
  category: string;
  price: number;
  originalPrice: number;
  duration: string;
  rating: number;
  studentsCount: string;
  image: string;
  description: string;
  modules: string[];
  badge: string;
}

interface CoursesSectionProps {
  onOpenCourseModal: (course: Course) => void;
}

export const coursesData: Course[] = [
  {
    id: 'civic-leadership',
    title: 'Youth Civic Leadership & Governance Masterclass',
    category: 'Civic Governance',
    price: 999,
    originalPrice: 1999,
    duration: '4 Weeks • Live & Self-Paced',
    rating: 4.9,
    studentsCount: '2,400+ Students',
    image: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=1000&q=80',
    description: 'Learn civic responsibility, public policy organizing, youth parliaments, and community leadership.',
    modules: ['Public Policy & Constitution', 'Community Leadership', 'Youth Parliament', 'Problem Solving'],
    badge: 'Bestseller',
  },
  {
    id: 'eq-public-speaking',
    title: 'Public Speaking, EQ & High-Impact Leadership',
    category: 'Life Skills & EQ',
    price: 1499,
    originalPrice: 2999,
    duration: '6 Weeks • Intensive Workshop',
    rating: 5.0,
    studentsCount: '4,100+ Students',
    image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1000&q=80',
    description: 'Master emotional intelligence, conquer stage fright, and communicate effectively with confidence.',
    modules: ['Emotional Intelligence', 'Stage Presence & Oratory', 'Conflict Resolution', 'Personal Branding'],
    badge: 'Top Rated',
  },
  {
    id: 'green-stewardship',
    title: 'Environmental Stewardship & Zero-Waste Action',
    category: 'Environment',
    price: 499,
    originalPrice: 999,
    duration: '2 Weeks • Practical Drive',
    rating: 4.8,
    studentsCount: '1,800+ Students',
    image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=1000&q=80',
    description: 'Hands-on action course teaching sustainable living, plantation drives, and plastic-free auditing.',
    modules: ['Zero-Waste Living', 'Tree Plantation Protocols', 'Community Audits', 'Green Advocacy'],
    badge: 'Popular',
  },
];

export const CoursesSection: React.FC<CoursesSectionProps> = ({ onOpenCourseModal }) => {
  return (
    <section id="courses" className="py-24 lg:py-32 bg-[#f4fbfb] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Header */}
        <div className="max-w-2xl mx-auto text-center space-y-4 mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0d9488]/10 border border-[#0d9488]/20 text-[#0d9488] text-xs font-bold uppercase tracking-wider">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Certified Courses</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#164e63] leading-tight font-serif-heading">
            Learn Real-World <span className="text-[#0d9488] italic font-serif">Leadership Skills</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-600 font-medium leading-relaxed">
            Short, impactful certified masterclasses designed for youth, students, and educators.
          </p>
        </div>

        {/* 3-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {coursesData.map((course) => (
            <motion.div
              key={course.id}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-3xl border border-slate-200/80 shadow-sm hover:shadow-xl hover:border-[#0d9488]/30 transition-all overflow-hidden flex flex-col justify-between group"
            >
              <div>
                {/* Course Image */}
                <div className="relative h-56 w-full overflow-hidden bg-slate-100">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  
                  <span className="absolute top-4 left-4 px-3.5 py-1 rounded-full bg-white/95 text-slate-800 text-xs font-bold shadow-sm">
                    {course.category}
                  </span>

                  <span className="absolute top-4 right-4 px-3.5 py-1 rounded-full bg-[#0d9488] text-white text-xs font-bold shadow-sm">
                    {course.badge}
                  </span>

                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white text-xs font-bold">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-teal-300" />
                      <span>{course.duration}</span>
                    </span>
                    <span className="flex items-center gap-1 text-teal-300 font-bold">
                      <Star className="w-3.5 h-3.5 fill-teal-300" />
                      <span>{course.rating}</span>
                    </span>
                  </div>
                </div>

                {/* Course Content */}
                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-bold text-[#164e63] group-hover:text-[#0d9488] transition-colors leading-snug">
                    {course.title}
                  </h3>

                  <p className="text-sm text-slate-600 font-medium leading-relaxed line-clamp-2">
                    {course.description}
                  </p>

                  <div className="space-y-2 pt-2">
                    <div className="flex flex-wrap gap-1.5">
                      {course.modules.slice(0, 3).map((module, idx) => (
                        <span key={idx} className="px-2.5 py-1 rounded-lg bg-teal-50 text-teal-900 text-xs font-semibold flex items-center gap-1 border border-teal-100">
                          <CheckCircle2 className="w-3 h-3 text-[#0d9488]" />
                          <span>{module}</span>
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Price & CTA */}
              <div className="p-6 pt-0 border-t border-slate-100 flex items-center justify-between mt-4">
                <div>
                  <span className="text-xs text-slate-400 block line-through font-semibold">₹{course.originalPrice}</span>
                  <span className="text-2xl font-black text-[#164e63]">₹{course.price}</span>
                </div>

                <button
                  onClick={() => onOpenCourseModal(course)}
                  className="px-6 py-3 text-xs font-bold text-white bg-[#0d9488] hover:bg-[#0f766e] rounded-full shadow-sm hover:shadow-md transition-all flex items-center gap-1.5"
                >
                  <span>Enroll Now</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
