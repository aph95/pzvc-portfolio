import LetterGlitch from '../components/LetterGlitch';

const SinglePagePortfolio = () => {
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
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight text-center">
          Coding the new portfolio
        </h1>
        <p className="mt-4 text-lg sm:text-xl md:text-2xl text-white/60 font-light">
          Coming 2026
        </p>
      </div>
    </div>
  );
};

export default SinglePagePortfolio;
