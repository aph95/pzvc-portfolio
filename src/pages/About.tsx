
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { usePageTitle } from '../hooks/usePageTitle';
import FloatingPlanet from '../components/FloatingPlanet';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

const About = () => {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);
  const location = useLocation();
  usePageTitle('PZVC - About');

  // Handle hash navigation and scrolling
  useEffect(() => {
    if (location.hash === '#contact') {
      setTimeout(() => {
        const contactElement = document.getElementById('contact');
        if (contactElement) {
          contactElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    }
  }, [location.hash]);

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
      role: "Graphic designer", 
      period: "2015 - 2023",
      description: "Provided creative design solutions for various clients as a side hustle, developing skills in visual communication, branding, and client collaboration that now inform my UX approach."
    },
    {
      company: "Self-Directed Learning",
      role: "AI & design integration",
      period: "2023 - Present",
      description: "Continuously exploring how artificial intelligence can enhance the design process, from concept development to user testing, creating more efficient and innovative workflows."
    }
  ];

  const skills = [
    { category: "Design & UX", items: ["User experience design", "Interaction design", "Concept development", "Design systems"] },
    { category: "Development", items: ["Frontend development", "Responsive design", "Prototyping"] },
    { category: "AI & Innovation", items: ["AI-enhanced design", "Creative automation", "Emerging technologies", "Design research"] }
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
            I'm <span className="font-semibold text-foreground">Aleksandar Praizovic Hedström</span>, a 29-year-old designer and developer passionate 
            about creating <span className="font-medium text-foreground">digital experiences</span> that seamlessly blend <em>human intuition</em> with{' '}
            <em>technological innovation</em>. Currently pursuing my Bachelor's in Informatics with
            a specialization in <span className="font-medium text-foreground">Digital Design</span> at Kristianstad University.
          </p>
        </div>

        {/* Personal Story */}
        <div className="notion-card p-8 mb-16 fade-in fade-in-delay-1 hover:shadow-lg transition-all duration-300">
          <h2 className="text-2xl font-semibold text-foreground mb-6">My design philosophy</h2>
          <div className="prose prose-lg text-muted-foreground leading-relaxed space-y-4">
            <img 
              src="/lovable-uploads/939cca3f-b207-4c41-9adf-45355cc9d931.png" 
              alt="Aleksandar Praizovic Hedström"
              className="w-40 h-40 sm:w-32 sm:h-32 md:w-40 md:h-40 rounded-full object-cover object-[center_20%] shadow-lg mx-auto mb-6 sm:float-right sm:ml-4 sm:mb-3 sm:mt-1 sm:mx-0 cursor-default sm:hover:scale-110 sm:hover:rotate-3 sm:hover:shadow-2xl sm:hover:shadow-primary/20 transition-all duration-300 ease-out blur-[0.5px]"
            />
            <p>
              My journey into design began with <span className="font-medium text-foreground">freelance graphic design work</span>—initially as a 
              creative side hustle that sparked my passion for <em>visual communication</em>. This 
              foundation in design thinking naturally evolved into a deeper fascination with 
              how users interact with <span className="font-medium text-foreground">digital interfaces</span>.
            </p>
            <p>
              Today, I'm focused on <span className="font-medium text-foreground">frontend development</span>, <span className="font-medium text-foreground">UX design</span>, and <span className="font-medium text-foreground">interaction design</span>, 
              with a particular interest in how <strong className="text-foreground">artificial intelligence</strong> can enhance the creative 
              process. I believe <em>AI isn't here to replace designers</em>, but to <strong className="text-foreground">amplify our capabilities</strong>—
              helping us iterate faster, explore more possibilities, and create more personalized experiences.
            </p>
            <p>
              When I'm not crafting digital experiences, you'll find me exploring the latest 
              design tools, experimenting with <span className="font-medium text-foreground">AI-powered workflows</span>, or diving deep into 
              <em>emerging technologies</em> that could shape the future of human-computer interaction.
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
        <div className="fade-in fade-in-delay-3 mb-16">
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

        {/* Contact Section */}
        <div id="contact" className="fade-in fade-in-delay-4">
          <h2 className="text-2xl font-semibold text-foreground mb-8">Let's connect</h2>
          <div className="notion-card p-8 hover:shadow-lg transition-all duration-300">
            <p className="text-muted-foreground mb-8 text-lg">
              I'm always interested in new opportunities, collaborations, and conversations about design and technology.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <a 
                href="https://www.linkedin.com/in/aleksandar-praizović-hedström-178b7633a" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-lg hover:bg-accent transition-colors duration-200 group min-h-[80px]"
              >
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-200">
                  <FontAwesomeIcon icon={faLinkedin} className="text-white text-xl" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-foreground">LinkedIn</p>
                  <p className="text-sm text-muted-foreground">Professional profile</p>
                </div>
              </a>

              <a 
                href="mailto:aleksandar.praizovic.hedstrom@gmail.com"
                className="flex items-center gap-4 p-4 rounded-lg hover:bg-accent transition-colors duration-200 group min-h-[80px]"
              >
                <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-200">
                  <FontAwesomeIcon icon={faEnvelope} className="text-white text-xl" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-foreground">Email</p>
                  <p className="text-sm text-muted-foreground break-all">aleksandar.praizovic.hedstrom@gmail.com</p>
                </div>
              </a>

              <a 
                href="tel:+46704329507"
                className="flex items-center gap-4 p-4 rounded-lg hover:bg-accent transition-colors duration-200 group min-h-[80px]"
              >
                <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-200">
                  <FontAwesomeIcon icon={faPhone} className="text-white text-xl" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-foreground">Phone</p>
                  <p className="text-sm text-muted-foreground">070-432 95 07</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
