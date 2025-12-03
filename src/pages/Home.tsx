import { Link } from 'react-router-dom';
import { usePageTitle } from '../hooks/usePageTitle';
import LiquidEther from '../components/LiquidEther';
import BlurText from '../components/BlurText';

const Home = () => {
  usePageTitle('Aleksandar Praizovic Hedström - UX & Frontend Designer Portfolio');

  return (
    <div className="h-screen bg-background relative overflow-hidden transition-colors duration-300">
      {/* LiquidEther Background - Full viewport hero */}
      <div className="absolute inset-0 h-screen">
        <LiquidEther
          colors={['#5227FF', '#FF9FFC', '#B19EEF']}
          mouseForce={20}
          cursorSize={100}
          isViscous={false}
          viscous={30}
          iterationsViscous={32}
          iterationsPoisson={32}
          resolution={0.5}
          isBounce={false}
          autoDemo={true}
          autoSpeed={0.5}
          autoIntensity={2.2}
          takeoverDuration={0.25}
          autoResumeDelay={3000}
          autoRampDuration={0.6}
        />
      </div>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center px-6 z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-12">
            <BlurText
              text="User experience and web development"
              delay={100}
              animateBy="words"
              direction="top"
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight"
            />
          </div>
          
          <div className="fade-in fade-in-delay-2 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/projects"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-black font-medium rounded-full hover:bg-white/90 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
            >
              My projects
            </Link>
            
            <Link
              to="/about"
              className="inline-flex items-center justify-center px-8 py-4 bg-transparent border border-white/30 text-white font-medium rounded-full hover:bg-white/10 transition-all duration-300 hover:-translate-y-0.5"
            >
              About me
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
