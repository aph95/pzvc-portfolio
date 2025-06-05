
import { useState } from 'react';
import ScrollReveal from '../components/ScrollReveal';
import AnimatedLine from '../components/AnimatedLine';
import GuideArrow from '../components/GuideArrow';

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

  return (
    <div className="min-h-screen bg-white pt-24 relative">
      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Header */}
        <div className="fade-in mb-16 relative">
          <h1 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">
            About me
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            I'm a UX designer with 5+ years of experience creating digital products 
            that balance user needs with business goals. I believe great design is invisible—it 
            just works, feels natural, and makes people's lives a little bit better.
          </p>

          {/* Guide arrow pointing to personal story */}
          <div className="mt-8 flex justify-center">
            <GuideArrow delay={1000} />
          </div>
        </div>

        {/* Personal Story */}
        <ScrollReveal className="mb-16">
          <div className="notion-card p-8 relative">
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

            {/* Connecting line to experience section */}
            <AnimatedLine
              startX={50}
              startY={100}
              endX={50}
              endY={120}
              delay={1500}
              curve={true}
              className="hidden md:block"
            />
          </div>
        </ScrollReveal>

        {/* Experience */}
        <ScrollReveal delay={300} className="mb-16">
          <div className="relative">
            <div className="flex items-center gap-4 mb-8">
              <h2 className="text-2xl font-semibold text-gray-900">Experience</h2>
              <GuideArrow direction="right" delay={2000} pulse={false} />
            </div>
            
            <div className="space-y-4 relative">
              {experiences.map((exp, index) => (
                <div key={index} className="notion-card overflow-hidden relative">
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

                  {/* Timeline connecting line */}
                  {index < experiences.length - 1 && (
                    <div className="absolute left-8 top-full w-px h-4 bg-blue-200"></div>
                  )}
                </div>
              ))}

              {/* Vertical timeline line */}
              <div className="absolute left-8 top-0 w-px h-full bg-gradient-to-b from-blue-200 to-transparent opacity-50"></div>
            </div>
          </div>
        </ScrollReveal>

        {/* Skills */}
        <ScrollReveal delay={600}>
          <div className="relative">
            <h2 className="text-2xl font-semibold text-gray-900 mb-8">Skills & Expertise</h2>
            <div className="grid md:grid-cols-3 gap-6 relative">
              {skills.map((skillGroup, index) => (
                <div key={index} className="notion-card p-6 group relative">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">{skillGroup.category}</h3>
                  <ul className="space-y-2">
                    {skillGroup.items.map((skill, skillIndex) => (
                      <li key={skillIndex} className="text-gray-600 flex items-center">
                        <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-3"></span>
                        {skill}
                      </li>
                    ))}
                  </ul>

                  {/* Connecting lines between skill categories */}
                  {index < skills.length - 1 && (
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
                  )}
                </div>
              ))}

              {/* Overall connecting arc */}
              <AnimatedLine
                startX={16}
                startY={30}
                endX={84}
                endY={30}
                delay={2000}
                curve={true}
                dashed={true}
                withArrow={false}
                className="hidden lg:block"
              />
            </div>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
};

export default About;
