import React from 'react';
import { FEATURES, CLASSES } from '../constants';
import { Star, ShieldCheck, HeartHandshake, ChefHat } from 'lucide-react';

export const Features: React.FC = () => {
  return (
    <section id="philosophy" className="py-24 px-6 md:px-12 bg-white rounded-t-[3rem] md:rounded-t-[5rem] shadow-[0_-20px_40px_-15px_rgba(0,0,0,0.05)] -mt-12 relative z-20">
      <div className="max-w-7xl mx-auto">
        
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-6">
            왜 <span className="text-primary">디아트</span>인가요?
          </h2>
          <p className="text-stone-500 max-w-2xl mx-auto text-lg leading-relaxed">
            단순한 보육을 넘어, 아이들의 감각을 깨우고<br className="hidden md:block"/> 
            잠재력을 발견하는 프리미엄 교육 환경을 제공합니다.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24">
          
          {/* Large Card 1 */}
          <div className="md:col-span-2 bg-[#F5F5F0] rounded-3xl p-8 md:p-12 relative overflow-hidden group">
            <div className="relative z-10">
              <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-sm text-primary">
                <Star size={24} fill="currentColor" />
              </div>
              <h3 className="text-2xl font-bold text-stone-900 mb-4">아이 중심의 존중 교육</h3>
              <p className="text-stone-600 leading-relaxed max-w-md">
                모든 아이는 저마다의 속도와 색깔을 가지고 있습니다. 
                디아트는 획일적인 교육에서 벗어나 아이 한 명 한 명의 개성을 존중하며, 
                스스로 탐색하고 배울 수 있는 환경을 만듭니다.
              </p>
            </div>
            <div className="absolute right-[-20px] bottom-[-20px] opacity-10 group-hover:opacity-20 transition-opacity duration-500">
               <Star size={200} />
            </div>
          </div>

          {/* Tall Card */}
          <div className="bg-primary text-white rounded-3xl p-8 md:p-12 md:row-span-2 flex flex-col justify-between relative overflow-hidden group">
            <div>
              <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center mb-6 backdrop-blur-sm">
                <ShieldCheck size={24} />
              </div>
              <h3 className="text-2xl font-bold mb-4">안전하고<br/>건강한 환경</h3>
              <p className="text-white/80 leading-relaxed mb-6">
                친환경 자재를 사용한 인테리어와 매일 진행되는 전문 방역 소독.
                미세먼지 관리 시스템으로 아이들의 건강을 최우선으로 생각합니다.
              </p>
            </div>
            <div className="space-y-4">
               <div className="flex items-center gap-3 bg-white/10 p-3 rounded-xl backdrop-blur-sm">
                 <ChefHat size={20} className="text-orange-200"/>
                 <span className="text-sm font-medium">유기농 식단 제공</span>
               </div>
               <div className="flex items-center gap-3 bg-white/10 p-3 rounded-xl backdrop-blur-sm">
                 <ShieldCheck size={20} className="text-green-200"/>
                 <span className="text-sm font-medium">CCTV 24시간 가동</span>
               </div>
            </div>
          </div>

          {/* Small Card 2 */}
          <div className="bg-stone-50 border border-stone-100 rounded-3xl p-8 hover:shadow-lg transition-shadow duration-300">
             <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mb-4">
                <HeartHandshake size={24} />
             </div>
             <h3 className="text-xl font-bold text-stone-900 mb-2">열린 소통</h3>
             <p className="text-stone-500 text-sm">
               키즈노트와 정기 상담을 통해 가정과 원이 하나되어 아이를 키웁니다.
             </p>
          </div>

          {/* Small Card 3 */}
          <div className="bg-orange-50/50 border border-orange-100 rounded-3xl p-8 hover:shadow-lg transition-shadow duration-300">
             <div className="w-12 h-12 bg-orange-100 text-orange-600 rounded-2xl flex items-center justify-center mb-4">
                <ChefHat size={24} />
             </div>
             <h3 className="text-xl font-bold text-stone-900 mb-2">바른 먹거리</h3>
             <p className="text-stone-500 text-sm">
               풀무원 푸드머스와 연계하여 매일 신선한 식재료로 조리합니다.
             </p>
          </div>

        </div>

        {/* Classes Info */}
        <div className="border-t border-stone-100 pt-24">
           <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {CLASSES.map((cls, idx) => (
                <div key={idx} className="text-center p-6 rounded-2xl bg-stone-50 hover:bg-white hover:shadow-xl transition-all duration-300 group">
                  <div className="text-primary font-bold mb-2 group-hover:scale-110 transition-transform duration-300">{cls.name}</div>
                  <div className="text-xs font-semibold text-stone-400 uppercase tracking-wider mb-3">{cls.age}</div>
                  <p className="text-sm text-stone-600 word-keep">{cls.desc}</p>
                </div>
              ))}
           </div>
        </div>

      </div>
    </section>
  );
};