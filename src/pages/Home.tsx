
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import AnimatedLine from '../components/AnimatedLine';
import ScrollReveal from '../components/ScrollReveal';
import GuideArrow from '../components/GuideArrow';

const Home = () => {
  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 relative">
        <div className="max-w-4xl mx-auto text-center relative">
          <div className="fade-in">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-light text-gray-900 mb-6 leading-tight">
              Crafting thoughtful
              <span className="block text-blue-600 font-medium">user experiences</span>
            </h1>
          </div>
          
          <div className="fade-in fade-in-delay-1">
            <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
              I'm a UX designer passionate about creating intuitive, 
              accessible, and meaningful digital experiences.
            </p>
          </div>
          
          <div className="fade-in fade-in-delay-2 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/projects"
              className="group inline-flex items-center px-8 py-4 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
            >
              View my work
              <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            
            <Link
              to="/about"
              className="inline-flex items-center px-8 py-4 border border-gray-300 text-gray-700 rounded-lg hover:border-gray-400 hover:bg-gray-50 transition-all duration-300"
            >
              Learn more about me
            </Link>
          </div>

          {/* Guide arrow pointing to features section */}
          <div className="mt-16 flex justify-center">
            <GuideArrow delay={2000} />
          </div>
        </div>

        {/* Animated connecting line from headline to CTA buttons */}
        <AnimatedLine
          startX={50}
          startY={40}
          endX={50}
          endY={70}
          delay={1500}
          curve={true}
          className="hidden md:block"
        />
      </section>

      {/* Features Section */}
      <section className="py-20 px-6 bg-gray-50 relative">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <div className="grid md:grid-cols-3 gap-8 relative">
              <div className="notion-card p-8 hover-lift fade-in fade-in-delay-1 group relative">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                  <div className="w-6 h-6 bg-blue-600 rounded"></div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">User-Centered Design</h3>
                <p className="notion-text leading-relaxed">
                  Every design decision is grounded in user research and usability principles, 
                  ensuring solutions that truly serve people's needs.
                </p>
                
                {/* Hover-triggered connecting line to next card */}
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <AnimatedLine
                    startX={100}
                    startY={50}
                    endX={120}
                    endY={50}
                    delay={0}
                    dashed={true}
                    withArrow={true}
                    className="hidden lg:block"
                  />
                </div>
              </div>
              
              <div className="notion-card p-8 hover-lift fade-in fade-in-delay-2 group relative">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                  <div className="w-6 h-6 bg-green-600 rounded"></div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Systematic Thinking</h3>
                <p className="notion-text leading-relaxed">
                  I approach problems holistically, considering the entire user journey 
                  and creating coherent design systems that scale.
                </p>

                {/* Hover-triggered connecting line to next card */}
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <AnimatedLine
                    startX={100}
                    startY={50}
                    endX={120}
                    endY={50}
                    delay={0}
                    dashed={true}
                    withArrow={true}
                    className="hidden lg:block"
                  />
                </div>
              </div>
              
              <div className="notion-card p-8 hover-lift fade-in fade-in-delay-3 relative">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                  <div className="w-6 h-6 bg-purple-600 rounded"></div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Collaborative Process</h3>
                <p className="notion-text leading-relaxed">
                  Great design happens through collaboration. I work closely with 
                  teams to align vision and bring ideas to life.
                </p>
              </div>

              {/* Curved line connecting all three cards on scroll */}
              <AnimatedLine
                startX={16}
                startY={50}
                endX={84}
                endY={50}
                delay={1000}
                curve={true}
                dashed={true}
                withArrow={false}
                className="hidden lg:block"
              />
            </div>
          </ScrollReveal>

          {/* Guide element pointing to navigation */}
          <ScrollReveal delay={2000}>
            <div className="mt-16 text-center">
              <div className="inline-flex items-center gap-4 px-6 py-3 bg-white rounded-full shadow-sm border border-gray-100">
                <span className="text-sm text-gray-600">Explore my journey</span>
                <GuideArrow direction="right" delay={500} pulse={false} />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default Home;
