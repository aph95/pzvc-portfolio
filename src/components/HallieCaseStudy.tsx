import React from 'react';
import { Users, Compass, Zap, Target, BookOpen, Lightbulb, Layers, Star } from 'lucide-react';
import { SafeTextRenderer } from '../lib/safeTextRenderer';

interface HallieCaseStudyProps {
  onCollapse?: () => void;
}

const HallieCaseStudy: React.FC<HallieCaseStudyProps> = ({ onCollapse }) => {
  const sections = [
    {
      icon: Target,
      title: "Background",
      content: "Hallie is inspired by the underlying technology behind Rewind.ai, which passively captures and analyzes digital activity to create contextual awareness. However, where Rewind is aimed at a broader, often professional productivity-focused audience, Hallie was reimagined for students aged 16–25, specifically within self-directed study contexts.\n\nThe design reframes the goal — not as information recall, but as supporting focus, motivation, and healthy reflection."
    },
    {
      icon: Lightbulb,
      title: "Concept",
      content: "Hallie acts like something between a digital hall monitor and a friendly study companion — not judgmental, but gently present and helpful. With the support of AI, Hallie identifies signs of distraction, helps understand study content, and offers smart, context-aware nudges and resources.\n\nThe aim is to provide non-intrusive, emotionally intelligent support to students navigating solo study sessions, helping them stay present, confident, and motivated."
    },
    {
      icon: Users,
      title: "Target Group",
      content: "**Age:** 16–25 years\n\n**Context:** High school, college, or university students\n\n**Technology habits:** Comfortable with digital tools, often multitasking across tabs and apps\n\n**Needs:**",
      items: [
        "Support in maintaining focus during independent study",
        "Soft accountability that feels supportive, not judgmental",
        "Encouragement and motivation",
        "Smart nudges when procrastination begins",
        "Space for reflection on study habits and productivity"
      ]
    },
    {
      icon: Compass,
      title: "Technology Scouting",
      content: "Before designing Hallie, I explored existing tools and technologies related to:",
      items: [
        "Passive attention tracking",
        "AI-based behavior analysis",
        "Digital wellbeing systems for students",
        "Tools like Rewind.ai and other productivity assistants"
      ]
    },
    {
      icon: Layers,
      title: "Early Structure & Flow",
      content: "I created a flow sheet to establish how Hallie detects context, processes it, and chooses appropriate interventions such as nudges, encouragement, or reflection prompts."
    },
    {
      icon: BookOpen,
      title: "User Journey Mapping",
      content: "To visualize the user's emotional experience and digital behaviors throughout a study session, a user journey map was created. This helped align the AI's interventions with real user needs and moods."
    },
    {
      icon: Zap,
      title: "Storyboard",
      content: "A storyboard was developed to illustrate a typical user's interaction with Hallie across different phases of a study session — from focus to distraction, recovery, and reflection."
    },
    {
      icon: Star,
      title: "Prototype Development",
      content: "Using insights from the research and flow design, I developed:",
      items: [
        "Low-fidelity prototypes to map basic interaction flows and AI responses",
        "High-fidelity prototypes featuring Hallie's tone of voice, visual identity, and UI behavior"
      ]
    }
  ];

  const PlaceholderSection: React.FC<{ title: string }> = ({ title }) => (
    <div className="bg-accent/30 border border-border rounded-lg p-8 text-center">
      <div className="w-16 h-16 bg-muted rounded-lg mx-auto mb-4 flex items-center justify-center">
        <div className="w-8 h-8 bg-muted-foreground/20 rounded"></div>
      </div>
      <p className="text-muted-foreground font-medium">{title}</p>
    </div>
  );

  return (
    <div className="max-w-4xl mx-auto space-y-12">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4" style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 800 }}>
          Hallie
        </h1>
        <p className="text-xl text-muted-foreground mb-8">
          An AI-powered study companion for students aged 16–25
        </p>
        
        {/* Tools Used */}
        <div className="bg-accent/50 rounded-lg p-6 mb-8">
          <h3 className="font-semibold text-foreground mb-3">Tools Used</h3>
          <p className="text-muted-foreground">
            <strong>Software:</strong> Figma, Adobe Illustrator, Draw.io
          </p>
        </div>
      </div>

      {/* Project Goals */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {sections.slice(0, 4).map((section, index) => (
          <div key={index} className="bg-accent/30 rounded-lg p-6">
            <section.icon className="w-8 h-8 text-primary mb-4" />
            <h3 className="font-semibold text-foreground mb-3">{section.title}</h3>
            <div className="text-sm text-muted-foreground space-y-2">
              <SafeTextRenderer text={section.content} />
              {section.items && (
                <ul className="list-disc list-inside space-y-1 mt-3">
                  {section.items.map((item, itemIndex) => (
                    <li key={itemIndex}>{item}</li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Target Audience Placeholder */}
      <PlaceholderSection title="Target audience illustration or persona summary" />

      {/* Technology Scouting Placeholder */}
      <PlaceholderSection title="Technology scouting overview" />

      {/* Flow Sheet Section */}
      <div className="bg-accent/30 rounded-lg p-8">
        <div className="flex items-center mb-6">
          <Layers className="w-8 h-8 text-primary mr-4" />
          <h3 className="text-2xl font-semibold text-foreground">{sections[4].title}</h3>
        </div>
        <div className="text-muted-foreground mb-6">
          <SafeTextRenderer text={sections[4].content} />
        </div>
        <PlaceholderSection title="Flow sheet diagram" />
      </div>

      {/* User Journey Mapping Section */}
      <div className="bg-accent/30 rounded-lg p-8">
        <div className="flex items-center mb-6">
          <BookOpen className="w-8 h-8 text-primary mr-4" />
          <h3 className="text-2xl font-semibold text-foreground">{sections[5].title}</h3>
        </div>
        <div className="text-muted-foreground mb-6">
          <SafeTextRenderer text={sections[5].content} />
        </div>
        <PlaceholderSection title="User journey map" />
      </div>

      {/* Storyboard Section */}
      <div className="bg-accent/30 rounded-lg p-8">
        <div className="flex items-center mb-6">
          <Zap className="w-8 h-8 text-primary mr-4" />
          <h3 className="text-2xl font-semibold text-foreground">{sections[6].title}</h3>
        </div>
        <div className="text-muted-foreground mb-6">
          <SafeTextRenderer text={sections[6].content} />
        </div>
        <PlaceholderSection title="Storyboard frames" />
      </div>

      {/* Prototype Development Section */}
      <div className="bg-accent/30 rounded-lg p-8">
        <div className="flex items-center mb-6">
          <Star className="w-8 h-8 text-primary mr-4" />
          <h3 className="text-2xl font-semibold text-foreground">{sections[7].title}</h3>
        </div>
        <div className="text-muted-foreground mb-6">
          <SafeTextRenderer text={sections[7].content} />
          {sections[7].items && (
            <ul className="list-disc list-inside space-y-2 mt-4">
              {sections[7].items.map((item, itemIndex) => (
                <li key={itemIndex}>{item}</li>
              ))}
            </ul>
          )}
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          <PlaceholderSection title="Low fidelity prototype screenshots" />
          <PlaceholderSection title="High fidelity prototype screenshots" />
        </div>
      </div>

      {/* Summary */}
      <div className="bg-primary/10 rounded-lg p-8">
        <h3 className="text-2xl font-semibold text-foreground mb-6">Summary</h3>
        <div className="text-muted-foreground leading-relaxed">
          <SafeTextRenderer text="Hallie is not a strict productivity tool — it's a gentle, human-centered AI companion for independent learners. Designed with empathy, Hallie recognizes that study struggles aren't failures, and aims to support students in regaining balance when digital distractions interfere.\n\nThe project explores how context-aware AI can create meaningful, non-invasive support systems tailored to the lives of modern students." />
        </div>
      </div>

      {/* Collapse Button */}
      {onCollapse && (
        <div className="text-center pt-8">
          <button
            onClick={onCollapse}
            className="inline-flex items-center px-6 py-3 bg-accent text-accent-foreground rounded-lg hover:bg-accent/80 transition-colors duration-200"
          >
            Collapse Case Study
          </button>
        </div>
      )}
    </div>
  );
};

export default HallieCaseStudy;