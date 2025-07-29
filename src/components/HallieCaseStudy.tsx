import React from 'react';
import { Users, Compass, Zap, Target, BookOpen, Lightbulb, Layers, Star, Trophy, Cog, ChevronRight, Download } from 'lucide-react';
import { SafeTextRenderer } from '../lib/safeTextRenderer';
import { Button } from '@/components/ui/button';

interface HallieCaseStudyProps {
  onCollapse?: () => void;
}

const HallieCaseStudy: React.FC<HallieCaseStudyProps> = ({ onCollapse }) => {

  return (
    <div className="space-y-12">
      {/* Header */}
      <div className="text-center">
        <h2 className="text-3xl font-bold text-foreground mb-4">Hallie</h2>
        <p className="text-lg text-foreground/70">
          An AI-powered study companion for students aged 16–25
        </p>
      </div>

      {/* Tools Used */}
      <div className="bg-accent/50 rounded-lg p-6">
        <div className="flex items-center gap-3 mb-4">
          <Cog className="h-6 w-6 text-primary" />
          <h3 className="text-2xl font-bold text-foreground">Tools used</h3>
        </div>
        <p className="text-foreground/80">
          <strong>Software:</strong> Adobe XD, Adobe Illustrator, Draw.io
        </p>
      </div>

      {/* Background */}
      <section>
        <div className="flex items-center gap-3 mb-6">
          <Target className="h-6 w-6 text-primary" />
          <h3 className="text-2xl font-bold text-foreground">Background</h3>
        </div>
        <div className="space-y-4">
          <p className="text-foreground/80 leading-relaxed">
            <SafeTextRenderer text="Hallie is inspired by the underlying technology behind Rewind.ai, which passively captures and analyzes digital activity to create contextual awareness. However, where Rewind is aimed at a broader, often professional productivity-focused audience, Hallie was reimagined for students aged 16–25, specifically within **self-directed study contexts**." />
          </p>
          <p className="text-foreground/80 leading-relaxed">
            <SafeTextRenderer text="The design reframes the goal — not as information recall, but as supporting **focus**, **motivation**, and **healthy reflection**." />
          </p>
        </div>
      </section>

      {/* Concept */}
      <section>
        <div className="flex items-center gap-3 mb-6">
          <Lightbulb className="h-6 w-6 text-primary" />
          <h3 className="text-2xl font-bold text-foreground">Concept</h3>
        </div>
        <div className="space-y-4">
          <p className="text-foreground/80 leading-relaxed">
            <SafeTextRenderer text="Hallie acts like something between a **digital hall monitor** and a **friendly study companion** — not judgmental, but gently present and helpful. With the support of AI, Hallie identifies signs of distraction, helps understand study content, and offers smart, context-aware nudges and resources." />
          </p>
          <p className="text-foreground/80 leading-relaxed">
            <SafeTextRenderer text="The aim is to provide **non-intrusive**, **emotionally intelligent support** to students navigating solo study sessions, helping them stay present, confident, and motivated." />
          </p>
        </div>
      </section>

      {/* Target Group */}
      <section>
        <div className="flex items-center gap-3 mb-6">
          <Users className="h-6 w-6 text-primary" />
          <h3 className="text-2xl font-bold text-foreground">Target group</h3>
        </div>
        <div className="space-y-4 mb-4">
          <p className="text-foreground/80"><SafeTextRenderer text="**Age:** 16–25 years" /></p>
          <p className="text-foreground/80"><SafeTextRenderer text="**Context:** High school, college, or university students" /></p>
          <p className="text-foreground/80"><SafeTextRenderer text="**Technology habits:** Comfortable with digital tools, often multitasking across tabs and apps" /></p>
        </div>
        <p className="text-foreground/80 mb-4"><strong>Needs:</strong></p>
        <div className="space-y-3">
          {[
            "Support in maintaining <strong>focus</strong> during independent study",
            "<strong>Soft accountability</strong> that feels supportive, not judgmental",
            "<strong>Encouragement</strong> and motivation",
            "<strong>Smart nudges</strong> when procrastination begins",
            "Space for <strong>reflection</strong> on study habits and productivity"
          ].map((item, index) => (
            <div key={index} className="flex items-start gap-3 p-3 bg-accent/30 rounded-lg">
              <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
              <span className="text-foreground/80"><SafeTextRenderer text={item} /></span>
            </div>
          ))}
        </div>
        
      </section>

      {/* Technology Scouting */}
      <section>
        <div className="flex items-center gap-3 mb-6">
          <Compass className="h-6 w-6 text-primary" />
          <h3 className="text-2xl font-bold text-foreground">Technology scouting</h3>
        </div>
        <p className="text-foreground/80 mb-4">Before designing Hallie, I explored existing tools and technologies related to:</p>
        <div className="space-y-3">
          {[
            "<strong>Passive attention tracking</strong>",
            "<strong>AI-based behavior analysis</strong>",
            "<strong>Digital wellbeing systems</strong> for students",
            "Tools like <strong>Rewind.ai</strong> and other productivity assistants"
          ].map((item, index) => (
            <div key={index} className="flex items-start gap-3 p-3 bg-accent/30 rounded-lg">
              <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
              <span className="text-foreground/80"><SafeTextRenderer text={item} /></span>
            </div>
          ))}
        </div>
        
      </section>

      {/* Early Structure & Flow */}
      <section>
        <div className="flex items-center gap-3 mb-6">
          <Layers className="h-6 w-6 text-primary" />
          <h3 className="text-2xl font-bold text-foreground">Early structure & flow</h3>
        </div>
        <p className="text-foreground/80 mb-4">I created a <strong>flow sheet</strong> to establish how Hallie detects context, processes it, and chooses appropriate interventions such as nudges, encouragement, or reflection prompts.</p>
        <div className="my-8 space-y-4">
          <div className="relative group rounded-lg border border-border bg-background shadow-sm overflow-hidden">
            <img
              src="/lovable-uploads/0d01b392-6920-4222-9a5f-841a94c3202d.png"
              alt="Hallie AI Study Flow Diagram"
              className="w-full h-auto transition-transform duration-300 group-hover:scale-105"
            />
            {/* Hover overlay with label */}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300 flex items-start justify-start p-4">
              <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/80 backdrop-blur-sm text-white px-4 py-3 rounded-md shadow-lg">
                <p className="text-base font-semibold">Hallie AI study flow</p>
                <p className="text-sm text-white/90">Complete decision tree and AI intervention logic</p>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <Button
              onClick={() => {
                const link = document.createElement('a');
                link.href = '/lovable-uploads/0d01b392-6920-4222-9a5f-841a94c3202d.png';
                link.download = 'hallie-ai-study-flow.png';
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
              }}
              variant="outline"
              className="group border-primary/20 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            >
              <Download className="h-4 w-4 mr-2" />
              Download full AI study flow
            </Button>
          </div>
        </div>
      </section>

      {/* User Journey Mapping */}
      <section>
        <div className="flex items-center gap-3 mb-6">
          <BookOpen className="h-6 w-6 text-primary" />
          <h3 className="text-2xl font-bold text-foreground">User journey mapping</h3>
        </div>
        <p className="text-foreground/80 mb-6">
          To visualize the user's emotional experience and digital behaviors throughout a study session, a user journey map was created. This helped align the AI's interventions with real user needs and moods.
        </p>
        <div className="my-8 space-y-4">
          <div className="relative group rounded-lg border border-border bg-background shadow-sm overflow-hidden">
            <img
              src="/lovable-uploads/5124184e-c1fe-41e5-9a1a-83307d122153.png"
              alt="Hallie User Journey Map - Study Session Emotional Experience"
              className="w-full h-auto transition-transform duration-300 group-hover:scale-105"
            />
            {/* Hover overlay with label */}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300 flex items-start justify-start p-4">
              <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/80 backdrop-blur-sm text-white px-4 py-3 rounded-md shadow-lg">
                <p className="text-base font-semibold">User journey map</p>
                <p className="text-sm text-white/90">Emotional experience and digital behaviors during study sessions</p>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <Button
              onClick={() => {
                const link = document.createElement('a');
                link.href = '/lovable-uploads/5124184e-c1fe-41e5-9a1a-83307d122153.png';
                link.download = 'hallie-user-journey-map.png';
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
              }}
              variant="outline"
              className="group border-primary/20 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            >
              <Download className="h-4 w-4 mr-2" />
              Download user journey map
            </Button>
          </div>
        </div>
      </section>

      {/* Storyboard */}
      <section>
        <div className="flex items-center gap-3 mb-6">
          <Zap className="h-6 w-6 text-primary" />
          <h3 className="text-2xl font-bold text-foreground">Storyboard</h3>
        </div>
        <p className="text-foreground/80 mb-6">
          A storyboard was developed to illustrate a typical user's interaction with Hallie across different phases of a study session — from focus to distraction, recovery, and reflection.
        </p>
        <div className="my-8">
          <div className="relative group rounded-lg border border-border bg-background shadow-sm overflow-hidden">
            <img
              src="/lovable-uploads/caaa6cc6-608d-4b68-80b4-e562c7f279d4.png"
              alt="Hallie Storyboard - User Journey Through Study Session"
              className="w-full h-auto transition-transform duration-300 group-hover:scale-105"
            />
            {/* Hover overlay with label */}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300 flex items-start justify-start p-4">
              <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/80 backdrop-blur-sm text-white px-4 py-3 rounded-md shadow-lg">
                <p className="text-base font-semibold">Hallie storyboard</p>
                <p className="text-sm text-white/90">User journey from focus to distraction and recovery</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Prototype Development */}
      <section>
        <div className="flex items-center gap-3 mb-6">
          <Star className="h-6 w-6 text-primary" />
          <h3 className="text-2xl font-bold text-foreground">Prototype development</h3>
        </div>
        <p className="text-foreground/80 mb-4">Using insights from the research and flow design, I developed:</p>
        <div className="space-y-3 mb-6">
          {[
            "<strong>Low-fidelity prototypes</strong> to map basic interaction flows and AI responses",
            "<strong>High-fidelity prototypes</strong> featuring Hallie's tone of voice, visual identity, and UI behavior"
          ].map((item, index) => (
            <div key={index} className="flex items-start gap-3 p-3 bg-accent/30 rounded-lg">
              <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
              <span className="text-foreground/80"><SafeTextRenderer text={item} /></span>
            </div>
          ))}
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="my-8">
            <div className="relative group rounded-lg border border-border bg-background shadow-sm overflow-hidden">
              <img
                src="/lovable-uploads/12534ce3-fff7-4557-ab26-45a422e494df.png"
                alt="Hallie Low Fidelity Prototype"
                className="w-full h-auto transition-transform duration-300 group-hover:scale-105"
              />
              {/* Hover overlay with label */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300 flex items-start justify-start p-4">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/80 backdrop-blur-sm text-white px-4 py-3 rounded-md shadow-lg">
                  <p className="text-base font-semibold">Low fidelity prototype</p>
                  <p className="text-sm text-white/90">Basic interaction flows and AI responses</p>
                </div>
              </div>
            </div>
          </div>
          <div className="my-8">
            <div className="relative group rounded-lg border border-border bg-background shadow-sm overflow-hidden">
              <img
                src="/lovable-uploads/16bd1c21-598c-463c-aa29-940daa4b0aa8.png"
                alt="Hallie High Fidelity Prototype"
                className="w-full h-auto transition-transform duration-300 group-hover:scale-105"
              />
              {/* Hover overlay with label */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300 flex items-start justify-start p-4">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/80 backdrop-blur-sm text-white px-4 py-3 rounded-md shadow-lg">
                  <p className="text-base font-semibold">High fidelity prototype</p>
                  <p className="text-sm text-white/90">Hallie's tone, visual identity, and UI behavior</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Summary */}
      <section className="bg-accent/50 rounded-lg p-8">
        <div className="flex items-center gap-3 mb-6">
          <Trophy className="h-6 w-6 text-primary" />
          <h3 className="text-2xl font-bold text-foreground">Summary</h3>
        </div>
        <div className="space-y-4">
          <p className="text-foreground/80 leading-relaxed text-lg">
            <SafeTextRenderer text="Hallie is not a strict productivity tool — it's a gentle, **human-centered AI companion** for independent learners. Designed with empathy, Hallie recognizes that study struggles aren't failures, and aims to support students in regaining balance when digital distractions interfere." />
          </p>
          <p className="text-foreground/80 leading-relaxed text-lg">
            <SafeTextRenderer text="The project explores how **context-aware AI** can create meaningful, **non-invasive support systems** tailored to the lives of modern students." />
          </p>
        </div>
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

export default HallieCaseStudy;