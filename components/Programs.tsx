import React from 'react';
import { FEATURES } from '../constants';

export const Programs: React.FC = () => {
  return (
    <section id="program" className="py-24 px-6 md:px-12 bg-[#F9F9F7]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-xl">
             <span className="text-primary font-semibold tracking-wider uppercase text-sm">Special Curriculum</span>
             <h2 className="text-3xl md:text-5xl font-bold text-stone-900 mt-3 leading-tight">
               오감을 깨우는<br/>
               {/* Fixed font style: Removed italic/serif, added primary color for premium look */}
               <span className="text-primary font-extrabold tracking-tight">디아트</span>만의 특별 활동
             </h2>
          </div>
          <p className="text-stone-500 max-w-xs text-sm md:text-base">
            매일매일 새롭고 즐거운 경험들이 아이들을 기다리고 있습니다.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {FEATURES.map((feature, idx) => (
            <div 
              key={idx} 
              className="group bg-white rounded-3xl p-8 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-stone-100"
            >
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-colors duration-300 ${feature.color}`}>
                <feature.icon size={28} />
              </div>
              <h3 className="text-xl font-bold text-stone-900 mb-3 group-hover:text-primary transition-colors">
                {feature.title}
              </h3>
              <p className="text-stone-500 leading-relaxed text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};