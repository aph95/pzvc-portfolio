import { useState } from 'react';
import { ChevronRight } from 'lucide-react';
import { usePageTitle } from '../hooks/usePageTitle';
import FloatingPlanet from '../components/FloatingPlanet';
import PatientZeroCaseStudy from '../components/PatientZeroCaseStudy';
import DeliverlyCaseStudy from '../components/DeliverlyCaseStudy';
import HallieCaseStudy from '../components/HallieCaseStudy';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  usePageTitle('PZVC - Projects');

  const projects = [
    {
      id: 1,
      title: "Patient Zero",
      category: "Phygital Game Design",
      year: "2025",
      description: "A conceptual prototype of a real-world, phygital (physical + digital) game designed with children's wellbeing in mind, integrating wearable technology and directional audio to create immersive, interactive storytelling.",
      challenge: "Children today face four foundational harms in the digital age according to Jonathan Haidt's framework. Traditional games often contribute to digital isolation and overprotection rather than addressing these issues.",
      solution: "Developed a phygital game experience that encourages real-world exploration, movement, and social connection through wearable proximity-triggered tech and directional audio hardware, creating a counterbalance to digital isolation.",
      impact: "Created an innovative prototype that demonstrates how technology can be used to promote physical activity and real-world social interaction rather than replace it, contributing to children's wellbeing research.",
      tags: ["Wearable Tech", "UX Design", "Visual Identity", "Phygital Design"],
      gradient: "from-red-900/20 to-pink-900/40",
      logo: "/lovable-uploads/57f6e072-fad0-424d-b433-4dbd1ded2abd.png",
      videoUrl: "https://www.youtube.com/watch?v=20dxeJcHg78",
      embedVideoUrl: "https://www.youtube.com/embed/20dxeJcHg78"
    },
    {
      id: 2,
      title: "Deliverly",
      category: "Mobile App Design",
      year: "2025",
      description: "A mobile app concept built by a delivery driver — for delivery drivers. Designed to simplify and enhance the day-to-day experience of delivery drivers through real-world informed UX decisions.",
      challenge: "Outdated apps made for frustrating workflows — clunky navigation, poor single-handed usability, and unnecessary steps that slowed drivers down during critical delivery moments.",
      solution: "Developed a driver-first approach prioritizing clean focused UI, one-handed interaction patterns, intuitive delivery flows, and streamlined navigation designed for speed and safety.",
      impact: "Created an empathy-driven design based on real driver needs, demonstrating how user research from personal experience can lead to more effective and human-centered solutions.",
      tags: ["Mobile Design", "UX Research", "User-Centered Design", "Driver Experience"],
      gradient: "from-red-900/20 to-orange-900/40",
      logo: "/lovable-uploads/85e937a9-af1f-4909-9f3c-5fffdad97a2a.png",
      fullCoverImage: true,
      prototypeUrl: "https://www.figma.com/proto/R3S5emLjv1eL84nVBFdszs/Deliverly?node-id=48-1133&t=X23M6OvpfhyIXPxK-1"
    },
    {
      id: 3,
      title: "Hallie",
      category: "AI Companion Design",
      year: "2025",
      description: "An AI-powered study companion for students aged 16–25. Hallie acts as a gentle digital companion that provides non-intrusive, emotionally intelligent support during solo study sessions.",
      challenge: "Students struggle with maintaining focus during independent study, often falling into cycles of digital distraction without supportive accountability systems that feel encouraging rather than judgmental.",
      solution: "Designed an AI companion that passively monitors study context and provides gentle, context-aware nudges, encouragement, and reflection prompts to help students stay present and motivated.",
      impact: "Created a human-centered AI design that demonstrates how technology can support student wellbeing and academic success through empathy rather than strict productivity metrics.",
      tags: ["AI Design", "Student Experience", "Digital Wellbeing", "UX Research"],
      gradient: "from-blue-900/20 to-indigo-900/40",
      logo: "/lovable-uploads/3037bcf4-215e-4a32-9131-2c8d7962d443.png",
      fullCoverImage: true,
      prototypeUrl: "https://xd.adobe.com/view/2e78f163-164a-4b70-b7c9-cfb3f7e21205-7b2b/"
    }
  ];

  return (
    <div className="min-h-screen bg-background pt-24 relative overflow-hidden">
      {/* Floating Elements */}
      <FloatingPlanet size="md" color="bg-blue-500" initialX={15} initialY={25} speed={0.7} />
      <FloatingPlanet size="sm" color="bg-purple-500" initialX={85} initialY={15} speed={1.1} />
      <FloatingPlanet size="lg" color="bg-green-500" initialX={75} initialY={75} speed={0.5} />
      <FloatingPlanet size="sm" color="bg-indigo-500" initialX={20} initialY={85} speed={0.9} />

      <div className="max-w-6xl mx-auto px-6 py-12 relative z-10">
        {/* Header */}
        <div className="fade-in mb-16">
          <h1 className="text-4xl md:text-5xl font-light text-foreground mb-6">
            Project constellation
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl">
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
              data-project-id={project.id}
              className={`notion-card overflow-hidden transition-all duration-500 fade-in fade-in-delay-${index + 1} ${
                hoveredProject === project.id ? 'shadow-xl -translate-y-2' : 'hover:shadow-lg hover:-translate-y-1'
              }`}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className="md:flex">
                {/* Project Visual */}
                <div className="md:w-1/2">
                  {project.embedVideoUrl ? (
                    <div className="aspect-video relative overflow-hidden">
                      <iframe
                        src={project.embedVideoUrl}
                        title={`${project.title} demo video`}
                        className="w-full h-full"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                      />
                    </div>
                  ) : project.fullCoverImage ? (
                    <div className="aspect-video relative overflow-hidden bg-gray-50 dark:bg-gray-100">
                      <img 
                        src="/lovable-uploads/d06c33c5-34d9-488d-903a-841b1c3dc27c.png" 
                        alt={`${project.title} illustration`} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ) : (
                    <div className={`aspect-video bg-gradient-to-br ${project.gradient} flex items-center justify-center relative overflow-hidden`}>
                      <div className="text-center z-10">
                        {project.logo ? (
                          <img 
                            src={project.logo} 
                            alt={`${project.title} logo`} 
                            className={`h-16 mx-auto mb-4 transition-transform duration-300 ${
                              hoveredProject === project.id ? 'scale-110 rotate-3' : ''
                            }`}
                          />
                        ) : (
                          <div className={`w-16 h-16 bg-current rounded-lg mx-auto mb-4 opacity-20 transition-transform duration-300 ${
                            hoveredProject === project.id ? 'scale-110 rotate-12' : ''
                          }`}></div>
                        )}
                        <p className="text-foreground font-medium">{project.title}</p>
                      </div>
                      {/* Subtle floating elements */}
                      <div className={`absolute top-4 right-4 w-3 h-3 bg-foreground/40 rounded-full opacity-40 transition-transform duration-1000 ${
                        hoveredProject === project.id ? 'translate-x-2 translate-y-1' : ''
                      }`}></div>
                      <div className={`absolute bottom-6 left-6 w-2 h-2 bg-foreground/40 rounded-full opacity-30 transition-transform duration-1000 ${
                        hoveredProject === project.id ? '-translate-x-1 -translate-y-1' : ''
                      }`}></div>
                    </div>
                  )}
                </div>

                {/* Project Info */}
                <div className="md:w-1/2 p-8">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-sm text-muted-foreground">{project.category}</span>
                    <span className="text-muted-foreground/50">•</span>
                    <span className="text-sm text-muted-foreground">{project.year}</span>
                  </div>
                  
                  <h3 className="text-2xl font-semibold text-foreground mb-4">
                    {project.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className={`px-3 py-1 bg-accent text-accent-foreground text-sm rounded-full transition-all duration-200 ${
                          hoveredProject === project.id ? 'bg-accent/80 shadow-sm' : ''
                        }`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-4">
                    <button
                      onClick={() => {
                        const newProject = selectedProject === project.id ? null : project.id;
                        setSelectedProject(newProject);
                        
                        // Scroll to top of case study when opening
                        if (newProject !== null) {
                          setTimeout(() => {
                            const element = document.querySelector(`[data-project-id="${project.id}"]`);
                            if (element) {
                              element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                            }
                          }, 100);
                        }
                      }}
                      className="group inline-flex items-center text-blue-400 hover:text-blue-300 font-medium transition-colors duration-200"
                    >
                      {selectedProject === project.id ? 'Collapse details' : 'Explore gravitational field'}
                      <ChevronRight className={`ml-1 h-4 w-4 transition-transform duration-200 ${
                        selectedProject === project.id ? 'rotate-90' : 'group-hover:translate-x-1'
                      }`} />
                    </button>
                    
                    {project.videoUrl && (
                      <a
                        href={project.videoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-muted-foreground hover:text-foreground font-medium transition-colors duration-200"
                      >
                        Watch demo
                      </a>
                    )}
                    
                    {project.prototypeUrl && (
                      <a
                        href={project.prototypeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-muted-foreground hover:text-foreground font-medium transition-colors duration-200"
                      >
                        Test prototype
                      </a>
                    )}
                  </div>
                </div>
              </div>

              {/* Expanded Details */}
              {selectedProject === project.id && (
                <div className="border-t border-border p-8 animate-fade-in bg-accent/50">
                  {project.id === 1 ? (
                    <PatientZeroCaseStudy onCollapse={() => setSelectedProject(null)} />
                  ) : project.id === 2 ? (
                    <DeliverlyCaseStudy onCollapse={() => setSelectedProject(null)} />
                  ) : project.id === 3 ? (
                    <HallieCaseStudy onCollapse={() => setSelectedProject(null)} />
                  ) : (
                    <div className="grid md:grid-cols-3 gap-8">
                      <div>
                        <h4 className="font-semibold text-foreground mb-3">Gravitational Challenge</h4>
                        <p className="text-muted-foreground leading-relaxed">{project.challenge}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-3">Design Solution</h4>
                        <p className="text-muted-foreground leading-relaxed">{project.solution}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-3">Orbital Impact</h4>
                        <p className="text-muted-foreground leading-relaxed">{project.impact}</p>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center fade-in fade-in-delay-3">
          <div className="notion-card p-12 hover:shadow-lg transition-all duration-300">
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              Looking for fresh design energy? Let’s connect.
            </h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's collaborate to build experiences that naturally guide users toward 
              meaningful interactions through the gravitational pull of thoughtful design.
            </p>
            <a
              href="mailto:aleksandar.praizovic.hedstrom@gmail.com"
              className="inline-flex items-center px-8 py-4 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
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
