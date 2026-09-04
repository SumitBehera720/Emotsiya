import React, { useState } from 'react';
import { Maximize2, X, MapPin } from 'lucide-react';

export const GallerySection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedItem, setSelectedItem] = useState<{
    id: number;
    title: string;
    category: string;
    url: string;
    location: string;
    desc: string;
  } | null>(null);

  const categories = ['All', 'Community Drives', 'School Programs', 'Youth Workshops', 'Civic Action'];

  const galleryItems = [
    {
      id: 1,
      title: 'School Civic Education & Youth Assembly',
      category: 'School Programs',
      url: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=1000&q=80',
      location: 'New Delhi Partner School',
      desc: 'Students engaging in interactive civic responsibility workshops and habit training.',
    },
    {
      id: 2,
      title: 'Youth Environmental & Tree Plantation Drive',
      category: 'Community Drives',
      url: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=1000&q=80',
      location: 'Lucknow Green Zone',
      desc: 'Planting 500+ saplings with student volunteers under the Pollution Control initiative.',
    },
    {
      id: 3,
      title: 'Road Safety & Traffic Awareness Rally',
      category: 'Civic Action',
      url: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1000&q=80',
      location: 'Bengaluru Junction',
      desc: 'Youth volunteers encouraging helmet discipline and pedestrian safety awareness.',
    },
    {
      id: 4,
      title: 'Emotional Intelligence & Public Speaking Session',
      category: 'Youth Workshops',
      url: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1000&q=80',
      location: 'Auditorium Hall',
      desc: 'Developing mental strength, public speaking, and self-confidence among participants.',
    },
    {
      id: 5,
      title: 'Cleanliness & Waste Segregation Drive',
      category: 'Community Drives',
      url: 'https://images.unsplash.com/photo-1618477461853-cf6ed80faba5?auto=format&fit=crop&w=1000&q=80',
      location: 'Riverbank Clean Drive',
      desc: 'Youth team collecting waste and promoting plastic-free sustainable lifestyle habits.',
    },
    {
      id: 6,
      title: 'Drug Addiction Prevention Seminar & Pledge',
      category: 'Youth Workshops',
      url: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1000&q=80',
      location: 'Youth Community Center',
      desc: 'Empowering youth with self-control, purpose, and healthy recreational activities.',
    },
  ];

  const filteredItems = activeCategory === 'All'
    ? galleryItems
    : galleryItems.filter((item) => item.category === activeCategory);

  return (
    <section id="gallery" className="py-10 sm:py-16 md:py-24 bg-[#faf7f2] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-2 sm:space-y-4 mb-8 sm:mb-14">
          <span className="px-3.5 py-1 rounded-full bg-white/80 border border-amber-900/15 text-amber-900 text-[10px] sm:text-xs font-black tracking-wider uppercase backdrop-blur-md shadow-sm">
            Media & Field Action
          </span>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
            Emotsiya <span className="font-serif italic text-amber-800">Impact Gallery</span>
          </h2>
          <p className="text-slate-700 text-xs sm:text-base font-medium">
            Real moments from our school programs, community cleanliness drives, youth workshops, and civic action campaigns.
          </p>

          {/* Filter Bar */}
          <div className="flex flex-wrap justify-center items-center gap-2 pt-4">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3.5 sm:px-5 py-1.5 sm:py-2 rounded-full text-[10px] sm:text-xs font-extrabold transition-all backdrop-blur-md ${
                  activeCategory === cat
                    ? 'bg-amber-900 text-white shadow-md scale-[1.02]'
                    : 'bg-white/80 border border-slate-300 text-slate-800 hover:bg-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid (2-column on mobile) */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedItem(item)}
              className="group relative rounded-2xl sm:rounded-3xl bg-white/85 border border-white overflow-hidden cursor-pointer shadow-md backdrop-blur-2xl hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="aspect-[4/3] w-full overflow-hidden bg-slate-900 relative image-zoom-container">
                <img
                  src={item.url}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent opacity-70 group-hover:opacity-90 transition-opacity"></div>
                
                <span className="absolute top-2 left-2 px-2.5 py-0.5 rounded-full bg-white/90 backdrop-blur-md text-[9px] sm:text-xs font-black text-slate-900 shadow-sm">
                  {item.category}
                </span>

                <div className="absolute top-2 right-2 p-1.5 rounded-full bg-white/90 text-slate-900 opacity-0 group-hover:opacity-100 transition-opacity shadow-sm backdrop-blur-md">
                  <Maximize2 className="w-3.5 h-3.5" />
                </div>
              </div>

              <div className="p-3 sm:p-5 space-y-0.5">
                <p className="text-[9px] sm:text-[11px] text-amber-800 font-mono font-bold flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-amber-700" />
                  <span className="line-clamp-1">{item.location}</span>
                </p>
                <h3 className="text-xs sm:text-base font-black text-slate-900 group-hover:text-amber-800 transition-colors leading-snug line-clamp-1">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {selectedItem && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
            <div className="relative max-w-4xl w-full rounded-2xl sm:rounded-3xl bg-white/95 border border-white overflow-hidden shadow-2xl space-y-4 p-5 sm:p-7 backdrop-blur-2xl">
              <button
                onClick={() => setSelectedItem(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-slate-100 text-slate-800 hover:text-slate-950 border border-slate-200 shadow-sm"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="rounded-xl overflow-hidden aspect-[16/9] bg-slate-900 shadow-inner">
                <img
                  src={selectedItem.url}
                  alt={selectedItem.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <span className="px-3 py-0.5 rounded-full bg-amber-100 text-amber-900 text-xs font-black">
                    {selectedItem.category}
                  </span>
                  <span className="text-xs text-slate-600 font-mono font-bold">• {selectedItem.location}</span>
                </div>
                <h3 className="text-lg sm:text-2xl font-black text-slate-900">{selectedItem.title}</h3>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">{selectedItem.desc}</p>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
