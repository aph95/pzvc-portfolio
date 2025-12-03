import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { usePageTitle } from '../hooks/usePageTitle';
import LiquidEther from '../components/LiquidEther';
import FeaturedPrototypesCarousel from '../components/FeaturedPrototypesCarousel';

const Home = () => {
  usePageTitle('Aleksandar Praizovic Hedström - UX & Frontend Designer Portfolio');

  return (
    <div className="min-h-screen bg-background relative overflow-hidden transition-colors duration-300">
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
      <section className="relative min-h-screen flex items-center justify-center px-6 z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="fade-in">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-light text-foreground mb-8 leading-tight">
              Hi, I'm <span className="text-blue-400 font-medium">Aleksandar</span> —
              <span className="block"><span className="text-indigo-400 font-medium">UX designer</span> & aspiring</span>
              <span className="block text-blue-400 font-medium">frontend developer.</span>
            </h1>
          </div>
          
          <div className="fade-in fade-in-delay-1">
            <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
              I create thoughtful digital experiences that feel natural to use — blending design, code, and AI to help users move with clarity and confidence.
            </p>
          </div>
          
          <div className="fade-in fade-in-delay-2 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/projects"
              className="group inline-flex items-center px-8 py-4 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
            >
              Explore my universe
              <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            
            <Link
              to="/about"
              className="inline-flex items-center px-8 py-4 border border-border text-foreground rounded-lg hover:border-border/80 hover:bg-accent transition-all duration-300"
            >
              Discover my story
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Prototypes Section Header */}
      <section className="relative py-12 px-6 border-y border-border/30 bg-gradient-to-r from-transparent via-muted/50 to-transparent z-10">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-light text-foreground mb-4">
            Featured prototypes
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore my latest interactive prototypes showcasing innovative design solutions.
          </p>
        </div>
      </section>

      {/* Featured Prototypes Carousel */}
      <FeaturedPrototypesCarousel />

      {/* Contact Section */}
      <section className="relative py-20 px-6 border-y border-border/30 bg-gradient-to-r from-transparent via-muted/50 to-transparent z-10">
        <div className="max-w-2xl mx-auto text-center">
          <div className="fade-in">
            <h2 className="text-3xl md:text-4xl font-light text-foreground mb-4">
              Get in touch
            </h2>
            <p className="text-muted-foreground mb-8">
              Ready to collaborate? Send me a message and let's create something extraordinary together.
            </p>
            <Link
              to="/about#contact"
              className="inline-flex items-center px-8 py-4 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
            >
              Contact me
            </Link>
          </div>
        </div>
      </section>

      {/* Design Philosophy Section */}
      <section className="relative py-20 px-6 bg-gradient-to-b from-transparent to-muted/50 z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-3xl md:text-4xl font-light text-foreground mb-4">
              Design philosophy powered by innovation
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Blending human-centered design with AI-enhanced creativity to build 
              experiences that are both beautiful and intelligently functional.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="notion-card p-8 hover-lift fade-in fade-in-delay-1 group">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <div className="w-6 h-6 bg-blue-600 rounded-full"></div>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">AI-enhanced design</h3>
              <p className="text-muted-foreground leading-relaxed">
                Leveraging artificial intelligence to amplify creativity, streamline workflows, 
                and uncover insights that lead to more intuitive user experiences.
              </p>
            </div>
            
            <div className="notion-card p-8 hover-lift fade-in fade-in-delay-2 group">
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <div className="w-6 h-6 bg-purple-600 rounded-full"></div>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">Interactive experiences</h3>
              <p className="text-muted-foreground leading-relaxed">
                Creating engaging, responsive interfaces that adapt to user behavior 
                and guide them naturally through their digital journey.
              </p>
            </div>
            
            <div className="notion-card p-8 hover-lift fade-in fade-in-delay-3 group">
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <div className="w-6 h-6 bg-green-600 rounded-full"></div>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">Concept to code</h3>
              <p className="text-muted-foreground leading-relaxed">
                Bridging the gap between design vision and technical implementation 
                through hands-on frontend development and prototyping.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
