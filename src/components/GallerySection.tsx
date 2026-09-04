import React, { useState } from 'react';
import { Maximize2, X, MapPin, Image as ImageIcon } from 'lucide-react';

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
    <section id="gallery" className="py-20 md:py-28 bg-[#faf8f5] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#d96b52]/10 border border-[#d96b52]/20 text-[#d96b52] text-xs font-bold uppercase tracking-wider">
            <ImageIcon className="w-3.5 h-3.5" />
            <span>Media & Field Action</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#1a1a1a] leading-tight font-serif-heading">
            Emotsiya <span className="text-[#d96b52] italic font-serif">Impact Gallery</span>
          </h2>

          <p className="text-base sm:text-lg text-stone-600 font-medium leading-relaxed">
            Real moments from our school programs, community cleanliness drives, youth workshops, and civic action campaigns.
          </p>

          {/* Filter Bar */}
          <div className="flex flex-wrap justify-center items-center gap-2 pt-4">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
                  activeCategory === cat
                    ? 'bg-[#d96b52] text-white shadow-md'
                    : 'bg-white border border-stone-200 text-stone-700 hover:bg-stone-50'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedItem(item)}
              className="bg-white rounded-3xl border border-stone-200/90 overflow-hidden cursor-pointer shadow-sm hover:shadow-xl hover:border-[#d96b52]/40 transition-all duration-300 group"
            >
              <div className="aspect-[4/3] w-full overflow-hidden bg-stone-100 relative">
                <img
                  src={item.url}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
                
                <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-white/95 text-xs font-bold text-[#1a1a1a] shadow-sm">
                  {item.category}
                </span>

                <div className="absolute top-3 right-3 p-2 rounded-full bg-white/90 text-[#1a1a1a] opacity-0 group-hover:opacity-100 transition-opacity shadow-sm">
                  <Maximize2 className="w-4 h-4" />
                </div>
              </div>

              <div className="p-5 space-y-1.5">
                <p className="text-xs text-[#d96b52] font-bold flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>{item.location}</span>
                </p>
                <h3 className="text-base font-bold text-[#1a1a1a] group-hover:text-[#d96b52] transition-colors leading-snug line-clamp-1">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {selectedItem && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm">
            <div className="relative max-w-4xl w-full rounded-3xl bg-white overflow-hidden shadow-2xl space-y-4 p-6 md:p-8">
              <button
                onClick={() => setSelectedItem(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-stone-100 text-stone-700 hover:text-black transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="rounded-2xl overflow-hidden aspect-[16/9] bg-stone-100 shadow-inner">
                <img
                  src={selectedItem.url}
                  alt={selectedItem.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 rounded-full bg-[#d96b52]/10 text-[#d96b52] text-xs font-bold">
                    {selectedItem.category}
                  </span>
                  <span className="text-xs text-stone-500 font-medium">• {selectedItem.location}</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-[#1a1a1a]">{selectedItem.title}</h3>
                <p className="text-sm text-stone-600 leading-relaxed font-medium">{selectedItem.desc}</p>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
