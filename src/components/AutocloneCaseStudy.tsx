import { Car, Target, Search, PenTool, Layers, Zap, Settings, Trophy, Cog, ChevronRight, MessageCircle } from 'lucide-react';
import { SafeTextRenderer } from '@/lib/safeTextRenderer';

interface AutocloneCaseStudyProps {
  onCollapse?: () => void;
}

const AutocloneCaseStudy = ({ onCollapse }: AutocloneCaseStudyProps) => {

  return (
    <div className="space-y-12">
      {/* Header */}
      <div className="text-center">
        <h2 className="text-3xl font-bold text-foreground mb-4">Autoclone</h2>
        <p className="text-lg text-foreground/70">
          An AI-powered car companion for diagnostics, analytics, and performance optimization
        </p>
      </div>

      {/* Tools Used */}
      <div className="bg-accent/50 rounded-lg p-6">
        <div className="flex items-center gap-3 mb-4">
          <Cog className="h-6 w-6 text-primary" />
          <h3 className="text-2xl font-bold text-foreground">Tools used</h3>
        </div>
        <p className="text-foreground/80">
          <strong>Software:</strong> Adobe Illustrator, Draw.io, Blender, Sketchfab, Figma
        </p>
      </div>

      {/* Project Goals */}
      <section>
        <div className="flex items-center gap-3 mb-6">
          <Target className="h-6 w-6 text-primary" />
          <h3 className="text-2xl font-bold text-foreground">Project goals</h3>
        </div>
        <p className="text-foreground/80 mb-4">
          To guide the design of Autoclone, I defined the following goals:
        </p>
        <div className="grid md:grid-cols-2 gap-3">
          {[
            "Simplify car diagnostics for <strong>everyday drivers</strong>",
            "Provide personalized insights with <strong>AI assistance</strong>",
            "Improve driving efficiency and <strong>vehicle lifespan</strong>",
            "Enable optimization of performance, safety, and <strong>comfort</strong>"
          ].map((goal, index) => (
            <div key={index} className="flex items-start gap-3 p-3 bg-accent/30 rounded-lg">
              <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
              <span className="text-foreground/80"><SafeTextRenderer text={goal} /></span>
            </div>
          ))}
        </div>
      </section>

      {/* Research & Analysis */}
      <section>
        <div className="flex items-center gap-3 mb-6">
          <Search className="h-6 w-6 text-primary" />
          <h3 className="text-2xl font-bold text-foreground">Research & analysis</h3>
        </div>
        <p className="text-foreground/80 mb-4">
          I conducted an initial scan of:
        </p>
        <div className="space-y-3">
          {[
            "Existing <strong>vehicle diagnostic</strong> and optimization apps",
            "<strong>OBD-II integration</strong> possibilities and limitations",
            "User pain points from <strong>driver forums</strong> and surveys"
          ].map((item, index) => (
            <div key={index} className="flex items-start gap-3 p-3 bg-accent/30 rounded-lg">
              <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
              <span className="text-foreground/80"><SafeTextRenderer text={item} /></span>
            </div>
          ))}
        </div>
      </section>

      {/* Concept Development */}
      <section>
        <div className="flex items-center gap-3 mb-6">
          <Layers className="h-6 w-6 text-primary" />
          <h3 className="text-2xl font-bold text-foreground">Concept development</h3>
        </div>
        <p className="text-foreground/80 mb-4">
          Several early design directions were explored, including:
        </p>
        <div className="grid md:grid-cols-2 gap-3">
          {[
            "<strong>AI chatbot</strong> for real-time troubleshooting",
            "Dashboard with modular <strong>health indicators</strong>",
            "Interactive optimization sliders for <strong>performance and safety</strong>",
            "Integrated analytics for <strong>fuel efficiency, mileage, and driving behavior</strong>"
          ].map((item, index) => (
            <div key={index} className="flex items-start gap-3 p-3 bg-accent/30 rounded-lg">
              <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
              <span className="text-foreground/80"><SafeTextRenderer text={item} /></span>
            </div>
          ))}
        </div>
      </section>

      {/* Early Wireframes */}
      <section>
        <div className="flex items-center gap-3 mb-6">
          <PenTool className="h-6 w-6 text-primary" />
          <h3 className="text-2xl font-bold text-foreground">Early wireframes</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
          <div className="relative group rounded-lg border border-border bg-white shadow-sm overflow-hidden">
            <img
              src="/lovable-uploads/2225ebc2-778c-4421-b097-4433c1d83735.png"
              alt="Autoclone Login Screen Wireframe"
              className="w-full h-auto transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300 flex items-start justify-start p-4">
              <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/80 backdrop-blur-sm text-white px-3 py-2 rounded-md shadow-lg">
                <p className="text-sm font-medium">Login Screen</p>
              </div>
            </div>
          </div>
          <div className="relative group rounded-lg border border-border bg-white shadow-sm overflow-hidden">
            <img
              src="/lovable-uploads/b18f0a3a-ba71-4927-8b02-3f73f3e03f47.png"
              alt="Autoclone Registration Screen Wireframe"
              className="w-full h-auto transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300 flex items-start justify-start p-4">
              <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/80 backdrop-blur-sm text-white px-3 py-2 rounded-md shadow-lg">
                <p className="text-sm font-medium">Registration Screen</p>
              </div>
            </div>
          </div>
          <div className="relative group rounded-lg border border-border bg-white shadow-sm overflow-hidden">
            <img
              src="/lovable-uploads/f80a0782-cd3f-4cfe-be4b-52f855955a24.png"
              alt="Autoclone OBD-II Connection Screen Wireframe"
              className="w-full h-auto transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300 flex items-start justify-start p-4">
              <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/80 backdrop-blur-sm text-white px-3 py-2 rounded-md shadow-lg">
                <p className="text-sm font-medium">OBD-II Connection</p>
              </div>
            </div>
          </div>
          <div className="relative group rounded-lg border border-border bg-white shadow-sm overflow-hidden">
            <img
              src="/lovable-uploads/52439007-8092-4b77-99f2-230dad1b02b0.png"
              alt="Autoclone Successfully Paired Screen Wireframe"
              className="w-full h-auto transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300 flex items-start justify-start p-4">
              <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/80 backdrop-blur-sm text-white px-3 py-2 rounded-md shadow-lg">
                <p className="text-sm font-medium">Successfully Paired</p>
              </div>
            </div>
          </div>
        </div>
        <p className="text-foreground/80">
          These early layouts mapped out core user flows for logging in and connecting the OBD-II reader to the app.
        </p>
      </section>

      {/* Prototyping & Feedback */}
      <section>
        <div className="flex items-center gap-3 mb-6">
          <Zap className="h-6 w-6 text-primary" />
          <h3 className="text-2xl font-bold text-foreground">Prototyping & feedback</h3>
        </div>
        <p className="text-foreground/80 mb-4">
          Three rounds of user research were conducted with actual stakeholders:
        </p>
        <div className="space-y-3 mb-6">
          {[
            "<strong>Generative research</strong> – Conducted with 3 individuals to gather needs and ideas, which directly informed the low-fidelity prototype.",
            "<strong>First user test</strong> – Conducted with 3 new individuals, leading to the creation of the high-fidelity prototype.",
            "<strong>Final user test</strong> – Conducted with 3 additional individuals, resulting in the iterated high-fidelity prototype."
          ].map((item, index) => (
            <div key={index} className="flex items-start gap-3 p-3 bg-accent/30 rounded-lg">
              <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
              <span className="text-foreground/80"><SafeTextRenderer text={item} /></span>
            </div>
          ))}
        </div>
        <div className="my-8 space-y-4 flex justify-center">
          <div className="relative group rounded-lg border border-border bg-white shadow-sm overflow-hidden max-w-2xl p-6">
            <img
              src="/lovable-uploads/d58a86bb-8ad2-45c1-89e8-d954e406975d.png"
              alt="Autoclone Design Process Flow Diagram"
              className="w-full h-auto transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300 flex items-start justify-start p-4">
              <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/80 backdrop-blur-sm text-white px-4 py-3 rounded-md shadow-lg">
                <p className="text-base font-semibold">Design process flow</p>
                <p className="text-sm text-white/90">Complete user research and prototyping workflow</p>
              </div>
            </div>
          </div>
        </div>
        <p className="text-foreground/80 mb-4">
          I created and tested multiple iterations focusing on:
        </p>
        <div className="grid md:grid-cols-2 gap-3">
          {[
            "Clear and accessible <strong>navigation</strong>",
            "Visual clarity of <strong>diagnostic data</strong>",
            "Smooth <strong>AI assistant accessibility</strong> from any main page",
            "Modular and customizable <strong>dashboard components</strong>"
          ].map((item, index) => (
            <div key={index} className="flex items-start gap-3 p-3 bg-accent/30 rounded-lg">
              <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
              <span className="text-foreground/80"><SafeTextRenderer text={item} /></span>
            </div>
          ))}
        </div>
      </section>

      {/* Final Prototype Walkthrough */}
      <section>
        <div className="flex items-center gap-3 mb-6">
          <Car className="h-6 w-6 text-primary" />
          <h3 className="text-2xl font-bold text-foreground">Final prototype walkthrough</h3>
        </div>
        <div className="space-y-3 mb-6">
          {[
            "<strong>Login/Register</strong> – Secure authentication for new and returning users",
            "<strong>OBD-II Connect</strong> – Automatic profile creation using vehicle data and AI analysis",
            "<strong>Dashboard</strong> – Vehicle health overview, quick actions, and daily summary",
            "<strong>Diagnostics</strong> – Detailed status of engine, battery, tires, and warnings",
            "<strong>Analytics</strong> – Fuel efficiency, system wear, mileage, and driving behavior graphs",
            "<strong>Optimization</strong> – Adjustable sliders and toggles for performance, responsiveness, personalization, and safety",
            "<strong>AI Assistant</strong> – Sticky button accessible on main pages for real-time Q&A and troubleshooting"
          ].map((item, index) => (
            <div key={index} className="flex items-start gap-3 p-3 bg-accent/30 rounded-lg">
              <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
              <span className="text-foreground/80"><SafeTextRenderer text={item} /></span>
            </div>
          ))}
        </div>
        <div className="flex justify-center my-8">
          <img
            src="/lovable-uploads/d0d4685c-21a5-413b-868f-3e584d0a99ff.png"
            alt="Autoclone UI mockup gallery - Five mobile screens showing optimization settings, login, analytics dashboard, and welcome screen"
            className="w-full max-w-6xl h-auto"
          />
        </div>
      </section>

      {/* AI Assistant Feature */}
      <section>
        <div className="flex items-center gap-3 mb-6">
          <MessageCircle className="h-6 w-6 text-primary" />
          <h3 className="text-2xl font-bold text-foreground">AI Assistant feature</h3>
        </div>
        <div className="space-y-6 my-8">
          <div className="flex justify-center">
            <img
              src="/lovable-uploads/609233a1-20e6-47df-9be6-bf7ef3c78e39.png"
              alt="Autoclone AI Assistant Sparky - Three mobile screens showing the AI chat interface for car diagnostics and troubleshooting"
              className="w-full max-w-4xl h-auto"
            />
          </div>
        </div>
        <p className="text-foreground/80">
          From any main page, users can access the AI assistant to ask questions about their car, 
          receive troubleshooting steps, or get optimization suggestions.
        </p>
      </section>

      {/* Summary */}
      <section className="bg-accent/50 rounded-lg p-8">
        <div className="flex items-center gap-3 mb-6">
          <Trophy className="h-6 w-6 text-primary" />
          <h3 className="text-2xl font-bold text-foreground">Summary</h3>
        </div>
        <div className="space-y-4">
          <p className="text-foreground/80 leading-relaxed text-lg">
            Autoclone merges <strong>real-time diagnostics</strong>, <strong>AI-powered guidance</strong>, and 
            customizable optimization tools into one platform. Designed with both casual drivers and enthusiasts 
            in mind, it offers a seamless experience from setup to advanced performance tuning.
          </p>
          <p className="text-foreground/80 leading-relaxed text-lg">
            The platform helps users better <strong>understand</strong>, <strong>maintain</strong>, 
            and <strong>enhance</strong> their vehicles through intelligent, data-driven insights 
            and personalized recommendations.
          </p>
        </div>
      </section>

      {/* Credits */}
      <section className="text-center py-6 border-t border-border">
        <p className="text-sm text-muted-foreground">
          Vehicle model courtesy of{" "}
          <a
            href="https://sketchfab.com/BlackSnow02"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:text-primary/80 transition-colors duration-200"
          >
            BlackSnow02
          </a>
          {" "}on Sketchfab
        </p>
      </section>

      {/* Collapse Button */}
      {onCollapse && (
        <div className="text-center pt-8">
          <button
            onClick={onCollapse}
            className="group inline-flex items-center text-blue-400 hover:text-blue-300 font-medium transition-colors duration-200"
          >
            Collapse details
            <ChevronRight className="ml-1 h-4 w-4 transition-transform duration-200 rotate-90" />
          </button>
        </div>
      )}
    </div>
  );
};

export default AutocloneCaseStudy;