import React from 'react';

// NOTE FOR USER:
// Place your actual image files in the 'public/images/' folder of your project.
// Example: public/images/photo1.jpg, public/images/photo2.jpg, etc.
const LOCAL_IMAGES = [
  "/images/photo1.jpg",
  "/images/photo2.jpg",
  "/images/photo3.jpg",
  "/images/photo4.jpg",
  "/images/photo5.jpg",
];

export const Gallery: React.FC = () => {
  return (
    <section id="facility" className="py-24 overflow-hidden bg-stone-900 text-white">
       <div className="max-w-7xl mx-auto px-6 md:px-12 mb-12 flex items-center justify-between">
          <h2 className="text-3xl md:text-4xl font-bold">행복한 순간들</h2>
          <div className="hidden md:flex gap-2">
            <span className="w-3 h-3 rounded-full bg-primary"></span>
            <span className="w-3 h-3 rounded-full bg-stone-700"></span>
            <span className="w-3 h-3 rounded-full bg-stone-700"></span>
          </div>
       </div>

       {/* Horizontal Scroll / Masonry feel */}
       <div className="flex gap-4 px-6 md:px-12 overflow-x-auto no-scrollbar pb-8 snap-x">
          {LOCAL_IMAGES.map((src, i) => (
            <div 
              key={i} 
              className={`shrink-0 rounded-2xl overflow-hidden relative group snap-center bg-stone-800 ${
                i % 2 === 0 ? 'w-[280px] h-[350px]' : 'w-[320px] h-[350px]'
              }`}
            >
              {/* Fallback styling in case image is missing */}
              <div className="w-full h-full flex items-center justify-center bg-stone-800 text-stone-600 absolute inset-0 -z-10">
                이미지 준비중
              </div>
              <img 
                src={src} 
                alt={`Activity ${i + 1}`} 
                onError={(e) => {
                  // Fallback to placeholder if local image not found
                  (e.target as HTMLImageElement).src = `https://picsum.photos/400/${i % 2 === 0 ? '500' : '400'}?random=${i}`;
                }}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
            </div>
          ))}
          
          {/* CTA Card in Gallery */}
          <div className="shrink-0 w-[280px] h-[350px] bg-stone-800 rounded-2xl flex flex-col items-center justify-center p-8 text-center border border-stone-700 snap-center">
            <h3 className="text-xl font-bold mb-2">더 많은 사진</h3>
            <p className="text-stone-400 text-sm mb-6">디아트의 일상을<br/>인스타그램에서 만나보세요</p>
            <button className="px-6 py-2 rounded-full border border-white/20 hover:bg-white hover:text-stone-900 transition-all text-sm">
              Instagram 방문
            </button>
          </div>
       </div>
    </section>
  );
};