
import { useState, useEffect } from 'react';
import AboutSkeleton from '@/components/skeletons/AboutSkeleton';

const About = () => {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  const experiences = [
    {
      company: "Design Studio",
      role: "Senior UX Designer",
      period: "2022 - Present",
      description: "Leading design for enterprise SaaS products, conducting user research, and building design systems."
    },
    {
      company: "Tech Startup",
      role: "UX Designer",
      period: "2020 - 2022",
      description: "Designed user experiences for mobile apps, collaborated with cross-functional teams, and improved user engagement by 40%."
    },
    {
      company: "Freelance",
      role: "UX/UI Designer",
      period: "2018 - 2020",
      description: "Worked with various clients on web and mobile projects, from concept to launch."
    }
  ];

  const skills = [
    { category: "Design", items: ["User Research", "Prototyping", "Design Systems", "Accessibility"] },
    { category: "Tools", items: ["Figma", "Sketch", "Principle", "Adobe Creative Suite"] },
    { category: "Methods", items: ["Design Thinking", "Agile", "User Testing", "Workshop Facilitation"] }
  ];

  if (isLoading) {
    return <AboutSkeleton />;
  }

  return (
    <div className="min-h-screen bg-white pt-24">
      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Header */}
        <div className="fade-in mb-16">
          <h1 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">
            About me
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            I'm a UX designer with 5+ years of experience creating digital products 
            that balance user needs with business goals. I believe great design is invisible—it 
            just works, feels natural, and makes people's lives a little bit better.
          </p>
        </div>

        {/* Personal Story */}
        <div className="notion-card p-8 mb-16 fade-in fade-in-delay-1">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">My journey</h2>
          <div className="prose prose-lg text-gray-700 leading-relaxed">
            <p className="mb-4">
              My path to UX design started in psychology, where I developed a deep 
              fascination with human behavior and decision-making. This foundation 
              helps me understand not just what users do, but why they do it.
            </p>
            <p className="mb-4">
              Over the years, I've had the privilege of working on everything from 
              early-stage startup products to enterprise solutions used by millions. 
              Each project has taught me something new about the delicate balance 
              between user needs, technical constraints, and business objectives.
            </p>
            <p>
              When I'm not designing, you'll find me reading about cognitive science, 
              experimenting with new design tools, or exploring the outdoors with my camera.
            </p>
          </div>
        </div>

        {/* Experience */}
        <div className="mb-16 fade-in fade-in-delay-2">
          <h2 className="text-2xl font-semibold text-gray-900 mb-8">Experience</h2>
          <div className="space-y-4">
            {experiences.map((exp, index) => (
              <div key={index} className="notion-card overflow-hidden">
                <button
                  onClick={() => toggleSection(`exp-${index}`)}
                  className="w-full p-6 text-left hover:bg-gray-50 transition-colors duration-200"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">{exp.role}</h3>
                      <p className="text-gray-600">{exp.company} • {exp.period}</p>
                    </div>
                    <div className={`transition-transform duration-200 ${
                      expandedSection === `exp-${index}` ? 'rotate-45' : ''
                    }`}>
                      <div className="w-6 h-6 border border-gray-400 rounded flex items-center justify-center">
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
          <h2 className="text-2xl font-semibold text-gray-900 mb-8">Skills & Expertise</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {skills.map((skillGroup, index) => (
              <div key={index} className="notion-card p-6">
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
