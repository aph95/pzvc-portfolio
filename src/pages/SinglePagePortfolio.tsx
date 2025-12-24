import { useState } from 'react';
import LetterGlitch from '../components/LetterGlitch';

const SinglePagePortfolio = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="w-full h-screen relative">
      {/* LetterGlitch Background */}
      <div className="absolute inset-0">
        <LetterGlitch
          glitchSpeed={50}
          centerVignette={true}
          outerVignette={false}
          smooth={true}
        />
      </div>

      {/* Centered Text Overlay */}
      <div className="absolute inset-0 flex flex-col items-center justify-center z-10 pointer-events-none">
        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight text-center">
          Coding the new portfolio
        </h1>
        
        {/* Liquid Glass Tag */}
        <div 
          className="mt-6 pointer-events-auto cursor-pointer"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div 
            className={`
              relative px-6 py-3 rounded-full
              backdrop-blur-md
              border border-white/20
              transition-all duration-500 ease-out
              ${isHovered 
                ? 'bg-white/20 border-white/40 shadow-[0_8px_32px_rgba(255,255,255,0.15)] scale-105' 
                : 'bg-white/10 shadow-[0_4px_16px_rgba(255,255,255,0.05)]'
              }
            `}
            style={{
              background: isHovered 
                ? 'linear-gradient(135deg, rgba(255,255,255,0.25) 0%, rgba(255,255,255,0.1) 50%, rgba(255,255,255,0.2) 100%)'
                : 'linear-gradient(135deg, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0.05) 50%, rgba(255,255,255,0.1) 100%)'
            }}
          >
            {/* Shine effect */}
            <div 
              className={`
                absolute inset-0 rounded-full overflow-hidden
                transition-opacity duration-500
                ${isHovered ? 'opacity-100' : 'opacity-0'}
              `}
            >
              <div 
                className="absolute -inset-full bg-gradient-to-r from-transparent via-white/30 to-transparent rotate-12 translate-x-[-100%] animate-[shimmer_2s_infinite]"
                style={{
                  animation: isHovered ? 'shimmer 1.5s infinite' : 'none'
                }}
              />
            </div>
            
            <span className="relative text-sm sm:text-base font-medium text-white/90 tracking-wide uppercase">
              Coming 2026
            </span>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%) rotate(12deg); }
          100% { transform: translateX(200%) rotate(12deg); }
        }
      `}</style>
    </div>
  );
};

export default SinglePagePortfolio;
