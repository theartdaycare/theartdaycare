import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, Phone, Volume2, VolumeX } from 'lucide-react';
import { Logo } from './Logo';
import { NAV_ITEMS } from '../constants';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  // Music State
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  // Handle Music Toggle
  const toggleMusic = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch(error => {
          console.log("Audio playback failed:", error);
        });
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault(); 
    setMobileMenuOpen(false);

    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);

    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const handlePhoneClick = (e: React.MouseEvent) => {
    // Prevent default if necessary
  };

  return (
    <>
      {/* Background Audio Element */}
      <audio ref={audioRef} loop src="/song/background.mp3" />

      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out px-4 md:px-8 ${
          isScrolled || mobileMenuOpen
            ? 'bg-white py-3 shadow-sm border-b border-stone-100' 
            : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Adjusted Logo Size: h-16 mobile / h-20 desktop for maximum visibility */}
          <Logo className="w-auto h-16 md:h-20" />

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6">
            <div className="flex items-center gap-6 mr-4">
              {NAV_ITEMS.map((item) => (
                <a 
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="text-sm font-medium text-stone-600 hover:text-primary transition-colors cursor-pointer"
                >
                  {item.label}
                </a>
              ))}
            </div>

            {/* Music Toggle Button */}
            <button
              onClick={toggleMusic}
              className="p-2.5 rounded-full bg-stone-100 text-stone-600 hover:bg-stone-200 transition-colors"
              aria-label={isPlaying ? "음악 끄기" : "음악 켜기"}
            >
              {isPlaying ? <Volume2 size={18} /> : <VolumeX size={18} />}
            </button>

            <a 
              href="tel:03180296450"
              onClick={handlePhoneClick}
              className="flex items-center gap-2 px-5 py-2.5 bg-stone-900 text-white rounded-full text-sm font-medium hover:bg-primary transition-all duration-300 shadow-lg hover:shadow-primary/20"
            >
              <Phone size={14} />
              <span>상담 문의</span>
            </a>
          </nav>

          {/* Mobile Toggle & Music */}
          <div className="md:hidden flex items-center gap-3">
             <button
              onClick={toggleMusic}
              className="p-2 rounded-full bg-white/50 backdrop-blur-md text-stone-600 border border-stone-200"
            >
              {isPlaying ? <Volume2 size={20} /> : <VolumeX size={20} />}
            </button>

            <button 
              className="p-2 text-stone-600 hover:bg-stone-100 rounded-lg transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="메뉴 열기"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Nav Overlay */}
      <div 
        className={`fixed inset-0 z-40 bg-white md:hidden pt-24 px-6 transition-all duration-300 ease-in-out ${
          mobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
        }`}
      >
        <div className="flex flex-col gap-6 h-full">
          {NAV_ITEMS.map((item) => (
            <a 
              key={item.label}
              href={item.href}
              className="text-2xl font-bold text-stone-800 border-b border-stone-100 pb-4 cursor-pointer"
              onClick={(e) => handleNavClick(e, item.href)}
            >
              {item.label}
            </a>
          ))}
          <div className="mt-8">
            <p className="text-stone-400 text-sm mb-2">상담이 필요하신가요?</p>
            <a 
              href="tel:03180296450"
              onClick={handlePhoneClick}
              className="flex justify-center items-center gap-2 w-full py-5 bg-primary text-white rounded-xl text-lg font-bold shadow-lg shadow-primary/20 active:scale-95 transition-transform"
            >
                <Phone size={20} />
                <span>전화 상담하기</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};