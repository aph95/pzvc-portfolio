
import { useState } from 'react';
import { ChevronRight } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';
import AnimatedLine from '../components/AnimatedLine';
import GuideArrow from '../components/GuideArrow';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const projects = [
    {
      id: 1,
      title: "Healthcare Dashboard",
      category: "Enterprise SaaS",
      year: "2023",
      description: "A comprehensive dashboard for healthcare professionals to manage patient data and track treatment outcomes.",
      challenge: "Healthcare workers needed a unified view of patient information scattered across multiple systems.",
      solution: "Designed an intuitive dashboard that consolidates data streams and provides actionable insights through clear visualizations.",
      impact: "Reduced time spent on administrative tasks by 35% and improved data accuracy.",
      tags: ["User Research", "Data Visualization", "Healthcare", "Enterprise"],
      image: "/api/placeholder/600/400"
    },
    {
      id: 2,
      title: "Mobile Banking App",
      category: "Fintech",
      year: "2023",
      description: "A secure and user-friendly mobile banking application focused on accessibility and ease of use.",
      challenge: "Traditional banking interfaces were intimidating and complex for everyday users.",
      solution: "Created a clean, intuitive interface with progressive disclosure and clear visual hierarchy.",
      impact: "Increased user engagement by 60% and improved accessibility scores to WCAG AA standards.",
      tags: ["Mobile Design", "Accessibility", "Finance", "User Testing"],
      image: "/api/placeholder/600/400"
    },
    {
      id: 3,
      title: "Learning Platform",
      category: "Education",
      year: "2022",
      description: "An interactive e-learning platform that adapts to different learning styles and paces.",
      challenge: "Students needed personalized learning experiences that could adapt to their individual needs.",
      solution: "Developed an adaptive interface with multiple content formats and progress tracking.",
      impact: "Improved course completion rates by 45% and received 4.8/5 user satisfaction rating.",
      tags: ["EdTech", "Adaptive Design", "Progressive Web App", "Gamification"],
      image: "/api/placeholder/600/400"
    }
  ];

  return (
    <div className="min-h-screen bg-white pt-24 relative">
      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* Header */}
        <div className="fade-in mb-16 relative">
          <h1 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">
            Selected work
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed max-w-3xl">
            Here's a collection of projects that showcase my approach to solving 
            complex design challenges through user-centered thinking and systematic design.
          </p>

          {/* Guide path to projects */}
          <div className="mt-8">
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-500">Follow the journey</span>
              <GuideArrow direction="down" delay={1000} />
            </div>
          </div>

          {/* Curved guide line to first project */}
          <AnimatedLine
            startX={20}
            startY={80}
            endX={50}
            endY={100}
            delay={1500}
            curve={true}
            className="hidden md:block"
          />
        </div>

        {/* Projects Grid */}
        <div className="space-y-8 relative">
          {projects.map((project, index) => (
            <ScrollReveal 
              key={project.id}
              delay={index * 200}
              className="relative"
            >
              <div className="notion-card overflow-hidden transition-all duration-500 group">
                <div className="md:flex">
                  {/* Project Image */}
                  <div className="md:w-1/2">
                    <div className="aspect-video bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center relative">
                      <div className="text-center">
                        <div className="w-16 h-16 bg-blue-600 rounded-lg mx-auto mb-4 opacity-20"></div>
                        <p className="text-blue-600 font-medium">{project.title}</p>
                      </div>
                      
                      {/* Project connection indicator */}
                      <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="w-3 h-3 bg-blue-600 rounded-full animate-pulse"></div>
                      </div>
                    </div>
                  </div>

                  {/* Project Info */}
                  <div className="md:w-1/2 p-8 relative">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-sm text-gray-500">{project.category}</span>
                      <span className="text-gray-300">•</span>
                      <span className="text-sm text-gray-500">{project.year}</span>
                    </div>
                    
                    <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                      {project.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <button
                      onClick={() => setSelectedProject(
                        selectedProject === project.id ? null : project.id
                      )}
                      className="group inline-flex items-center text-blue-600 hover:text-blue-700 font-medium transition-colors duration-200"
                    >
                      {selectedProject === project.id ? 'Show less' : 'View details'}
                      <ChevronRight className={`ml-1 h-4 w-4 transition-transform duration-200 ${
                        selectedProject === project.id ? 'rotate-90' : 'group-hover:translate-x-1'
                      }`} />
                    </button>
                  </div>
                </div>

                {/* Expanded Details */}
                {selectedProject === project.id && (
                  <div className="border-t border-gray-100 p-8 animate-fade-in relative">
                    <div className="grid md:grid-cols-3 gap-8">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3">Challenge</h4>
                        <p className="text-gray-600 leading-relaxed">{project.challenge}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3">Solution</h4>
                        <p className="text-gray-600 leading-relaxed">{project.solution}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3">Impact</h4>
                        <p className="text-gray-600 leading-relaxed">{project.impact}</p>
                      </div>
                    </div>

                    {/* Process flow connecting lines */}
                    <div className="mt-6 relative">
                      <AnimatedLine
                        startX={16}
                        startY={90}
                        endX={84}
                        endY={90}
                        delay={500}
                        dashed={true}
                        withArrow={true}
                        className="hidden md:block"
                      />
                    </div>
                  </div>
                )}

                {/* Project-to-project connecting line */}
                {index < projects.length - 1 && (
                  <div className="absolute left-1/2 -bottom-4 transform -translate-x-1/2">
                    <div className="w-px h-8 bg-gradient-to-b from-blue-200 to-transparent"></div>
                    <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2">
                      <div className="w-2 h-2 bg-blue-400 rounded-full opacity-60"></div>
                    </div>
                  </div>
                )}
              </div>
            </ScrollReveal>
          ))}

          {/* Main project flow line */}
          <div className="absolute left-1/2 top-0 w-px h-full bg-gradient-to-b from-transparent via-blue-100 to-transparent opacity-30 transform -translate-x-1/2"></div>
        </div>

        {/* CTA Section */}
        <ScrollReveal delay={1000} className="mt-20 text-center">
          <div className="notion-card p-12 relative">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Interested in working together?
            </h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              I'm always open to discussing new opportunities and interesting projects. 
              Let's create something amazing together.
            </p>
            
            {/* Final guide element */}
            <div className="mb-6">
              <GuideArrow direction="down" delay={1500} pulse={false} />
            </div>
            
            <a
              href="mailto:hello@example.com"
              className="inline-flex items-center px-8 py-4 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
            >
              Get in touch
            </a>

            {/* Celebratory connecting element */}
            <AnimatedLine
              startX={30}
              startY={80}
              endX={70}
              endY={80}
              delay={2000}
              curve={true}
              dashed={false}
              withArrow={false}
              className="hidden md:block opacity-20"
            />
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
};

export default Projects;
