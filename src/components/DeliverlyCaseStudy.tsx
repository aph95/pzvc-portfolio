import { Smartphone, Target, Search, PenTool, Palette, Package, Trophy, Cog } from 'lucide-react';

const DeliverlyCaseStudy = () => {
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
        <h2 className="text-3xl font-bold text-foreground mb-4">Deliverly</h2>
        <p className="text-lg text-muted-foreground">
          A driver-first mobile app concept focused on fixing what's broken in food delivery apps
        </p>
      </div>

      {/* Tools Used */}
      <div className="bg-accent/50 rounded-lg p-6">
        <div className="flex items-center gap-3 mb-4">
          <Cog className="h-6 w-6 text-primary" />
          <h3 className="text-xl font-semibold text-foreground">Tools Used</h3>
        </div>
        <p className="text-muted-foreground">
          Software: Adobe Illustrator, Figma, Draw.io
        </p>
      </div>

      {/* Background */}
      <section>
        <div className="flex items-center gap-3 mb-6">
          <Smartphone className="h-6 w-6 text-primary" />
          <h3 className="text-xl font-semibold text-foreground">Background</h3>
        </div>
        <div className="space-y-4">
          <p className="text-muted-foreground leading-relaxed">
            While working as a delivery driver for a major Swedish food delivery company during my studies in digital design, 
            I encountered daily frustrations caused by poorly designed apps and tools. The workflow was not optimized for 
            real-world use: small tap targets, non-intuitive flows, and an overall lack of empathy for the driver's experience.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Deliverly emerged from a desire to improve—not replace—these tools, by focusing on iterative betterment of the 
            most frustrating aspects from the driver's perspective.
          </p>
        </div>
      </section>

      {/* Project Goals */}
      <section>
        <div className="flex items-center gap-3 mb-6">
          <Target className="h-6 w-6 text-primary" />
          <h3 className="text-xl font-semibold text-foreground">Project Goals</h3>
        </div>
        <div className="grid md:grid-cols-2 gap-3">
          {[
            "Streamline task flow and reduce cognitive load",
            "Improve one-handed usability for mobile operation during movement",
            "Provide clear, readable task queues and delivery states",
            "Increase driver confidence through better feedback and visual cues"
          ].map((goal, index) => (
            <div key={index} className="flex items-start gap-3 p-3 bg-accent/30 rounded-lg">
              <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
              <span className="text-muted-foreground">{goal}</span>
            </div>
          ))}
        </div>
        <PlaceholderSection title="Visual showing user goals, personas, or design values" />
      </section>

      {/* Research & Field Insights */}
      <section>
        <div className="flex items-center gap-3 mb-6">
          <Search className="h-6 w-6 text-primary" />
          <h3 className="text-xl font-semibold text-foreground">Research & Field Insights</h3>
        </div>
        <p className="text-muted-foreground mb-4">
          Being embedded in the delivery environment gave me direct access to:
        </p>
        <div className="space-y-3 mb-4">
          {[
            "Daily workflow pain points",
            "Informal interviews and ride-along conversations with fellow drivers",
            "Real-world testing of various company apps"
          ].map((item, index) => (
            <div key={index} className="flex items-start gap-3 p-3 bg-accent/30 rounded-lg">
              <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
              <span className="text-muted-foreground">{item}</span>
            </div>
          ))}
        </div>
        <div className="p-4 bg-primary/10 border-l-4 border-primary rounded-r-lg">
          <p className="text-muted-foreground italic">
            This firsthand exposure grounded my understanding in practical reality, forming the core of the design approach.
          </p>
        </div>
        <PlaceholderSection title="Journey map, quotes, or field notes" />
      </section>

      {/* Wireframing & Structure */}
      <section>
        <div className="flex items-center gap-3 mb-6">
          <PenTool className="h-6 w-6 text-primary" />
          <h3 className="text-xl font-semibold text-foreground">Wireframing & Structure</h3>
        </div>
        <p className="text-muted-foreground mb-4">
          Before jumping into high-fidelity design, a complete wireframe of the app was created, exploring:
        </p>
        <div className="grid md:grid-cols-2 gap-3">
          {[
            "Task flow logic",
            "Button layout optimized for thumb reach",
            "Visual hierarchy for attention during fast-paced situations",
            "UX logic for handling unpredictable events (e.g., address changes, order delays)"
          ].map((item, index) => (
            <div key={index} className="flex items-start gap-3 p-3 bg-accent/30 rounded-lg">
              <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
              <span className="text-muted-foreground">{item}</span>
            </div>
          ))}
        </div>
        <PlaceholderSection title="Wireframe page or structure overview" />
      </section>

      {/* Design Exploration & Iteration */}
      <section>
        <div className="flex items-center gap-3 mb-6">
          <Package className="h-6 w-6 text-primary" />
          <h3 className="text-xl font-semibold text-foreground">Design Exploration & Iteration</h3>
        </div>
        <p className="text-muted-foreground mb-4">
          After wireframing, I moved into refining and testing design elements including:
        </p>
        <div className="grid md:grid-cols-2 gap-3 mb-4">
          {[
            "Typography sizing for outdoor readability",
            "Microinteractions for confirming tasks",
            "System feedback for errors and rerouting",
            "Spacing and contrast for glanceable information"
          ].map((item, index) => (
            <div key={index} className="flex items-start gap-3 p-3 bg-accent/30 rounded-lg">
              <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
              <span className="text-muted-foreground">{item}</span>
            </div>
          ))}
        </div>
        <div className="p-4 bg-primary/10 border-l-4 border-primary rounded-r-lg">
          <p className="text-muted-foreground italic">
            I conducted multiple informal feedback sessions with former co-workers and design peers to iterate on layout, text, and overall usability.
          </p>
        </div>
        <PlaceholderSection title="Screens showing early vs refined UI, test feedback summary" />
      </section>

      {/* Visual Identity & Branding */}
      <section>
        <div className="flex items-center gap-3 mb-6">
          <Palette className="h-6 w-6 text-primary" />
          <h3 className="text-xl font-semibold text-foreground">Visual Identity & Branding</h3>
        </div>
        <p className="text-muted-foreground mb-4">
          Deliverly's visual identity was built to reflect:
        </p>
        <div className="grid md:grid-cols-2 gap-3">
          {[
            "Function over flair",
            "Calm, low-distraction color schemes",
            "Bold iconography for clarity under pressure",
            "Consistency between touch targets and visual rhythm"
          ].map((item, index) => (
            <div key={index} className="flex items-start gap-3 p-3 bg-accent/30 rounded-lg">
              <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
              <span className="text-muted-foreground">{item}</span>
            </div>
          ))}
        </div>
        <PlaceholderSection title="Logo, palette, or brand style tile" />
      </section>

      {/* Final Prototype */}
      <section>
        <div className="flex items-center gap-3 mb-6">
          <Smartphone className="h-6 w-6 text-primary" />
          <h3 className="text-xl font-semibold text-foreground">Final Prototype</h3>
        </div>
        <p className="text-muted-foreground mb-4">
          The final prototype includes:
        </p>
        <div className="space-y-3 mb-6">
          {[
            "A real-time driver dashboard with delivery queue",
            "One-thumb flows for confirmation and pickup",
            "Feedback system for delays and customer contact",
            "Simple error handling and progress tracking"
          ].map((item, index) => (
            <div key={index} className="flex items-start gap-3 p-3 bg-accent/30 rounded-lg">
              <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
              <span className="text-muted-foreground">{item}</span>
            </div>
          ))}
        </div>
        <div className="p-4 bg-yellow-500/10 border-l-4 border-yellow-500 rounded-r-lg">
          <p className="text-muted-foreground italic">
            <strong>Note:</strong> Deliverly is not intended to be a fully complete application—rather, it serves as an 
            iterative rethinking of key problem areas in current delivery tools, designed through the lens of real driver pain points.
          </p>
        </div>
        <PlaceholderSection title="Screenshots from final prototype" />
      </section>

      {/* Summary */}
      <section className="bg-accent/50 rounded-lg p-8">
        <div className="flex items-center gap-3 mb-6">
          <Trophy className="h-6 w-6 text-primary" />
          <h3 className="text-xl font-semibold text-foreground">Summary</h3>
        </div>
        <div className="space-y-4">
          <p className="text-muted-foreground leading-relaxed text-lg">
            Deliverly is a UX-first concept rooted in direct delivery experience and iterative design practice. 
            It represents a vision of what food delivery tools could become if they truly prioritized the user 
            at the heart of the process: the driver.
          </p>
          <p className="text-muted-foreground leading-relaxed text-lg">
            This project highlights how small, thoughtful adjustments—based on empathy and field insight—can 
            make an outsized impact on daily user experience.
          </p>
        </div>
      </section>
    </div>
  );
};

export default DeliverlyCaseStudy;