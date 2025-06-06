
import { useState } from 'react';
import FloatingPlanet from '../components/FloatingPlanet';

const About = () => {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  const experiences = [
    {
      company: "Design Studio",
      role: "Senior UX Designer",
      period: "2022 - Present",
      description: "Leading design for enterprise SaaS products, conducting user research, and building design systems that create gravitational pull for user engagement."
    },
    {
      company: "Tech Startup",
      role: "UX Designer", 
      period: "2020 - 2022",
      description: "Designed user experiences for mobile apps, collaborated with cross-functional teams, and improved user engagement by 40% through momentum-based design patterns."
    },
    {
      company: "Freelance",
      role: "UX/UI Designer",
      period: "2018 - 2020", 
      description: "Worked with various clients on web and mobile projects, from concept to launch, focusing on creating balanced design ecosystems."
    }
  ];

  const skills = [
    { category: "Design Forces", items: ["User Research", "Interaction Physics", "Design Systems", "Accessibility"] },
    { category: "Tools & Methods", items: ["Figma", "Prototyping", "User Testing", "Design Thinking"] },
    { category: "Physics Principles", items: ["Gestalt Laws", "Cognitive Load", "Information Architecture", "Behavioral Design"] }
  ];

  return (
    <div className="min-h-screen bg-white pt-24 relative overflow-hidden">
      {/* Floating Elements */}
      <FloatingPlanet size="sm" color="bg-blue-400" initialX={10} initialY={20} speed={0.5} />
      <FloatingPlanet size="md" color="bg-purple-400" initialX={90} initialY={30} speed={0.8} />
      <FloatingPlanet size="sm" color="bg-green-400" initialX={85} initialY={80} speed={0.6} />

      <div className="max-w-4xl mx-auto px-6 py-12 relative z-10">
        {/* Header */}
        <div className="fade-in mb-16">
          <h1 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">
            About my design orbit
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Like celestial bodies that shape the fabric of spacetime, I believe designers 
            have the power to bend user behavior through thoughtful, intentional experiences. 
            My approach combines the precision of physics with the artistry of human-centered design.
          </p>
        </div>

        {/* Personal Story */}
        <div className="notion-card p-8 mb-16 fade-in fade-in-delay-1 hover:shadow-lg transition-all duration-300">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">My gravitational journey</h2>
          <div className="prose prose-lg text-gray-700 leading-relaxed space-y-4">
            <p>
              My fascination with design began in physics class, watching demonstrations of 
              spacetime curvature. I realized that just as mass bends spacetime to guide 
              the motion of objects, thoughtful design can bend user behavior to create 
              meaningful interactions.
            </p>
            <p>
              This revelation led me from studying cognitive science to UX design, where I 
              discovered that the same principles governing planetary motion could be applied 
              to user journeys—creating natural attraction points, smooth orbital flows, 
              and balanced design ecosystems.
            </p>
            <p>
              When I'm not designing digital universes, you'll find me stargazing, reading 
              about quantum mechanics, or experimenting with new ways to visualize complex 
              information architectures.
            </p>
          </div>
        </div>

        {/* Experience */}
        <div className="mb-16 fade-in fade-in-delay-2">
          <h2 className="text-2xl font-semibold text-gray-900 mb-8">Professional constellation</h2>
          <div className="space-y-4">
            {experiences.map((exp, index) => (
              <div key={index} className="notion-card overflow-hidden hover:shadow-lg transition-all duration-300">
                <button
                  onClick={() => toggleSection(`exp-${index}`)}
                  className="w-full p-6 text-left hover:bg-gray-50 transition-colors duration-200"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">{exp.role}</h3>
                      <p className="text-gray-600">{exp.company} • {exp.period}</p>
                    </div>
                    <div className={`transition-transform duration-300 ${
                      expandedSection === `exp-${index}` ? 'rotate-45' : ''
                    }`}>
                      <div className="w-6 h-6 border border-gray-400 rounded flex items-center justify-center hover:border-blue-500 transition-colors">
                        <span className="text-gray-400 text-sm">+</span>
                      </div>
                    </div>
                  </div>
                </button>
                
                {expandedSection === `exp-${index}` && (
                  <div className="px-6 pb-6 text-gray-700 animate-fade-in">
                    {exp.description}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Skills */}
        <div className="fade-in fade-in-delay-3">
          <h2 className="text-2xl font-semibold text-gray-900 mb-8">Design force fields</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {skills.map((skillGroup, index) => (
              <div key={index} className="notion-card p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">{skillGroup.category}</h3>
                <ul className="space-y-2">
                  {skillGroup.items.map((skill, skillIndex) => (
                    <li key={skillIndex} className="text-gray-600 flex items-center">
                      <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-3"></span>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
