import { Play, Users, Target, Lightbulb, Cog, Eye, GitBranch, Package, Trophy, ChevronRight, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { SafeTextRenderer } from '@/lib/safeTextRenderer';

interface PatientZeroCaseStudyProps {
  onCollapse?: () => void;
}

const PatientZeroCaseStudy = ({ onCollapse }: PatientZeroCaseStudyProps) => {
  const sections = [
    {
      icon: Cog,
      title: "Tools Used",
      content: "Software: Adobe Illustrator, Adobe XD, Draw.io, Adobe Premiere Pro, Adobe After Effects"
    },
    {
      icon: Target,
      title: "Project Goals",
      content: "To guide the design of Patient Zero, I defined the following goals:",
      list: [
        "Promote social interaction and collaboration",
        "Stimulate strategic thinking", 
        "Create a sense of positive, experiential stress",
        "Increase replayability through varied challenges"
      ]
    },
    {
      icon: Eye,
      title: "Research & Trend Analysis",
      content: "I conducted an initial scan of:",
      list: [
        "Existing games in the location-based and phygital space",
        "Scientific articles on game design, child psychology, and immersive play"
      ]
    },
    {
      icon: Users,
      title: "Game & Play Analysis", 
      content: "I analyzed:",
      list: [
        "Popular social and physical-digital games",
        "Gameplay mechanics and user motivation",
        "Opportunities for strategic tension and engagement"
      ]
    },
    {
      icon: Lightbulb,
      title: "Initial Concept Development",
      content: "Several early design directions were explored, including:",
      list: [
        "Infection-based movement mechanics",
        "Directional audio as a gameplay feature", 
        "Real-world cooperation and decision-making"
      ]
    },
    {
      icon: Package,
      title: "Rapid Prototyping",
      content: "I created and tested 9 unique prototypes focusing on:",
      list: [
        "Game pacing",
        "Real-world interaction",
        "One-handed interaction models",
        "Strategic variability"
      ]
    },
    {
      icon: Eye,
      title: "Observation & Iterative Feedback",
      content: "I conducted:",
      list: [
        "An observation study",
        "Iterative feedback sessions with design students"
      ],
      note: "Key insights helped refine user experience and system clarity."
    },
    {
      icon: GitBranch,
      title: "Game Flow Design",
      content: "A detailed game flow was created to finalize:",
      list: [
        "Role logic (human/zombie)",
        "Infection timelines and recovery logic",
        "Boundary violations and stealth visibility",
        "Win conditions and replay triggers"
      ]
    },
    {
      icon: Play,
      title: "Final Build & Demo",
      content: "The final product included:",
      list: [
        "Functional mechanics",
        "Visual identity and logo",
        "A walkthrough demo video"
      ]
    }
  ];

  const PlaceholderSection = ({ title }: { title: string }) => (
    <div className="my-8 p-6 border-2 border-dashed border-border rounded-lg bg-accent/30">
      <div className="text-center">
        <div className="w-16 h-16 mx-auto mb-4 bg-muted rounded-lg flex items-center justify-center">
          <Package className="h-8 w-8 text-muted-foreground" />
        </div>
        <p className="text-sm text-muted-foreground font-medium">
          Placeholder: {title}
        </p>
        <p className="text-xs text-muted-foreground/70 mt-1">
          Visual content will be added here
        </p>
      </div>
    </div>
  );

  return (
    <div className="space-y-12">
      {/* Header */}
      <div className="text-center">
        <h2 className="text-3xl font-bold text-foreground mb-4">Patient Zero</h2>
        <p className="text-lg text-foreground/70">
          A phygital infection-based game using wearable technology and directional audio
        </p>
      </div>

      {/* Tools Used */}
      <div className="bg-accent/50 rounded-lg p-6">
        <div className="flex items-center gap-3 mb-4">
          <Cog className="h-6 w-6 text-primary" />
          <h3 className="text-xl font-semibold text-foreground">Tools used</h3>
        </div>
        <p className="text-foreground/80">
          <strong>Software:</strong> Adobe Illustrator, Adobe XD, Draw.io, Adobe Premiere Pro, Adobe After Effects
        </p>
      </div>

      {/* Project Goals */}
      <section>
        <div className="flex items-center gap-3 mb-6">
          <Target className="h-6 w-6 text-primary" />
          <h3 className="text-xl font-semibold text-foreground">Project goals</h3>
        </div>
        <p className="text-foreground/80 mb-4">
          To guide the design of Patient Zero, I defined the following goals:
        </p>
        <ul className="grid md:grid-cols-2 gap-3">
          {[
            "Promote <strong>social interaction</strong> and <strong>collaboration</strong>",
            "Stimulate <strong>strategic thinking</strong>", 
            "Create a sense of positive, <strong>experiential stress</strong>",
            "Increase <strong>replayability</strong> through varied challenges"
          ].map((goal, index) => (
             <li key={index} className="flex items-start gap-3 p-3 bg-accent/30 rounded-lg">
               <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
               <span className="text-foreground/80"><SafeTextRenderer text={goal} /></span>
             </li>
          ))}
        </ul>
        <PlaceholderSection title="Moodboard or visual goal diagram" />
      </section>

      {/* Research & Trend Analysis */}
      <section>
        <div className="flex items-center gap-3 mb-6">
          <Eye className="h-6 w-6 text-primary" />
          <h3 className="text-xl font-semibold text-foreground">Research & trend analysis</h3>
        </div>
        <p className="text-foreground/80 mb-4">I conducted an initial scan of:</p>
        <div className="space-y-3">
          {[
            "Existing games in the <strong>location-based</strong> and <strong>phygital space</strong>",
            "<strong>Scientific articles</strong> on game design, child psychology, and immersive play"
          ].map((item, index) => (
            <div key={index} className="flex items-start gap-3 p-3 bg-accent/30 rounded-lg">
              <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
              <span className="text-foreground/80"><SafeTextRenderer text={item} /></span>
            </div>
          ))}
        </div>
        <PlaceholderSection title="Screenshots or links to key references" />
      </section>

      {/* Game & Play Analysis */}
      <section>
        <div className="flex items-center gap-3 mb-6">
          <Users className="h-6 w-6 text-primary" />
          <h3 className="text-xl font-semibold text-foreground">Game & play analysis</h3>
        </div>
        <p className="text-foreground/80 mb-4">I analyzed:</p>
        <div className="space-y-3">
          {[
            "Popular <strong>social</strong> and <strong>physical-digital games</strong>",
            "<strong>Gameplay mechanics</strong> and user motivation",
            "Opportunities for <strong>strategic tension</strong> and engagement"
          ].map((item, index) => (
            <div key={index} className="flex items-start gap-3 p-3 bg-accent/30 rounded-lg">
              <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
              <span className="text-foreground/80"><SafeTextRenderer text={item} /></span>
            </div>
          ))}
        </div>
        <PlaceholderSection title="Competitive game breakdown or mechanic diagrams" />
      </section>

      {/* Initial Concept Development */}
      <section>
        <div className="flex items-center gap-3 mb-6">
          <Lightbulb className="h-6 w-6 text-primary" />
          <h3 className="text-xl font-semibold text-foreground">Initial concept development</h3>
        </div>
        <p className="text-foreground/80 mb-4">Several early design directions were explored, including:</p>
        <div className="space-y-3">
          {[
            "<strong>Infection-based</strong> movement mechanics",
            "<strong>Directional audio</strong> as a gameplay feature", 
            "<strong>Real-world cooperation</strong> and decision-making"
          ].map((item, index) => (
            <div key={index} className="flex items-start gap-3 p-3 bg-accent/30 rounded-lg">
              <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
              <span className="text-foreground/80"><SafeTextRenderer text={item} /></span>
            </div>
          ))}
        </div>
        <PlaceholderSection title="Concept sketches or UX journey map" />
      </section>

      {/* Rapid Prototyping */}
      <section>
        <div className="flex items-center gap-3 mb-6">
          <Package className="h-6 w-6 text-primary" />
          <h3 className="text-xl font-semibold text-foreground">Rapid prototyping</h3>
        </div>
        <p className="text-foreground/80 mb-4">I created and tested <strong>9 unique prototypes</strong> focusing on:</p>
        <div className="grid md:grid-cols-2 gap-3">
          {[
            "<strong>Game pacing</strong>",
            "<strong>Real-world interaction</strong>",
            "<strong>One-handed interaction</strong> models",
            "<strong>Strategic variability</strong>"
          ].map((item, index) => (
            <div key={index} className="flex items-start gap-3 p-3 bg-accent/30 rounded-lg">
              <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
              <span className="text-foreground/80"><SafeTextRenderer text={item} /></span>
            </div>
          ))}
        </div>
        <PlaceholderSection title="Prototype screenshots or testing notes" />
      </section>

      {/* Observation & Iterative Feedback */}
      <section>
        <div className="flex items-center gap-3 mb-6">
          <Eye className="h-6 w-6 text-primary" />
          <h3 className="text-xl font-semibold text-foreground">Observation & iterative feedback</h3>
        </div>
        <p className="text-foreground/80 mb-4">I conducted:</p>
        <div className="space-y-3 mb-4">
          {[
            "An <strong>observation study</strong>",
            "<strong>Iterative feedback sessions</strong> with design students"
          ].map((item, index) => (
            <div key={index} className="flex items-start gap-3 p-3 bg-accent/30 rounded-lg">
              <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
              <span className="text-foreground/80"><SafeTextRenderer text={item} /></span>
            </div>
          ))}
        </div>
        <div className="p-4 bg-primary/10 border-l-4 border-primary rounded-r-lg">
          <p className="text-foreground/70 italic">
            Key insights helped refine user experience and system clarity.
          </p>
        </div>
        <PlaceholderSection title="Workshop photos or quotes" />
      </section>

      {/* Game Flow Design */}
      <section>
        <div className="flex items-center gap-3 mb-6">
          <GitBranch className="h-6 w-6 text-primary" />
          <h3 className="text-xl font-semibold text-foreground">Game flow design</h3>
        </div>
        <p className="text-foreground/80 mb-4">A detailed <strong>game flow</strong> was created to finalize:</p>
        <div className="grid md:grid-cols-2 gap-3">
          {[
            "<strong>Role logic</strong> (human/zombie)",
            "<strong>Infection timelines</strong> and recovery logic",
            "<strong>Boundary violations</strong> and stealth visibility",
            "<strong>Win conditions</strong> and replay triggers"
          ].map((item, index) => (
            <div key={index} className="flex items-start gap-3 p-3 bg-accent/30 rounded-lg">
              <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
              <span className="text-foreground/80"><SafeTextRenderer text={item} /></span>
            </div>
          ))}
        </div>
        <div className="my-8 space-y-4">
          <div className="relative group rounded-lg border border-border bg-background shadow-sm overflow-hidden">
            <img
              src="/lovable-uploads/3946dae6-46c5-414f-9ae2-b824ae5a64e4.png"
              alt="Patient Zero Gameplay Flow Diagram"
              className="w-full h-auto transition-transform duration-300 group-hover:scale-105"
            />
            {/* Hover overlay with label */}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300 flex items-start justify-start p-4">
              <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/80 backdrop-blur-sm text-white px-4 py-3 rounded-md shadow-lg">
                <p className="text-base font-semibold">Gameplay flow diagram</p>
                <p className="text-sm text-white/90">Complete decision tree and game mechanics</p>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <Button
              onClick={() => {
                const link = document.createElement('a');
                link.href = '/lovable-uploads/3946dae6-46c5-414f-9ae2-b824ae5a64e4.png';
                link.download = 'patient-zero-gameplay-flow.png';
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
              }}
              variant="outline"
              className="group border-primary/20 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            >
              <Download className="h-4 w-4 mr-2" />
              Download full gameplay flow
            </Button>
          </div>
        </div>
      </section>

      {/* Final Build & Demo */}
      <section>
        <div className="flex items-center gap-3 mb-6">
          <Play className="h-6 w-6 text-primary" />
          <h3 className="text-xl font-semibold text-foreground">Final build & demo</h3>
        </div>
        <p className="text-foreground/80 mb-4">The <strong>final product</strong> included:</p>
        <div className="space-y-3">
          {[
            "<strong>Functional mechanics</strong>",
            "<strong>Visual identity</strong> and logo",
            "A walkthrough <strong>demo video</strong>"
          ].map((item, index) => (
            <div key={index} className="flex items-start gap-3 p-3 bg-accent/30 rounded-lg">
              <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
              <span className="text-foreground/80"><SafeTextRenderer text={item} /></span>
            </div>
          ))}
        </div>
        {/* Logo Section */}
        <div className="my-8 p-8">
          <div className="text-center">
            <div className="inline-flex items-center justify-center p-6 bg-white rounded-xl shadow-sm border border-border/10 mb-4 transition-all duration-300 hover:scale-105 hover:shadow-md">
              <img 
                src="/lovable-uploads/e44747aa-508c-4e20-aa1c-32cdc115edf1.png" 
                alt="Patient Zero Logo" 
                className="h-24 w-auto"
              />
            </div>
            <p className="text-sm text-muted-foreground font-medium mb-2">
              Patient Zero Visual Identity
            </p>
            <p className="text-xs text-muted-foreground/70">
              Logo design featuring biohazard symbolism and infection theme
            </p>
          </div>
        </div>
      </section>

      {/* Summary */}
      <section className="bg-accent/50 rounded-lg p-8">
        <div className="flex items-center gap-3 mb-6">
          <Trophy className="h-6 w-6 text-primary" />
          <h3 className="text-xl font-semibold text-foreground">Summary</h3>
        </div>
        <p className="text-foreground/80 leading-relaxed text-lg">
          Patient Zero blends <strong>real-world activity</strong>, <strong>strategic design</strong>, and <strong>psychological research</strong> into a dynamic, 
          <strong>phygital game experience</strong>. Grounded in research and shaped by <strong>user testing</strong>, it's designed to provoke 
          positive stress, teamwork, and <strong>replayability</strong>.
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

export default PatientZeroCaseStudy;