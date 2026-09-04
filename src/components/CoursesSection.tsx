import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Clock, Star, ArrowRight, CheckCircle2, Sparkles } from 'lucide-react';

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
    duration: '4 Weeks • Self-Paced & Live',
    rating: 4.9,
    studentsCount: '2,400+ Students',
    image: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=1000&q=80',
    description: 'Learn the fundamentals of civic responsibility, public policy organizing, youth parliaments, and driving local community solutions.',
    modules: ['Public Policy & Constitution', 'Community Organizing', 'Youth Parliament Prep', 'Local Problem Solving'],
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
    description: 'Master emotional intelligence, conquer stage fright, build resilience, and communicate effectively with confidence in any room.',
    modules: ['Emotional Intelligence (EQ)', 'Stage Presence & Oratory', 'Conflict Resolution', 'Personal Branding'],
    badge: 'Top Rated',
  },
  {
    id: 'green-stewardship',
    title: 'Environmental Stewardship & Zero-Waste Action',
    category: 'Environment',
    price: 499,
    originalPrice: 999,
    duration: '2 Weeks • Practical Field Drive',
    rating: 4.8,
    studentsCount: '1,800+ Students',
    image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=1000&q=80',
    description: 'A hands-on action course teaching sustainable living, plantation drive logistics, plastic-free neighborhood auditing, and green campaigning.',
    modules: ['Zero-Waste Living', 'Tree Plantation Protocols', 'Community Audit Techniques', 'Green Advocacy'],
    badge: 'Popular',
  },
  {
    id: 'road-safety',
    title: 'Road Safety & Pedestrian Discipline Training',
    category: 'Urban Safety',
    price: 299,
    originalPrice: 599,
    duration: '1 Week • Certified Drive',
    rating: 4.9,
    studentsCount: '3,200+ Students',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1000&q=80',
    description: 'Understand traffic laws, pedestrian safety rights, defensive road habits, and how to execute city-wide traffic discipline campaigns.',
    modules: ['Traffic Code & Safety', 'Pedestrian Rights', 'Campaign Execution', 'First Aid Awareness'],
    badge: 'Certified',
  },
];

export const CoursesSection: React.FC<CoursesSectionProps> = ({ onOpenCourseModal }) => {
  return (
    <section id="courses" className="py-20 md:py-28 bg-[#faf8f5] relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#d96b52]/10 border border-[#d96b52]/20 text-[#d96b52] text-xs font-bold uppercase tracking-wider">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Masterclasses & Certified Courses</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#1a1a1a] leading-tight font-serif-heading">
            Transformative Courses for <span className="text-[#d96b52] italic font-serif">Youth & Leaders</span>
          </h2>

          <p className="text-base sm:text-lg text-stone-600 font-medium leading-relaxed">
            Gain certified real-world skills in public speaking, civic governance, environmental action, and emotional intelligence.
          </p>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {coursesData.map((course) => (
            <motion.div
              key={course.id}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-3xl border border-[#eae5dc] shadow-sm hover:shadow-xl hover:border-[#d96b52]/40 transition-all overflow-hidden flex flex-col justify-between group"
            >
              <div>
                {/* Course Image */}
                <div className="relative h-56 w-full overflow-hidden bg-stone-100">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  
                  <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-white/95 backdrop-blur-md text-[#1a1a1a] text-xs font-extrabold shadow-sm">
                    {course.category}
                  </div>

                  <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-[#d96b52] text-white text-xs font-black shadow-md flex items-center gap-1">
                    <Sparkles className="w-3 h-3" />
                    <span>{course.badge}</span>
                  </div>

                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white text-xs font-bold">
                    <div className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-amber-300" />
                      <span>{course.duration}</span>
                    </div>
                    <div className="flex items-center gap-1 text-amber-300 font-extrabold">
                      <Star className="w-3.5 h-3.5 fill-amber-300" />
                      <span>{course.rating}</span>
                      <span className="text-white/80 font-normal">({course.studentsCount})</span>
                    </div>
                  </div>
                </div>

                {/* Course Content */}
                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-bold text-[#1a1a1a] group-hover:text-[#d96b52] transition-colors leading-snug">
                    {course.title}
                  </h3>

                  <p className="text-sm text-stone-600 font-medium line-clamp-2 leading-relaxed">
                    {course.description}
                  </p>

                  {/* Modules Pills */}
                  <div className="space-y-2 pt-2">
                    <span className="text-xs font-bold text-stone-500 uppercase tracking-wider block">Key Learning Modules:</span>
                    <div className="flex flex-wrap gap-1.5">
                      {course.modules.map((module, idx) => (
                        <span key={idx} className="px-2.5 py-1 rounded-lg bg-stone-100 text-stone-700 text-xs font-semibold flex items-center gap-1">
                          <CheckCircle2 className="w-3 h-3 text-[#d96b52]" />
                          <span>{module}</span>
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Course Footer & Enrollment Price CTA */}
              <div className="p-6 pt-0 border-t border-stone-100 flex items-center justify-between mt-4">
                <div>
                  <span className="text-xs text-stone-500 block font-semibold line-through">₹{course.originalPrice}</span>
                  <span className="text-2xl font-black text-[#1a1a1a]">₹{course.price}</span>
                  <span className="text-xs font-extrabold text-emerald-600 ml-1.5">50% OFF</span>
                </div>

                <button
                  onClick={() => onOpenCourseModal(course)}
                  className="px-6 py-3 text-sm font-bold text-white bg-[#d96b52] hover:bg-[#c85a42] rounded-xl shadow-md hover:shadow-lg transition-all flex items-center gap-2"
                >
                  <span>Enroll Now</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
