
import { useState } from 'react';
import { ChevronRight } from 'lucide-react';

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
    <div className="min-h-screen bg-white pt-24">
      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* Header */}
        <div className="fade-in mb-16">
          <h1 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">
            Selected work
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed max-w-3xl">
            Here's a collection of projects that showcase my approach to solving 
            complex design challenges through user-centered thinking and systematic design.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="space-y-8">
          {projects.map((project, index) => (
            <div 
              key={project.id}
              className={`notion-card overflow-hidden transition-all duration-500 fade-in fade-in-delay-${index + 1}`}
            >
              <div className="md:flex">
                {/* Project Image */}
                <div className="md:w-1/2">
                  <div className="aspect-video bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-blue-600 rounded-lg mx-auto mb-4 opacity-20"></div>
                      <p className="text-blue-600 font-medium">{project.title}</p>
                    </div>
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
                <div className="border-t border-gray-100 p-8 animate-fade-in">
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
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center fade-in fade-in-delay-3">
          <div className="notion-card p-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Interested in working together?
            </h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              I'm always open to discussing new opportunities and interesting projects. 
              Let's create something amazing together.
            </p>
            <a
              href="mailto:hello@example.com"
              className="inline-flex items-center px-8 py-4 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
            >
              Get in touch
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
