import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Logo } from './Logo';

export const Hero: React.FC = () => {
  // Navigation helper for Hero buttons
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <section className="relative w-full min-h-[90vh] pt-24 pb-12 md:pt-32 flex flex-col md:flex-row items-center justify-center overflow-hidden bg-[#F9F9F7]">
      
      {/* Background Decor */}
      <div className="absolute top-[-20%] right-[-10%] w-[700px] h-[700px] bg-gradient-to-br from-orange-50 to-primary/5 rounded-full blur-3xl pointer-events-none -z-0"></div>
      <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-gradient-to-tr from-blue-50/50 to-green-50/50 rounded-full blur-3xl pointer-events-none -z-0"></div>

      <div className="max-w-7xl mx-auto w-full px-6 md:px-12 flex flex-col md:flex-row items-center relative z-10">
        
        {/* Text Content */}
        <div className="w-full md:w-1/2 flex flex-col items-start space-y-8 animate-fade-in-up order-2 md:order-1 mt-12 md:mt-0">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-stone-200 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
            <span className="text-xs font-semibold text-stone-600 tracking-wide uppercase">Premium Daycare</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-stone-900 leading-[1.15] tracking-tight">
            아이들의 <br />
            <span className="relative inline-block text-primary z-10">
              상상력
              <span className="absolute bottom-2 left-0 w-full h-4 bg-orange-200/40 -z-10 rounded-full transform -rotate-1"></span>
            </span>이 <br />
            자라나는 곳
          </h1>
          
          <p className="text-lg text-stone-500 max-w-md leading-relaxed">
            디아트 어린이집은 아이들의 고유한 색깔을 찾아주고, 
            스스로 생각하는 힘을 기르는 창의 융합 교육 공간입니다.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <a 
              href="#contact"
              onClick={(e) => handleScroll(e, 'contact')}
              className="group px-8 py-4 bg-stone-900 text-white rounded-2xl font-semibold flex items-center justify-center gap-2 hover:bg-primary transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-1"
            >
              <span>입학 상담 신청</span>
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="#program"
              onClick={(e) => handleScroll(e, 'program')}
              className="px-8 py-4 bg-white text-stone-700 border border-stone-200 rounded-2xl font-semibold flex items-center justify-center hover:bg-stone-50 transition-all duration-300 shadow-sm"
            >
              프로그램 보기
            </a>
          </div>
        </div>

        {/* Large Logo Display - Increased Size & Premium Effects */}
        <div className="w-full md:w-1/2 flex items-center justify-center order-1 md:order-2">
          {/* Container */}
          <div className="relative w-[360px] h-[360px] md:w-[600px] md:h-[600px] flex items-center justify-center">
            
            {/* Premium Glow Background */}
            <div className="absolute inset-0 bg-gradient-to-tr from-orange-100/60 via-white/40 to-transparent rounded-full blur-3xl transform scale-90"></div>
            
            {/* Spinning Rings */}
            <div className="absolute inset-0 rounded-full border-[1px] border-stone-400/20 scale-100 animate-[spin_30s_linear_infinite]"></div>
            <div className="absolute inset-0 rounded-full border-[1px] border-primary/10 scale-[0.85] animate-[spin_25s_linear_infinite_reverse]"></div>
            
            {/* Logo Image Container */}
            <div className="relative z-10 w-full h-full flex items-center justify-center animate-[float_6s_ease-in-out_infinite]">
               {/* 
                  IMPORTANT CHANGE: 
                  Removed padding (p-0) and added scale-125 md:scale-150.
                  This forces the logo to be 150% of the container size, canceling out whitespace in the PNG.
               */}
               <div className="w-full h-full transform scale-150 md:scale-150 origin-center flex items-center justify-center">
                   <Logo className="w-full h-full drop-shadow-[0_20px_40px_rgba(139,94,60,0.3)]" />
               </div>
            </div>

            {/* Floating particles/decor */}
            <div className="absolute top-12 right-12 w-3 h-3 bg-orange-400/40 rounded-full animate-bounce delay-700 blur-[1px]"></div>
            <div className="absolute bottom-24 left-12 w-4 h-4 bg-green-400/30 rounded-full animate-bounce delay-1000 blur-[1px]"></div>
            <div className="absolute top-1/2 -right-4 w-2 h-2 bg-blue-400/40 rounded-full animate-bounce delay-300 blur-[1px]"></div>

          </div>
        </div>

      </div>
    </section>
  );
};