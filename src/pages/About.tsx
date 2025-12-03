import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { usePageTitle } from '../hooks/usePageTitle';
import BlurText from '../components/BlurText';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faCode, faPalette, faWandMagicSparkles, faLayerGroup, faCubes, faLightbulb } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

const About = () => {
  const location = useLocation();
  usePageTitle('About - Aleksandar Praizovic Hedström | UX & Frontend Designer');

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

  const skills = [
    {
      icon: faPalette,
      title: 'User Experience Design',
      description: 'Creating intuitive interfaces that guide users naturally through their digital journey.',
      color: 'bg-purple-500/10 text-purple-500'
    },
    {
      icon: faWandMagicSparkles,
      title: 'Interaction Design',
      description: 'Crafting engaging, responsive interactions that feel natural and delightful.',
      color: 'bg-pink-500/10 text-pink-500'
    },
    {
      icon: faCode,
      title: 'Frontend Development',
      description: 'Building responsive, performant web applications with modern technologies.',
      color: 'bg-blue-500/10 text-blue-500'
    },
    {
      icon: faLightbulb,
      title: 'AI-Enhanced Workflows',
      description: 'Leveraging AI to amplify creativity and streamline design processes.',
      color: 'bg-amber-500/10 text-amber-500'
    },
    {
      icon: faCubes,
      title: 'Prototyping',
      description: 'Rapidly iterating on ideas to validate concepts and refine experiences.',
      color: 'bg-green-500/10 text-green-500'
    },
    {
      icon: faLayerGroup,
      title: 'Design Systems',
      description: 'Creating scalable, consistent design languages that unite teams.',
      color: 'bg-indigo-500/10 text-indigo-500'
    }
  ];

  const experiences = [
    {
      company: "Kristianstad University",
      role: "Bachelor of Science in Informatics - Digital Design",
      period: "2023 - 2026",
      description: "Specializing in digital design with a focus on user experience, interaction design, and frontend development."
    },
    {
      company: "Freelance",
      role: "Graphic Designer",
      period: "2015 - 2023",
      description: "Provided creative design solutions for various clients, developing skills in visual communication and branding."
    },
    {
      company: "Self-Directed Learning",
      role: "AI & Design Integration",
      period: "2023 - Present",
      description: "Exploring how artificial intelligence can enhance the design process and create more efficient workflows."
    }
  ];

  return (
    <div className="min-h-screen bg-background pt-24 pb-16 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Hero Card */}
        <div className="bg-card rounded-3xl border border-border/50 p-8 md:p-12 mb-8 animate-fade-in">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <img
              src="/lovable-uploads/939cca3f-b207-4c41-9adf-45355cc9d931.png"
              alt="Aleksandar Praizovic Hedström"
              className="w-32 h-32 md:w-40 md:h-40 rounded-2xl object-cover object-[center_20%] shadow-lg hover:scale-105 transition-transform duration-300"
            />
            <div className="text-center md:text-left">
              <BlurText
                text="Aleksandar Praizovic Hedström"
                delay={60}
                animateBy="words"
                direction="top"
                className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-4"
              />
              <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
                A 29-year-old designer and developer passionate about creating digital experiences 
                that seamlessly blend human intuition with technological innovation.
              </p>
            </div>
          </div>
        </div>

        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          
          {/* Philosophy Card */}
          <div className="bg-card rounded-3xl border border-border/50 p-8 animate-fade-in" style={{ animationDelay: '100ms' }}>
            <h2 className="text-2xl font-bold text-foreground mb-6">Design Philosophy</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                My journey into design began with freelance graphic design work—initially as a 
                creative side hustle that sparked my passion for visual communication.
              </p>
              <p>
                Today, I focus on frontend development, UX design, and interaction design, 
                with a particular interest in how AI can enhance the creative process.
              </p>
              <p>
                I believe AI amplifies our capabilities—helping us iterate faster, explore more 
                possibilities, and create more personalized experiences.
              </p>
            </div>
          </div>

          {/* Experience Card */}
          <div className="bg-card rounded-3xl border border-border/50 p-8 animate-fade-in" style={{ animationDelay: '150ms' }}>
            <h2 className="text-2xl font-bold text-foreground mb-6">Experience</h2>
            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <div key={index} className="relative pl-6 border-l-2 border-primary/30">
                  <div className="absolute left-[-5px] top-1 w-2 h-2 rounded-full bg-primary" />
                  <span className="text-sm text-primary font-medium">{exp.period}</span>
                  <h3 className="text-foreground font-semibold mt-1">{exp.role}</h3>
                  <p className="text-sm text-muted-foreground">{exp.company}</p>
                  <p className="text-sm text-muted-foreground mt-2">{exp.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="bg-card rounded-3xl border border-border/50 p-8 mb-8 animate-fade-in" style={{ animationDelay: '200ms' }}>
          <h2 className="text-2xl font-bold text-foreground mb-8 text-center">Core Competencies</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {skills.map((skill, index) => (
              <div 
                key={index} 
                className="group p-6 rounded-2xl bg-muted/30 border border-border/30 hover:border-primary/30 hover:bg-muted/50 transition-all duration-300"
              >
                <div className={`w-12 h-12 rounded-xl ${skill.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <FontAwesomeIcon icon={skill.icon} className="text-xl" />
                </div>
                <h3 className="text-foreground font-semibold mb-2">{skill.title}</h3>
                <p className="text-sm text-muted-foreground">{skill.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Section */}
        <div id="contact" className="bg-card rounded-3xl border border-border/50 p-8 animate-fade-in" style={{ animationDelay: '250ms' }}>
          <h2 className="text-2xl font-bold text-foreground mb-8 text-center">Let's Connect</h2>
          <div className="grid sm:grid-cols-3 gap-4 max-w-2xl mx-auto">
            <a
              href="https://www.linkedin.com/in/aleksandar-praizović-hedström-178b7633a"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-3 p-6 rounded-2xl bg-muted/30 border border-border/30 hover:border-blue-500/50 hover:bg-blue-500/5 transition-all duration-300 group"
            >
              <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                <FontAwesomeIcon icon={faLinkedin} className="text-white text-xl" />
              </div>
              <span className="font-medium text-foreground">LinkedIn</span>
            </a>

            <a
              href="mailto:aleksandar.praizovic.hedstrom@gmail.com"
              className="flex flex-col items-center gap-3 p-6 rounded-2xl bg-muted/30 border border-border/30 hover:border-green-500/50 hover:bg-green-500/5 transition-all duration-300 group"
            >
              <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                <FontAwesomeIcon icon={faEnvelope} className="text-white text-xl" />
              </div>
              <span className="font-medium text-foreground">Email</span>
            </a>

            <a
              href="tel:+46704329507"
              className="flex flex-col items-center gap-3 p-6 rounded-2xl bg-muted/30 border border-border/30 hover:border-purple-500/50 hover:bg-purple-500/5 transition-all duration-300 group"
            >
              <div className="w-12 h-12 bg-purple-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                <FontAwesomeIcon icon={faPhone} className="text-white text-xl" />
              </div>
              <span className="font-medium text-foreground">Phone</span>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};

export default About;
