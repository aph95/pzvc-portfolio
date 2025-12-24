import Beams from '../components/Beams';

const SinglePagePortfolio = () => {
  return (
    <div className="w-full h-screen flex flex-col">
      {/* Hero Section - 60vh */}
      <section 
        className="h-[60vh] relative flex items-center px-8 md:px-16 lg:px-24"
        style={{
          background: 'linear-gradient(135deg, #0a0a0a 0%, #0a0a0a 60%, #1a0a2e 100%)'
        }}
      >
        <div className="relative z-10">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-white tracking-tight">
            New portfolio coming 2026
          </h1>
          <p className="mt-4 text-base sm:text-lg md:text-xl text-white/50 font-light">
            Aleksandar Praizovic Hedström
          </p>
        </div>
      </section>

      {/* Beams Section - 40vh */}
      <section className="h-[40vh] relative bg-black">
        <Beams
          beamWidth={2}
          beamHeight={15}
          beamNumber={12}
          lightColor="#ffffff"
          speed={2}
          noiseIntensity={1.75}
          scale={0.2}
          rotation={0}
        />
      </section>
    </div>
  );
};

export default SinglePagePortfolio;
