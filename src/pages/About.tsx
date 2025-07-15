
import { useState } from 'react';
import { usePageTitle } from '../hooks/usePageTitle';
import FloatingPlanet from '../components/FloatingPlanet';

const About = () => {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);
  usePageTitle('PZVC - About');

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  const experiences = [
    {
      company: "Kristianstad University",
      role: "Bachelor of Science in Informatics - Digital Design",
      period: "2023 - 2026",
      description: "Specializing in digital design with a focus on user experience, interaction design, and frontend development. Exploring the intersection of technology, creativity, and human-centered design principles."
    },
    {
      company: "Freelance",
      role: "Graphic Designer", 
      period: "2018 - 2023",
      description: "Provided creative design solutions for various clients as a side hustle, developing skills in visual communication, branding, and client collaboration that now inform my UX approach."
    },
    {
      company: "Self-Directed Learning",
      role: "AI & Design Integration",
      period: "2022 - Present", 
      description: "Continuously exploring how artificial intelligence can enhance the design process, from concept development to user testing, creating more efficient and innovative workflows."
    }
  ];

  const skills = [
    { category: "Design & UX", items: ["User Experience Design", "Interaction Design", "Concept Development", "Design Systems"] },
    { category: "Development", items: ["Frontend Development", "Responsive Design", "Prototyping"] },
    { category: "AI & Innovation", items: ["AI-Enhanced Design", "Creative Automation", "Emerging Technologies", "Design Research"] }
  ];

  return (
    <div className="min-h-screen bg-background pt-24 relative overflow-hidden transition-colors duration-300">
      {/* Floating Elements */}
      <FloatingPlanet size="sm" color="bg-blue-400" initialX={10} initialY={20} speed={0.5} />
      <FloatingPlanet size="md" color="bg-purple-400" initialX={90} initialY={30} speed={0.8} />
      <FloatingPlanet size="sm" color="bg-green-400" initialX={85} initialY={80} speed={0.6} />

      <div className="max-w-4xl mx-auto px-6 py-12 relative z-10">
        {/* Header */}
        <div className="fade-in mb-16">
          <h1 className="text-4xl md:text-5xl font-light text-foreground mb-6">
            About my creative journey
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            I'm Aleksandar Praizovic Hedström, a 29-year-old designer and developer passionate 
            about creating digital experiences that seamlessly blend human intuition with 
            technological innovation. Currently pursuing my Bachelor's in Informatics with 
            a specialization in Digital Design at Kristianstad University.
          </p>
        </div>

        {/* Personal Story */}
        <div className="notion-card p-8 mb-16 fade-in fade-in-delay-1 hover:shadow-lg transition-all duration-300">
          <h2 className="text-2xl font-semibold text-foreground mb-6">My design philosophy</h2>
          <div className="prose prose-lg text-muted-foreground leading-relaxed space-y-4">
            <p>
              My journey into design began with freelance graphic design work—initially as a 
              creative side hustle that sparked my passion for visual communication. This 
              foundation in design thinking naturally evolved into a deeper fascination with 
              how users interact with digital interfaces.
            </p>
            <p>
              Today, I'm focused on frontend development, UX design, and interaction design, 
              with a particular interest in how artificial intelligence can enhance the creative 
              process. I believe AI isn't here to replace designers, but to amplify our capabilities—
              helping us iterate faster, explore more possibilities, and create more personalized experiences.
            </p>
            <p>
              When I'm not crafting digital experiences, you'll find me exploring the latest 
              design tools, experimenting with AI-powered workflows, or diving deep into 
              emerging technologies that could shape the future of human-computer interaction.
            </p>
          </div>
        </div>

        {/* Experience */}
        <div className="mb-16 fade-in fade-in-delay-2">
          <h2 className="text-2xl font-semibold text-foreground mb-8">Education & experience</h2>
          <div className="space-y-4">
            {experiences.map((exp, index) => (
              <div key={index} className="notion-card overflow-hidden hover:shadow-lg transition-all duration-300">
                <button
                  onClick={() => toggleSection(`exp-${index}`)}
                  className="w-full p-6 text-left hover:bg-accent transition-colors duration-200"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-lg font-semibold text-foreground">{exp.role}</h3>
                      <p className="text-muted-foreground">{exp.company} • {exp.period}</p>
                    </div>
                    <div className={`transition-transform duration-300 ${
                      expandedSection === `exp-${index}` ? 'rotate-45' : ''
                    }`}>
                      <div className="w-6 h-6 border border-border rounded flex items-center justify-center hover:border-blue-400 transition-colors">
                        <span className="text-muted-foreground text-sm">+</span>
                      </div>
                    </div>
                  </div>
                </button>
                
                {expandedSection === `exp-${index}` && (
                  <div className="px-6 pb-6 text-muted-foreground animate-fade-in">
                    {exp.description}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Skills */}
        <div className="fade-in fade-in-delay-3">
          <h2 className="text-2xl font-semibold text-foreground mb-8">Core competencies</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {skills.map((skillGroup, index) => (
              <div key={index} className="notion-card p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <h3 className="text-lg font-semibold text-foreground mb-4">{skillGroup.category}</h3>
                <ul className="space-y-2">
                  {skillGroup.items.map((skill, skillIndex) => (
                    <li key={skillIndex} className="text-muted-foreground flex items-center">
                      <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-3"></span>
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
