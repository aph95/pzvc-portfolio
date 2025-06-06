
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { useMousePosition } from '../hooks/useMousePosition';
import SpacetimeGrid from '../components/SpacetimeGrid';
import FloatingPlanet from '../components/FloatingPlanet';

const Home = () => {
  const mousePosition = useMousePosition();

  return (
    <div className="min-h-screen bg-background relative overflow-hidden transition-colors duration-300">
      {/* Spacetime Grid Background */}
      <div className="absolute inset-0">
        <SpacetimeGrid mousePosition={mousePosition} />
      </div>

      {/* Floating Planets */}
      <FloatingPlanet size="lg" color="bg-blue-500" initialX={20} initialY={30} speed={0.8} />
      <FloatingPlanet size="md" color="bg-purple-500" initialX={80} initialY={20} speed={1.2} />
      <FloatingPlanet size="sm" color="bg-green-500" initialX={70} initialY={70} speed={0.6} />
      <FloatingPlanet size="md" color="bg-indigo-500" initialX={15} initialY={80} speed={1.0} />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="fade-in">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-light text-foreground mb-8 leading-tight">
              Just as planets
              <span className="block text-blue-400 font-medium">curve spacetime,</span>
              <span className="block">great designs curve</span>
              <span className="block text-indigo-400 font-medium">user behavior</span>
            </h1>
          </div>
          
          <div className="fade-in fade-in-delay-1">
            <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
              I'm a UX designer who believes in the gravitational pull of thoughtful design—
              creating experiences that naturally guide users toward meaningful interactions.
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
              Discover my orbit
            </Link>
          </div>
        </div>
      </section>

      {/* Physics Principles Section */}
      <section className="relative py-20 px-6 bg-gradient-to-b from-transparent to-muted/50 z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-3xl md:text-4xl font-light text-foreground mb-4">
              Design principles inspired by physics
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Every interaction has an equal and opposite reaction. Every design decision 
              creates ripples through the user experience.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="notion-card p-8 hover-lift fade-in fade-in-delay-1 group">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <div className="w-6 h-6 bg-blue-600 rounded-full"></div>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">Gravitational UX</h3>
              <p className="text-muted-foreground leading-relaxed">
                Like gravity pulls objects together, great design creates natural attraction 
                points that guide users effortlessly through their journey.
              </p>
            </div>
            
            <div className="notion-card p-8 hover-lift fade-in fade-in-delay-2 group">
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <div className="w-6 h-6 bg-purple-600 rounded-full"></div>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">Momentum & Flow</h3>
              <p className="text-muted-foreground leading-relaxed">
                Understanding user momentum helps create seamless transitions and 
                maintain engagement throughout the experience.
              </p>
            </div>
            
            <div className="notion-card p-8 hover-lift fade-in fade-in-delay-3 group">
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <div className="w-6 h-6 bg-green-600 rounded-full"></div>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">Equilibrium Design</h3>
              <p className="text-muted-foreground leading-relaxed">
                Balancing form and function, aesthetics and usability, to create 
                harmonious experiences that feel both beautiful and intuitive.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
