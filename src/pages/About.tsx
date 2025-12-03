import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { usePageTitle } from '../hooks/usePageTitle';
import BlurText from '../components/BlurText';
import MagicBento from '../components/MagicBento';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
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

  const skillCards = [
    {
      color: '#0a0a1a',
      title: 'User Experience Design',
      description: 'Creating intuitive interfaces that guide users naturally through their digital journey with clarity and purpose.',
      label: 'Design & UX'
    },
    {
      color: '#0a0a1a',
      title: 'Interaction Design',
      description: 'Crafting engaging, responsive interactions that feel natural and delightful.',
      label: 'Design & UX'
    },
    {
      color: '#0a0a1a',
      title: 'Frontend Development',
      description: 'Building responsive, performant web applications with modern technologies and best practices.',
      label: 'Development'
    },
    {
      color: '#0a0a1a',
      title: 'AI-Enhanced Workflows',
      description: 'Leveraging artificial intelligence to amplify creativity and streamline design processes.',
      label: 'AI & Innovation'
    },
    {
      color: '#0a0a1a',
      title: 'Prototyping',
      description: 'Rapidly iterating on ideas to validate concepts and refine user experiences.',
      label: 'Development'
    },
    {
      color: '#0a0a1a',
      title: 'Design Systems',
      description: 'Creating scalable, consistent design languages that unite teams and products.',
      label: 'Design & UX'
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
    <div className="min-h-screen bg-background pt-24 relative overflow-hidden transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6 py-12 relative z-10">
        {/* Hero Section */}
        <div className="mb-20 text-center">
          <div className="mb-8">
            <img
              src="/lovable-uploads/939cca3f-b207-4c41-9adf-45355cc9d931.png"
              alt="Aleksandar Praizovic Hedström"
              className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover object-[center_20%] shadow-lg mx-auto cursor-default hover:scale-110 hover:rotate-3 hover:shadow-2xl transition-all duration-300 ease-out"
            />
          </div>
          <BlurText
            text="Aleksandar Praizovic Hedström"
            delay={80}
            animateBy="words"
            direction="top"
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6"
          />
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            A 29-year-old designer and developer passionate about creating digital experiences 
            that seamlessly blend human intuition with technological innovation.
          </p>
        </div>

        {/* Philosophy Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <BlurText
              text="Design philosophy"
              delay={80}
              animateBy="words"
              direction="top"
              className="text-3xl md:text-4xl font-bold text-foreground leading-tight"
            />
          </div>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              My journey into design began with freelance graphic design work—initially as a 
              creative side hustle that sparked my passion for visual communication. This 
              foundation naturally evolved into a deeper fascination with how users interact 
              with digital interfaces.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Today, I focus on frontend development, UX design, and interaction design, 
              with a particular interest in how artificial intelligence can enhance the creative 
              process. I believe AI amplifies our capabilities—helping us iterate faster, 
              explore more possibilities, and create more personalized experiences.
            </p>
          </div>
        </div>

        {/* Skills Bento Grid */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <BlurText
              text="Core competencies"
              delay={80}
              animateBy="words"
              direction="top"
              className="text-3xl md:text-4xl font-bold text-foreground leading-tight"
            />
          </div>
          <MagicBento
            cards={skillCards}
            textAutoHide={false}
            enableStars={true}
            enableSpotlight={true}
            enableBorderGlow={true}
            enableTilt={true}
            enableMagnetism={true}
            clickEffect={true}
            spotlightRadius={300}
            particleCount={12}
            glowColor="132, 0, 255"
          />
        </div>

        {/* Experience Timeline */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <BlurText
              text="Experience"
              delay={80}
              animateBy="words"
              direction="top"
              className="text-3xl md:text-4xl font-bold text-foreground leading-tight"
            />
          </div>
          <div className="space-y-6 max-w-3xl mx-auto">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="relative pl-8 pb-8 border-l-2 border-border/50 last:pb-0"
              >
                <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-primary" />
                <div className="bg-card/50 backdrop-blur-sm rounded-xl p-6 border border-border/30 hover:border-primary/30 transition-all duration-300">
                  <span className="text-sm text-primary font-medium">{exp.period}</span>
                  <h3 className="text-xl font-semibold text-foreground mt-1">{exp.role}</h3>
                  <p className="text-muted-foreground mt-1">{exp.company}</p>
                  <p className="text-muted-foreground mt-3 text-sm">{exp.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Section */}
        <div id="contact" className="mb-12">
          <div className="text-center mb-12">
            <BlurText
              text="Let's connect"
              delay={80}
              animateBy="words"
              direction="top"
              className="text-3xl md:text-4xl font-bold text-foreground leading-tight"
            />
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <a
              href="https://www.linkedin.com/in/aleksandar-praizović-hedström-178b7633a"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-4 p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/30 hover:border-blue-500/50 hover:bg-blue-500/5 transition-all duration-300 group"
            >
              <div className="w-14 h-14 bg-blue-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                <FontAwesomeIcon icon={faLinkedin} className="text-white text-2xl" />
              </div>
              <div className="text-center">
                <p className="font-semibold text-foreground">LinkedIn</p>
                <p className="text-sm text-muted-foreground">Professional profile</p>
              </div>
            </a>

            <a
              href="mailto:aleksandar.praizovic.hedstrom@gmail.com"
              className="flex flex-col items-center gap-4 p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/30 hover:border-green-500/50 hover:bg-green-500/5 transition-all duration-300 group"
            >
              <div className="w-14 h-14 bg-green-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                <FontAwesomeIcon icon={faEnvelope} className="text-white text-2xl" />
              </div>
              <div className="text-center">
                <p className="font-semibold text-foreground">Email</p>
                <p className="text-sm text-muted-foreground">Get in touch</p>
              </div>
            </a>

            <a
              href="tel:+46704329507"
              className="flex flex-col items-center gap-4 p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/30 hover:border-purple-500/50 hover:bg-purple-500/5 transition-all duration-300 group"
            >
              <div className="w-14 h-14 bg-purple-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                <FontAwesomeIcon icon={faPhone} className="text-white text-2xl" />
              </div>
              <div className="text-center">
                <p className="font-semibold text-foreground">Phone</p>
                <p className="text-sm text-muted-foreground">070-432 95 07</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
