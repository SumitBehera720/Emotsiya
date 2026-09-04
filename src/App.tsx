import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { CoursesSection, Course } from './components/CoursesSection';
import { CourseModal } from './components/CourseModal';
import { EventSection } from './components/EventSection';
import { ImpactPartnersSection } from './components/ImpactPartnersSection';
import { InteractiveSection } from './components/InteractiveSection';
import { GallerySection } from './components/GallerySection';
import { PassModal } from './components/PassModal';
import { WhatsAppWidget } from './components/WhatsAppWidget';
import { Footer } from './components/Footer';
import { LoadingScreen } from './components/LoadingScreen';
import { useScrollReveal } from './hooks/useScrollReveal';

const ScrollSection: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { ref, isVisible } = useScrollReveal(0.1);
  return (
    <div
      ref={ref}
      className={`scroll-reveal ${isVisible ? 'revealed' : ''}`}
    >
      {children}
    </div>
  );
};

export const App: React.FC = () => {
  const [isPassModalOpen, setIsPassModalOpen] = useState(false);
  const [selectedPassTier, setSelectedPassTier] = useState<'199' | '499'>('199');

  const [isCourseModalOpen, setIsCourseModalOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);

  const handleOpenPassModal = (tier: '199' | '499' = '199') => {
    setSelectedPassTier(tier);
    setIsPassModalOpen(true);
  };

  const handleOpenCourseModal = (course: Course) => {
    setSelectedCourse(course);
    setIsCourseModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#f4fbfb] text-[#1e293b] flex flex-col font-sans selection:bg-[#0d9488] selection:text-white">
      {/* 1. Initial Animated Page Loading Screen */}
      <LoadingScreen />

      {/* Sticky Header Navbar */}
      <Navbar onOpenPassModal={handleOpenPassModal} />

      {/* Main Content */}
      <main className="flex-1">
        {/* Full-Screen Hero Visual Banner */}
        <Hero onOpenPassModal={handleOpenPassModal} />

        {/* 1. Certified Masterclasses & Courses Section */}
        <ScrollSection>
          <CoursesSection onOpenCourseModal={handleOpenCourseModal} />
        </ScrollSection>

        {/* 2. Live & Upcoming Events Section */}
        <ScrollSection>
          <EventSection onOpenPassModal={handleOpenPassModal} />
        </ScrollSection>

        {/* 3. National Impact & Partner Schools Network (New Relevant Section!) */}
        <ScrollSection>
          <ImpactPartnersSection />
        </ScrollSection>

        {/* 4. Interactive User Engagement (Quiz & National Civic Pledge) */}
        <ScrollSection>
          <InteractiveSection onOpenPassModal={handleOpenPassModal} />
        </ScrollSection>

        {/* 5. Filterable Media & Impact Gallery Section */}
        <ScrollSection>
          <GallerySection />
        </ScrollSection>
      </main>

      {/* Minimalist Footer */}
      <Footer />

      {/* Interactive Event Pass Modal */}
      <PassModal
        isOpen={isPassModalOpen}
        initialTier={selectedPassTier}
        onClose={() => setIsPassModalOpen(false)}
      />

      {/* Interactive Course Enrollment Modal */}
      <CourseModal
        isOpen={isCourseModalOpen}
        course={selectedCourse}
        onClose={() => setIsCourseModalOpen(false)}
      />

      {/* Floating WhatsApp Quick Support Widget */}
      <WhatsAppWidget />
    </div>
  );
};

export default App;
