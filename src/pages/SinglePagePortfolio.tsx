import { useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { ArrowDown, Linkedin, Mail, Phone, ExternalLink } from 'lucide-react';
import LiquidEther from '../components/LiquidEther';

const SinglePagePortfolio = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);
  
  const aboutInView = useInView(aboutRef, { once: true, margin: "-20%" });
  const projectsInView = useInView(projectsRef, { once: true, margin: "-20%" });
  const contactInView = useInView(contactRef, { once: true, margin: "-20%" });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95]);

  const projects = [
    {
      id: 1,
      title: "Autoclone",
      category: "AI Automotive Design",
      description: "AI-powered car companion for diagnostics, analytics, and performance optimization.",
      tags: ["AI Design", "Automotive UX", "Data Visualization"],
      image: "/lovable-uploads/b0568c1b-20c8-45aa-8eb7-a0f21a5ae5fb.png",
      prototypeUrl: "https://www.figma.com/proto/8FZt5qhEkm2dDkLeHheRoC/Digital-twin--Autoclone-?node-id=29-120&t=sKDaG9ME3GRrpvx7-1"
    },
    {
      id: 2,
      title: "Patient Zero",
      category: "Phygital Game Design",
      description: "Real-world phygital game integrating wearable tech and directional audio for immersive storytelling.",
      tags: ["Wearable Tech", "UX Design", "Phygital"],
      image: "/lovable-uploads/57f6e072-fad0-424d-b433-4dbd1ded2abd.png",
      videoUrl: "https://www.youtube.com/watch?v=20dxeJcHg78"
    },
    {
      id: 3,
      title: "Deliverly",
      category: "Mobile App Design",
      description: "Driver-first mobile app built from real delivery experience for simplified workflows.",
      tags: ["Mobile Design", "UX Research", "User-Centered"],
      image: "/lovable-uploads/0c4fba57-6d6a-488b-b415-dfad74a954de.png",
      prototypeUrl: "https://www.figma.com/proto/R3S5emLjv1eL84nVBFdszs/Deliverly?node-id=48-1133&t=X23M6OvpfhyIXPxK-1"
    },
    {
      id: 4,
      title: "Hallie",
      category: "AI Companion Design",
      description: "Emotionally intelligent AI study companion providing non-intrusive support for students.",
      tags: ["AI Design", "Student Experience", "Digital Wellbeing"],
      image: "/lovable-uploads/3037bcf4-215e-4a32-9131-2c8d7962d443.png",
      prototypeUrl: "https://xd.adobe.com/view/2e78f163-164a-4b70-b7c9-cfb3f7e21205-7b2b/"
    }
  ];

  const skills = [
    "UX Design",
    "Prototyping",
    "No-Code Development",
    "Front-End Experimentation",
    "Design Systems",
    "User Research"
  ];

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div ref={containerRef} className="snap-container bg-background text-foreground">
      {/* HOME SECTION */}
      <section id="home" className="h-screen relative overflow-hidden snap-section">
        {/* LiquidEther Background */}
        <div className="absolute inset-0">
          <LiquidEther
            colors={['#5227FF', '#FF9FFC', '#B19EEF']}
            mouseForce={20}
            cursorSize={100}
            isViscous={false}
            autoDemo={true}
            autoSpeed={0.5}
            autoIntensity={2.2}
          />
        </div>

        <motion.div 
          style={{ opacity: heroOpacity, scale: heroScale }}
          className="relative z-10 h-full flex flex-col items-center justify-center px-6"
        >
          {/* Small caps label */}
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xs sm:text-sm tracking-[0.3em] uppercase text-white/60 mb-6 font-light"
          >
            Portfolio 2025
          </motion.span>

          {/* Main headline - Large expressive typography */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-center text-white leading-[0.95] mb-4"
          >
            <span className="block">UX Designer</span>
            <span className="block mt-2 font-light text-white/80">&</span>
            <span className="block mt-2 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
              No-Code Developer
            </span>
          </motion.h1>

          {/* Subheader - Light wide */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-8 text-lg sm:text-xl md:text-2xl text-white/70 font-extralight tracking-wide text-center max-w-2xl"
          >
            Crafting intuitive digital experiences through
            <span className="text-white font-normal"> thoughtful design </span>
            and
            <span className="text-white font-normal"> modern technology</span>
          </motion.p>

          {/* Name with serif accent */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="mt-12 text-base sm:text-lg text-white/50 font-serif italic"
          >
            Aleksandar Praizovic Hedström
          </motion.p>

          {/* Scroll indicator */}
          <motion.button
            onClick={() => scrollToSection('about')}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.5 }}
            className="absolute bottom-12 left-1/2 -translate-x-1/2 text-white/60 hover:text-white transition-colors"
          >
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="flex flex-col items-center gap-2"
            >
              <span className="text-xs tracking-[0.2em] uppercase">Scroll</span>
              <ArrowDown className="w-5 h-5" />
            </motion.div>
          </motion.button>
        </motion.div>
      </section>

      {/* ABOUT SECTION */}
      <section 
        ref={aboutRef}
        id="about" 
        className="min-h-screen relative snap-section flex items-center py-24 px-6"
      >
        {/* Subtle gradient background */}
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-purple-950/20" />
        
        <div className="relative z-10 max-w-6xl mx-auto w-full">
          {/* Section label */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={aboutInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <span className="text-xs tracking-[0.3em] uppercase text-muted-foreground border border-border/50 px-4 py-2 rounded-full">
              About
            </span>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left column - Bio */}
            <div>
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                animate={aboutInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground leading-tight mb-8"
              >
                Building bridges between
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                  users & technology
                </span>
              </motion.h2>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={aboutInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="space-y-6 text-muted-foreground text-base sm:text-lg leading-relaxed"
              >
                <p>
                  My journey into design began with freelance graphic design work—initially as a 
                  creative side hustle that sparked my passion for visual communication. That early 
                  experience evolved into a deep curiosity for how users interact with digital products.
                </p>
                <p>
                  Today, I specialize in creating experiences that feel natural and intuitive. I believe 
                  that great design doesn't just look good—it removes friction, anticipates needs, and 
                  creates moments of delight that users remember.
                </p>
                <p className="text-foreground/80 font-medium">
                  My approach combines research-driven insights with creative exploration, always keeping 
                  the end user at the center of every decision.
                </p>
              </motion.div>

              {/* Contact links */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={aboutInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="flex flex-wrap gap-4 mt-10"
              >
                <a
                  href="https://www.linkedin.com/in/aleksandar-hedstrom"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-3 bg-card border border-border/50 rounded-full text-sm hover:bg-accent hover:border-accent transition-all duration-300 group"
                >
                  <Linkedin className="w-4 h-4 group-hover:text-purple-400 transition-colors" />
                  <span>LinkedIn</span>
                </a>
                <a
                  href="mailto:alekansen@hotmail.com"
                  className="flex items-center gap-2 px-5 py-3 bg-card border border-border/50 rounded-full text-sm hover:bg-accent hover:border-accent transition-all duration-300 group"
                >
                  <Mail className="w-4 h-4 group-hover:text-purple-400 transition-colors" />
                  <span>Email</span>
                </a>
                <a
                  href="tel:+46702574802"
                  className="flex items-center gap-2 px-5 py-3 bg-card border border-border/50 rounded-full text-sm hover:bg-accent hover:border-accent transition-all duration-300 group"
                >
                  <Phone className="w-4 h-4 group-hover:text-purple-400 transition-colors" />
                  <span>Call</span>
                </a>
              </motion.div>
            </div>

            {/* Right column - Skills & Focus */}
            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={aboutInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <h3 className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-6">
                  Areas of Focus
                </h3>
                <div className="flex flex-wrap gap-3">
                  {skills.map((skill, index) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={aboutInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                      className="px-5 py-3 bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-2xl text-sm text-foreground hover:border-purple-500/40 transition-colors"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>

              {/* Stats/Experience highlights */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={aboutInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="grid grid-cols-2 gap-6 mt-12"
              >
                <div className="p-6 bg-card/50 border border-border/30 rounded-2xl">
                  <span className="text-3xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                    4+
                  </span>
                  <p className="text-sm text-muted-foreground mt-2">Years of design experience</p>
                </div>
                <div className="p-6 bg-card/50 border border-border/30 rounded-2xl">
                  <span className="text-3xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                    10+
                  </span>
                  <p className="text-sm text-muted-foreground mt-2">Projects delivered</p>
                </div>
              </motion.div>

              {/* Quote */}
              <motion.blockquote
                initial={{ opacity: 0, y: 20 }}
                animate={aboutInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="border-l-2 border-purple-500/50 pl-6 mt-8"
              >
                <p className="text-lg text-muted-foreground italic font-serif">
                  "Design is not just what it looks like. Design is how it works."
                </p>
                <cite className="text-sm text-muted-foreground/60 mt-2 block">— Steve Jobs</cite>
              </motion.blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* PROJECTS SECTION */}
      <section 
        ref={projectsRef}
        id="projects" 
        className="min-h-screen relative snap-section py-24 px-6"
      >
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-purple-950/20 via-background to-background" />

        <div className="relative z-10 max-w-6xl mx-auto">
          {/* Section label */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={projectsInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <span className="text-xs tracking-[0.3em] uppercase text-muted-foreground border border-border/50 px-4 py-2 rounded-full">
              Projects
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={projectsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4"
          >
            Selected Work
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={projectsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-muted-foreground text-lg mb-16 max-w-2xl"
          >
            A collection of projects showcasing UX design, prototyping, and no-code development.
          </motion.p>

          {/* Projects grid - Staggered modular blocks */}
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                animate={projectsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.3 + index * 0.15 }}
                className={`group relative overflow-hidden rounded-3xl bg-card border border-border/30 hover:border-purple-500/30 transition-all duration-500 ${
                  index === 0 ? 'md:row-span-2' : ''
                }`}
              >
                {/* Project image */}
                <div className={`relative overflow-hidden ${index === 0 ? 'h-64 md:h-full' : 'h-48 sm:h-56'}`}>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/60 to-transparent" />
                </div>

                {/* Project info */}
                <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                  <span className="text-xs tracking-[0.2em] uppercase text-purple-400 mb-2 block">
                    {project.category}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-3 group-hover:text-purple-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                    {project.description}
                  </p>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-3 py-1 bg-purple-500/10 text-purple-300 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-4">
                    {project.prototypeUrl && (
                      <a
                        href={project.prototypeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm text-foreground hover:text-purple-400 transition-colors"
                      >
                        View Prototype
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                    {project.videoUrl && (
                      <a
                        href={project.videoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm text-foreground hover:text-purple-400 transition-colors"
                      >
                        Watch Demo
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>

                {/* Hover glow effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-500/5 to-transparent" />
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* CONTACT SECTION */}
      <section 
        ref={contactRef}
        id="contact" 
        className="min-h-screen relative snap-section flex items-center py-24 px-6"
      >
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-background via-purple-950/10 to-background" />
        
        <div className="relative z-10 max-w-4xl mx-auto w-full text-center">
          {/* Section label */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={contactInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <span className="text-xs tracking-[0.3em] uppercase text-muted-foreground border border-border/50 px-4 py-2 rounded-full">
              Contact
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={contactInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6"
          >
            Let's create something
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400">
              amazing together
            </span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={contactInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-muted-foreground text-lg sm:text-xl mb-12 max-w-2xl mx-auto"
          >
            Whether you have a project in mind or just want to chat about design and technology, 
            I'd love to hear from you.
          </motion.p>

          {/* Contact cards */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={contactInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="grid sm:grid-cols-3 gap-4 sm:gap-6 mb-16"
          >
            <a
              href="mailto:alekansen@hotmail.com"
              className="group p-6 sm:p-8 bg-card/50 border border-border/30 rounded-3xl hover:border-purple-500/30 hover:bg-card transition-all duration-300"
            >
              <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Mail className="w-6 h-6 text-purple-400" />
              </div>
              <h3 className="text-foreground font-semibold mb-2">Email</h3>
              <p className="text-sm text-muted-foreground group-hover:text-purple-400 transition-colors">
                alekansen@hotmail.com
              </p>
            </a>

            <a
              href="https://www.linkedin.com/in/aleksandar-hedstrom"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-6 sm:p-8 bg-card/50 border border-border/30 rounded-3xl hover:border-purple-500/30 hover:bg-card transition-all duration-300"
            >
              <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Linkedin className="w-6 h-6 text-purple-400" />
              </div>
              <h3 className="text-foreground font-semibold mb-2">LinkedIn</h3>
              <p className="text-sm text-muted-foreground group-hover:text-purple-400 transition-colors">
                Connect with me
              </p>
            </a>

            <a
              href="tel:+46702574802"
              className="group p-6 sm:p-8 bg-card/50 border border-border/30 rounded-3xl hover:border-purple-500/30 hover:bg-card transition-all duration-300"
            >
              <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Phone className="w-6 h-6 text-purple-400" />
              </div>
              <h3 className="text-foreground font-semibold mb-2">Phone</h3>
              <p className="text-sm text-muted-foreground group-hover:text-purple-400 transition-colors">
                +46 70 257 4802
              </p>
            </a>
          </motion.div>

          {/* Availability badge */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={contactInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="inline-flex items-center gap-3 px-6 py-3 bg-green-500/10 border border-green-500/20 rounded-full"
          >
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span className="text-sm text-green-400">Available for freelance projects</span>
          </motion.div>

          {/* Footer text */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={contactInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-16 text-muted-foreground/50 text-sm"
          >
            © 2025 Aleksandar Praizovic Hedström. Crafted with passion.
          </motion.p>
        </div>
      </section>

      {/* Fixed navigation dots */}
      <div className="fixed right-6 top-1/2 -translate-y-1/2 z-50 hidden md:flex flex-col gap-3">
        {['home', 'about', 'projects', 'contact'].map((section) => (
          <button
            key={section}
            onClick={() => scrollToSection(section)}
            className="w-3 h-3 rounded-full bg-white/20 hover:bg-white/60 transition-colors duration-300"
            aria-label={`Go to ${section}`}
          />
        ))}
      </div>
    </div>
  );
};

export default SinglePagePortfolio;
