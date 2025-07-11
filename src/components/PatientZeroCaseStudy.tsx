import { Play, Users, Target, Lightbulb, Cog, Eye, GitBranch, Package, Trophy } from 'lucide-react';

const PatientZeroCaseStudy = () => {
  const sections = [
    {
      icon: Cog,
      title: "Tools Used",
      content: "Software: Adobe Illustrator, Adobe XD, Draw.io, Adobe Premiere Pro, Adobe After Effects"
    },
    {
      icon: Target,
      title: "Project Goals",
      content: "To guide the design of Patient Zero, we defined the following goals:",
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
      content: "We conducted an initial scan of:",
      list: [
        "Existing games in the location-based and phygital space",
        "Scientific articles on game design, child psychology, and immersive play"
      ]
    },
    {
      icon: Users,
      title: "Game & Play Analysis", 
      content: "We analyzed:",
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
      content: "We created and tested 9 unique prototypes focusing on:",
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
      content: "We conducted:",
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
        <p className="text-lg text-muted-foreground">
          A phygital infection-based game using wearable technology and directional audio
        </p>
      </div>

      {/* Tools Used */}
      <div className="bg-accent/50 rounded-lg p-6">
        <div className="flex items-center gap-3 mb-4">
          <Cog className="h-6 w-6 text-primary" />
          <h3 className="text-xl font-semibold text-foreground">Tools Used</h3>
        </div>
        <p className="text-muted-foreground">
          Software: Adobe Illustrator, Adobe XD, Draw.io, Adobe Premiere Pro, Adobe After Effects
        </p>
      </div>

      {/* Project Goals */}
      <section>
        <div className="flex items-center gap-3 mb-6">
          <Target className="h-6 w-6 text-primary" />
          <h3 className="text-xl font-semibold text-foreground">Project Goals</h3>
        </div>
        <p className="text-muted-foreground mb-4">
          To guide the design of Patient Zero, we defined the following goals:
        </p>
        <ul className="grid md:grid-cols-2 gap-3">
          {[
            "Promote social interaction and collaboration",
            "Stimulate strategic thinking", 
            "Create a sense of positive, experiential stress",
            "Increase replayability through varied challenges"
          ].map((goal, index) => (
            <li key={index} className="flex items-start gap-3 p-3 bg-accent/30 rounded-lg">
              <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
              <span className="text-muted-foreground">{goal}</span>
            </li>
          ))}
        </ul>
        <PlaceholderSection title="Moodboard or visual goal diagram" />
      </section>

      {/* Research & Trend Analysis */}
      <section>
        <div className="flex items-center gap-3 mb-6">
          <Eye className="h-6 w-6 text-primary" />
          <h3 className="text-xl font-semibold text-foreground">Research & Trend Analysis</h3>
        </div>
        <p className="text-muted-foreground mb-4">We conducted an initial scan of:</p>
        <div className="space-y-3">
          {[
            "Existing games in the location-based and phygital space",
            "Scientific articles on game design, child psychology, and immersive play"
          ].map((item, index) => (
            <div key={index} className="flex items-start gap-3 p-3 bg-accent/30 rounded-lg">
              <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
              <span className="text-muted-foreground">{item}</span>
            </div>
          ))}
        </div>
        <PlaceholderSection title="Screenshots or links to key references" />
      </section>

      {/* Game & Play Analysis */}
      <section>
        <div className="flex items-center gap-3 mb-6">
          <Users className="h-6 w-6 text-primary" />
          <h3 className="text-xl font-semibold text-foreground">Game & Play Analysis</h3>
        </div>
        <p className="text-muted-foreground mb-4">We analyzed:</p>
        <div className="space-y-3">
          {[
            "Popular social and physical-digital games",
            "Gameplay mechanics and user motivation",
            "Opportunities for strategic tension and engagement"
          ].map((item, index) => (
            <div key={index} className="flex items-start gap-3 p-3 bg-accent/30 rounded-lg">
              <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
              <span className="text-muted-foreground">{item}</span>
            </div>
          ))}
        </div>
        <PlaceholderSection title="Competitive game breakdown or mechanic diagrams" />
      </section>

      {/* Initial Concept Development */}
      <section>
        <div className="flex items-center gap-3 mb-6">
          <Lightbulb className="h-6 w-6 text-primary" />
          <h3 className="text-xl font-semibold text-foreground">Initial Concept Development</h3>
        </div>
        <p className="text-muted-foreground mb-4">Several early design directions were explored, including:</p>
        <div className="space-y-3">
          {[
            "Infection-based movement mechanics",
            "Directional audio as a gameplay feature", 
            "Real-world cooperation and decision-making"
          ].map((item, index) => (
            <div key={index} className="flex items-start gap-3 p-3 bg-accent/30 rounded-lg">
              <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
              <span className="text-muted-foreground">{item}</span>
            </div>
          ))}
        </div>
        <PlaceholderSection title="Concept sketches or UX journey map" />
      </section>

      {/* Rapid Prototyping */}
      <section>
        <div className="flex items-center gap-3 mb-6">
          <Package className="h-6 w-6 text-primary" />
          <h3 className="text-xl font-semibold text-foreground">Rapid Prototyping</h3>
        </div>
        <p className="text-muted-foreground mb-4">We created and tested 9 unique prototypes focusing on:</p>
        <div className="grid md:grid-cols-2 gap-3">
          {[
            "Game pacing",
            "Real-world interaction",
            "One-handed interaction models",
            "Strategic variability"
          ].map((item, index) => (
            <div key={index} className="flex items-start gap-3 p-3 bg-accent/30 rounded-lg">
              <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
              <span className="text-muted-foreground">{item}</span>
            </div>
          ))}
        </div>
        <PlaceholderSection title="Prototype screenshots or testing notes" />
      </section>

      {/* Observation & Iterative Feedback */}
      <section>
        <div className="flex items-center gap-3 mb-6">
          <Eye className="h-6 w-6 text-primary" />
          <h3 className="text-xl font-semibold text-foreground">Observation & Iterative Feedback</h3>
        </div>
        <p className="text-muted-foreground mb-4">We conducted:</p>
        <div className="space-y-3 mb-4">
          {[
            "An observation study",
            "Iterative feedback sessions with design students"
          ].map((item, index) => (
            <div key={index} className="flex items-start gap-3 p-3 bg-accent/30 rounded-lg">
              <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
              <span className="text-muted-foreground">{item}</span>
            </div>
          ))}
        </div>
        <div className="p-4 bg-primary/10 border-l-4 border-primary rounded-r-lg">
          <p className="text-muted-foreground italic">
            Key insights helped refine user experience and system clarity.
          </p>
        </div>
        <PlaceholderSection title="Workshop photos or quotes" />
      </section>

      {/* Game Flow Design */}
      <section>
        <div className="flex items-center gap-3 mb-6">
          <GitBranch className="h-6 w-6 text-primary" />
          <h3 className="text-xl font-semibold text-foreground">Game Flow Design</h3>
        </div>
        <p className="text-muted-foreground mb-4">A detailed game flow was created to finalize:</p>
        <div className="grid md:grid-cols-2 gap-3">
          {[
            "Role logic (human/zombie)",
            "Infection timelines and recovery logic",
            "Boundary violations and stealth visibility",
            "Win conditions and replay triggers"
          ].map((item, index) => (
            <div key={index} className="flex items-start gap-3 p-3 bg-accent/30 rounded-lg">
              <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
              <span className="text-muted-foreground">{item}</span>
            </div>
          ))}
        </div>
        <PlaceholderSection title="Flowchart (image or embedded visual)" />
      </section>

      {/* Final Build & Demo */}
      <section>
        <div className="flex items-center gap-3 mb-6">
          <Play className="h-6 w-6 text-primary" />
          <h3 className="text-xl font-semibold text-foreground">Final Build & Demo</h3>
        </div>
        <p className="text-muted-foreground mb-4">The final product included:</p>
        <div className="space-y-3">
          {[
            "Functional mechanics",
            "Visual identity and logo",
            "A walkthrough demo video"
          ].map((item, index) => (
            <div key={index} className="flex items-start gap-3 p-3 bg-accent/30 rounded-lg">
              <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
              <span className="text-muted-foreground">{item}</span>
            </div>
          ))}
        </div>
        <PlaceholderSection title="Logo, UI screenshots, and embedded video" />
      </section>

      {/* Summary */}
      <section className="bg-accent/50 rounded-lg p-8">
        <div className="flex items-center gap-3 mb-6">
          <Trophy className="h-6 w-6 text-primary" />
          <h3 className="text-xl font-semibold text-foreground">Summary</h3>
        </div>
        <p className="text-muted-foreground leading-relaxed text-lg">
          Patient Zero blends real-world activity, strategic design, and psychological research into a dynamic, 
          phygital game experience. Grounded in research and shaped by user testing, it's designed to provoke 
          positive stress, teamwork, and replayability.
        </p>
      </section>
    </div>
  );
};

export default PatientZeroCaseStudy;