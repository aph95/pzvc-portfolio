import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { usePageTitle } from '../hooks/usePageTitle';
import BlurText from '../components/BlurText';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faCode, faPalette, faWandMagicSparkles, faLayerGroup, faCubes, faLightbulb, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { motion } from 'framer-motion';

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
      gradient: 'from-purple-500 to-violet-600'
    },
    {
      icon: faWandMagicSparkles,
      title: 'Interaction Design',
      description: 'Crafting engaging, responsive interactions that feel natural and delightful.',
      gradient: 'from-pink-500 to-rose-600'
    },
    {
      icon: faCode,
      title: 'Frontend Development',
      description: 'Building responsive, performant web applications with modern technologies.',
      gradient: 'from-blue-500 to-cyan-600'
    },
    {
      icon: faLightbulb,
      title: 'AI-Enhanced Workflows',
      description: 'Leveraging AI to amplify creativity and streamline design processes.',
      gradient: 'from-amber-500 to-orange-600'
    },
    {
      icon: faCubes,
      title: 'Prototyping',
      description: 'Rapidly iterating on ideas to validate concepts and refine experiences.',
      gradient: 'from-green-500 to-emerald-600'
    },
    {
      icon: faLayerGroup,
      title: 'Design Systems',
      description: 'Creating scalable, consistent design languages that unite teams.',
      gradient: 'from-indigo-500 to-blue-600'
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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } }
  };

  return (
    <div className="min-h-screen bg-background pt-24 pb-16 transition-colors duration-300">
      <motion.div 
        className="max-w-6xl mx-auto px-4 sm:px-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        
        {/* Hero Card */}
        <motion.div 
          variants={itemVariants}
          className="relative bg-card rounded-3xl border border-border/50 p-6 sm:p-8 md:p-12 mb-6 overflow-hidden group"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="relative flex flex-col md:flex-row items-center gap-6 md:gap-8">
            <motion.img
              src="/lovable-uploads/939cca3f-b207-4c41-9adf-45355cc9d931.png"
              alt="Aleksandar Praizovic Hedström"
              className="w-28 h-28 sm:w-32 sm:h-32 md:w-40 md:h-40 rounded-2xl object-cover object-[center_20%] shadow-lg"
              whileHover={{ scale: 1.05, rotate: 2 }}
              transition={{ type: 'spring', stiffness: 300 }}
            />
            <div className="text-center md:text-left">
              <BlurText
                text="Aleksandar Praizovic Hedström"
                delay={60}
                animateBy="words"
                direction="top"
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-3 md:mb-4"
              />
              <p className="text-base sm:text-lg text-muted-foreground max-w-xl leading-relaxed">
                A 29-year-old designer and developer passionate about creating digital experiences 
                that seamlessly blend human intuition with technological innovation.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-6 mb-6">
          
          {/* Philosophy Card */}
          <motion.div 
            variants={itemVariants}
            className="relative bg-card rounded-3xl border border-border/50 p-6 sm:p-8 overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative">
              <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-4 sm:mb-6">Design Philosophy</h2>
              <div className="space-y-3 sm:space-y-4 text-sm sm:text-base text-muted-foreground leading-relaxed">
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
          </motion.div>

          {/* Experience Card */}
          <motion.div 
            variants={itemVariants}
            className="relative bg-card rounded-3xl border border-border/50 p-6 sm:p-8 overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 via-transparent to-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative">
              <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-4 sm:mb-6">Experience</h2>
              <div className="space-y-4 sm:space-y-5">
                {experiences.map((exp, index) => (
                  <motion.div 
                    key={index} 
                    className="relative pl-5 sm:pl-6 border-l-2 border-primary/30 hover:border-primary transition-colors duration-300"
                    whileHover={{ x: 4 }}
                    transition={{ type: 'spring', stiffness: 400 }}
                  >
                    <div className="absolute left-[-5px] top-1 w-2 h-2 rounded-full bg-primary" />
                    <span className="text-xs sm:text-sm text-primary font-medium">{exp.period}</span>
                    <h3 className="text-foreground font-semibold mt-1 text-sm sm:text-base">{exp.role}</h3>
                    <p className="text-xs sm:text-sm text-muted-foreground">{exp.company}</p>
                    <p className="text-xs sm:text-sm text-muted-foreground mt-1 sm:mt-2">{exp.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Skills Section */}
        <motion.div 
          variants={itemVariants}
          className="relative bg-card rounded-3xl border border-border/50 p-6 sm:p-8 mb-6 overflow-hidden"
        >
          <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-6 sm:mb-8 text-center">Core Competencies</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
            {skills.map((skill, index) => (
              <motion.div 
                key={index} 
                className="group relative p-5 sm:p-6 rounded-2xl bg-muted/30 border border-border/30 overflow-hidden cursor-pointer"
                whileHover={{ scale: 1.02, y: -4 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: 'spring', stiffness: 400, damping: 17 }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${skill.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                <div className="relative">
                  <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br ${skill.gradient} flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                    <FontAwesomeIcon icon={skill.icon} className="text-white text-base sm:text-lg" />
                  </div>
                  <h3 className="text-foreground font-semibold mb-1 sm:mb-2 text-sm sm:text-base">{skill.title}</h3>
                  <p className="text-xs sm:text-sm text-muted-foreground">{skill.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Contact Section */}
        <motion.div 
          id="contact" 
          variants={itemVariants}
          className="relative bg-card rounded-3xl border border-border/50 p-6 sm:p-8 overflow-hidden"
        >
          <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-6 sm:mb-8 text-center">Let's Connect</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 max-w-2xl mx-auto">
            <motion.a
              href="https://www.linkedin.com/in/aleksandar-praizović-hedström-178b7633a"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-row sm:flex-col items-center gap-4 sm:gap-3 p-4 sm:p-6 rounded-2xl bg-muted/30 border border-border/30 group overflow-hidden relative"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative w-10 h-10 sm:w-12 sm:h-12 bg-blue-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                <FontAwesomeIcon icon={faLinkedin} className="text-white text-lg sm:text-xl" />
              </div>
              <div className="relative flex-1 sm:text-center">
                <span className="font-medium text-foreground block">LinkedIn</span>
                <span className="text-xs text-muted-foreground hidden sm:block">Professional profile</span>
              </div>
              <FontAwesomeIcon icon={faArrowRight} className="relative text-muted-foreground group-hover:text-foreground group-hover:translate-x-1 transition-all sm:hidden" />
            </motion.a>

            <motion.a
              href="mailto:aleksandar.praizovic.hedstrom@gmail.com"
              className="flex flex-row sm:flex-col items-center gap-4 sm:gap-3 p-4 sm:p-6 rounded-2xl bg-muted/30 border border-border/30 group overflow-hidden relative"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-green-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative w-10 h-10 sm:w-12 sm:h-12 bg-green-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                <FontAwesomeIcon icon={faEnvelope} className="text-white text-lg sm:text-xl" />
              </div>
              <div className="relative flex-1 sm:text-center">
                <span className="font-medium text-foreground block">Email</span>
                <span className="text-xs text-muted-foreground hidden sm:block">Get in touch</span>
              </div>
              <FontAwesomeIcon icon={faArrowRight} className="relative text-muted-foreground group-hover:text-foreground group-hover:translate-x-1 transition-all sm:hidden" />
            </motion.a>

            <motion.a
              href="tel:+46704329507"
              className="flex flex-row sm:flex-col items-center gap-4 sm:gap-3 p-4 sm:p-6 rounded-2xl bg-muted/30 border border-border/30 group overflow-hidden relative"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative w-10 h-10 sm:w-12 sm:h-12 bg-purple-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                <FontAwesomeIcon icon={faPhone} className="text-white text-lg sm:text-xl" />
              </div>
              <div className="relative flex-1 sm:text-center">
                <span className="font-medium text-foreground block">Phone</span>
                <span className="text-xs text-muted-foreground hidden sm:block">070-432 95 07</span>
              </div>
              <FontAwesomeIcon icon={faArrowRight} className="relative text-muted-foreground group-hover:text-foreground group-hover:translate-x-1 transition-all sm:hidden" />
            </motion.a>
          </div>
        </motion.div>

      </motion.div>
    </div>
  );
};

export default About;
