
import { useState } from 'react';
import { ChevronRight } from 'lucide-react';
import FloatingPlanet from '../components/FloatingPlanet';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const projects = [
    {
      id: 1,
      title: "Healthcare Dashboard",
      category: "Enterprise SaaS",
      year: "2023",
      description: "A comprehensive dashboard that creates gravitational pull around critical patient data, guiding healthcare professionals through complex workflows.",
      challenge: "Healthcare workers needed a unified view of patient information scattered across multiple systems, like planets in different solar systems.",
      solution: "Designed an intuitive dashboard that consolidates data streams into orbital patterns, creating natural information hierarchies and actionable insights through clear gravitational design principles.",
      impact: "Reduced cognitive load by 35% and improved data accuracy by creating momentum-based workflows that feel natural and intuitive.",
      tags: ["User Research", "Data Visualization", "Healthcare", "Enterprise"],
      gradient: "from-blue-50 to-indigo-100"
    },
    {
      id: 2,
      title: "Mobile Banking App",
      category: "Fintech",
      year: "2023", 
      description: "A secure banking app that uses gravitational UX principles to create trust and guide users through complex financial tasks.",
      challenge: "Traditional banking interfaces created friction and anxiety, repelling users instead of attracting them to engage with their finances.",
      solution: "Developed a clean interface with natural attraction points and progressive disclosure, using momentum-based interactions to build confidence and reduce financial anxiety.",
      impact: "Increased user engagement by 60% and improved accessibility scores to WCAG AA standards through balanced design that feels both secure and approachable.",
      tags: ["Mobile Design", "Accessibility", "Finance", "User Testing"],
      gradient: "from-purple-50 to-pink-100"
    },
    {
      id: 3,
      title: "Learning Platform", 
      category: "Education",
      year: "2022",
      description: "An adaptive e-learning platform that creates orbital learning paths, naturally guiding students through personalized educational journeys.",
      challenge: "Students needed personalized learning experiences that could adapt to their individual pace and learning style, like customized gravitational fields.",
      solution: "Developed an adaptive interface with multiple content formats and progress tracking that creates momentum through achievement, using orbital design patterns for different learning modules.",
      impact: "Improved course completion rates by 45% and received 4.8/5 user satisfaction rating by creating learning ecosystems that feel naturally progressive.",
      tags: ["EdTech", "Adaptive Design", "Progressive Web App", "Gamification"],
      gradient: "from-green-50 to-emerald-100"
    }
  ];

  return (
    <div className="min-h-screen bg-white pt-24 relative overflow-hidden">
      {/* Floating Elements */}
      <FloatingPlanet size="md" color="bg-blue-500" initialX={15} initialY={25} speed={0.7} />
      <FloatingPlanet size="sm" color="bg-purple-500" initialX={85} initialY={15} speed={1.1} />
      <FloatingPlanet size="lg" color="bg-green-500" initialX={75} initialY={75} speed={0.5} />
      <FloatingPlanet size="sm" color="bg-indigo-500" initialX={20} initialY={85} speed={0.9} />

      <div className="max-w-6xl mx-auto px-6 py-12 relative z-10">
        {/* Header */}
        <div className="fade-in mb-16">
          <h1 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">
            Project constellation
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed max-w-3xl">
            Each project represents a unique gravitational field where user needs, 
            business goals, and design principles converge to create meaningful experiences 
            that naturally guide behavior.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="space-y-8">
          {projects.map((project, index) => (
            <div 
              key={project.id}
              className={`notion-card overflow-hidden transition-all duration-500 fade-in fade-in-delay-${index + 1} ${
                hoveredProject === project.id ? 'shadow-xl -translate-y-2' : 'hover:shadow-lg hover:-translate-y-1'
              }`}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className="md:flex">
                {/* Project Visual */}
                <div className="md:w-1/2">
                  <div className={`aspect-video bg-gradient-to-br ${project.gradient} flex items-center justify-center relative overflow-hidden`}>
                    <div className="text-center z-10">
                      <div className={`w-16 h-16 bg-current rounded-lg mx-auto mb-4 opacity-20 transition-transform duration-300 ${
                        hoveredProject === project.id ? 'scale-110 rotate-12' : ''
                      }`}></div>
                      <p className="text-gray-700 font-medium">{project.title}</p>
                    </div>
                    {/* Subtle floating elements */}
                    <div className={`absolute top-4 right-4 w-3 h-3 bg-white rounded-full opacity-40 transition-transform duration-1000 ${
                      hoveredProject === project.id ? 'translate-x-2 translate-y-1' : ''
                    }`}></div>
                    <div className={`absolute bottom-6 left-6 w-2 h-2 bg-white rounded-full opacity-30 transition-transform duration-1000 ${
                      hoveredProject === project.id ? '-translate-x-1 -translate-y-1' : ''
                    }`}></div>
                  </div>
                </div>

                {/* Project Info */}
                <div className="md:w-1/2 p-8">
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
                        className={`px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full transition-all duration-200 ${
                          hoveredProject === project.id ? 'bg-gray-200 shadow-sm' : ''
                        }`}
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
                    {selectedProject === project.id ? 'Collapse details' : 'Explore gravitational field'}
                    <ChevronRight className={`ml-1 h-4 w-4 transition-transform duration-200 ${
                      selectedProject === project.id ? 'rotate-90' : 'group-hover:translate-x-1'
                    }`} />
                  </button>
                </div>
              </div>

              {/* Expanded Details */}
              {selectedProject === project.id && (
                <div className="border-t border-gray-100 p-8 animate-fade-in bg-gray-50/50">
                  <div className="grid md:grid-cols-3 gap-8">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Gravitational Challenge</h4>
                      <p className="text-gray-600 leading-relaxed">{project.challenge}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Design Solution</h4>
                      <p className="text-gray-600 leading-relaxed">{project.solution}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Orbital Impact</h4>
                      <p className="text-gray-600 leading-relaxed">{project.impact}</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center fade-in fade-in-delay-3">
          <div className="notion-card p-12 hover:shadow-lg transition-all duration-300">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Ready to create your own design universe?
            </h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Let's collaborate to build experiences that naturally guide users toward 
              meaningful interactions through the gravitational pull of thoughtful design.
            </p>
            <a
              href="mailto:hello@example.com"
              className="inline-flex items-center px-8 py-4 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
            >
              Enter my orbit
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
