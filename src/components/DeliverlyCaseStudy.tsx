import { Smartphone, Target, Search, PenTool, Palette, Package, Trophy, Cog, ChevronRight } from 'lucide-react';
import { SafeTextRenderer } from '@/lib/safeTextRenderer';

interface DeliverlyCaseStudyProps {
  onCollapse?: () => void;
}

const DeliverlyCaseStudy = ({ onCollapse }: DeliverlyCaseStudyProps) => {
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
        <p className="text-lg text-foreground/70">
          A driver-first mobile app concept focused on fixing what's broken in food delivery apps
        </p>
      </div>

      {/* Tools Used */}
      <div className="bg-accent/50 rounded-lg p-6">
        <div className="flex items-center gap-3 mb-4">
          <Cog className="h-6 w-6 text-primary" />
          <h3 className="text-xl font-semibold text-foreground">Tools used</h3>
        </div>
        <p className="text-foreground/80">
          <strong>Software:</strong> Adobe Illustrator, Figma, Draw.io
        </p>
      </div>

      {/* Background */}
      <section>
        <div className="flex items-center gap-3 mb-6">
          <Smartphone className="h-6 w-6 text-primary" />
          <h3 className="text-xl font-semibold text-foreground">Background</h3>
        </div>
        <div className="space-y-4">
          <p className="text-foreground/80 leading-relaxed">
            While working as a <strong>delivery driver</strong> for a major Swedish food delivery company during my studies in digital design, 
            I encountered daily frustrations caused by <strong>poorly designed apps</strong> and tools. The workflow was not optimized for 
            <strong>real-world use</strong>: small tap targets, non-intuitive flows, and an overall <strong>lack of empathy</strong> for the driver's experience.
          </p>
          <p className="text-foreground/80 leading-relaxed">
            Deliverly emerged from a desire to <strong>improve—not replace</strong>—these tools, by focusing on <strong>iterative betterment</strong> of the 
            most frustrating aspects from the <strong>driver's perspective</strong>.
          </p>
        </div>
      </section>

      {/* Project Goals */}
      <section>
        <div className="flex items-center gap-3 mb-6">
          <Target className="h-6 w-6 text-primary" />
          <h3 className="text-xl font-semibold text-foreground">Project goals</h3>
        </div>
        <div className="grid md:grid-cols-2 gap-3">
          {[
            "Streamline <strong>task flow</strong> and reduce <strong>cognitive load</strong>",
            "Improve <strong>one-handed usability</strong> for mobile operation during movement",
            "Provide clear, readable <strong>task queues</strong> and delivery states",
            "Increase driver confidence through better <strong>feedback</strong> and <strong>visual cues</strong>"
          ].map((goal, index) => (
            <div key={index} className="flex items-start gap-3 p-3 bg-accent/30 rounded-lg">
              <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
              <span className="text-foreground/80"><SafeTextRenderer text={goal} /></span>
            </div>
          ))}
        </div>
        <PlaceholderSection title="Visual showing user goals, personas, or design values" />
      </section>

      {/* Research & Field Insights */}
      <section>
        <div className="flex items-center gap-3 mb-6">
          <Search className="h-6 w-6 text-primary" />
          <h3 className="text-xl font-semibold text-foreground">Research & field insights</h3>
        </div>
        <p className="text-foreground/80 mb-4">
          Being <strong>embedded in the delivery environment</strong> gave me direct access to:
        </p>
        <div className="space-y-3 mb-4">
          {[
            "Daily <strong>workflow pain points</strong>",
            "<strong>Informal interviews</strong> and ride-along conversations with fellow drivers",
            "<strong>Real-world testing</strong> of various company apps"
          ].map((item, index) => (
            <div key={index} className="flex items-start gap-3 p-3 bg-accent/30 rounded-lg">
              <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
              <span className="text-foreground/80"><SafeTextRenderer text={item} /></span>
            </div>
          ))}
        </div>
        <div className="p-4 bg-primary/10 border-l-4 border-primary rounded-r-lg">
          <p className="text-foreground/70 italic">
            This firsthand exposure grounded my understanding in practical reality, forming the core of the design approach.
          </p>
        </div>
        <PlaceholderSection title="Journey map, quotes, or field notes" />
      </section>

      {/* Wireframing & Structure */}
      <section>
        <div className="flex items-center gap-3 mb-6">
          <PenTool className="h-6 w-6 text-primary" />
          <h3 className="text-xl font-semibold text-foreground">Wireframing & structure</h3>
        </div>
        <p className="text-foreground/80 mb-4">
          Before jumping into high-fidelity design, a complete <strong>wireframe</strong> of the app was created, exploring:
        </p>
        <div className="grid md:grid-cols-2 gap-3">
          {[
            "<strong>Task flow logic</strong>",
            "<strong>Button layout</strong> optimized for thumb reach",
            "<strong>Visual hierarchy</strong> for attention during fast-paced situations",
            "<strong>UX logic</strong> for handling unpredictable events (e.g., address changes, order delays)"
          ].map((item, index) => (
            <div key={index} className="flex items-start gap-3 p-3 bg-accent/30 rounded-lg">
              <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
              <span className="text-foreground/80"><SafeTextRenderer text={item} /></span>
            </div>
          ))}
        </div>
        <div className="space-y-6 my-8">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="space-y-2">
              <img 
                src="/lovable-uploads/d0e297f5-a7d0-4b9c-b651-8d49462ce864.png" 
                alt="Deliverly wireframe - Map view with start shift interface"
                className="w-full h-auto rounded-lg border border-border"
              />
              <p className="text-sm text-muted-foreground text-center">Map view with start shift interface</p>
            </div>
            <div className="space-y-2">
              <img 
                src="/lovable-uploads/70bcce6e-cf1a-4b07-a8cf-33fac798ee4b.png" 
                alt="Deliverly wireframe - Order details and route planning"
                className="w-full h-auto rounded-lg border border-border"
              />
              <p className="text-sm text-muted-foreground text-center">Order details and route planning</p>
            </div>
            <div className="space-y-2">
              <img 
                src="/lovable-uploads/f92a199d-08e5-4056-a7b8-21e0ee306466.png" 
                alt="Deliverly wireframe - Earnings tracking interface"
                className="w-full h-auto rounded-lg border border-border"
              />
              <p className="text-sm text-muted-foreground text-center">Earnings tracking interface</p>
            </div>
          </div>
        </div>
      </section>

      {/* Design Exploration & Iteration */}
      <section>
        <div className="flex items-center gap-3 mb-6">
          <Package className="h-6 w-6 text-primary" />
          <h3 className="text-xl font-semibold text-foreground">Design exploration & iteration</h3>
        </div>
        <p className="text-foreground/80 mb-4">
          After <strong>wireframing</strong>, I moved into refining and testing design elements including:
        </p>
        <div className="grid md:grid-cols-2 gap-3 mb-4">
          {[
            "<strong>Typography sizing</strong> for outdoor readability",
            "<strong>Microinteractions</strong> for confirming tasks",
            "<strong>System feedback</strong> for errors and rerouting",
            "<strong>Spacing and contrast</strong> for glanceable information"
          ].map((item, index) => (
            <div key={index} className="flex items-start gap-3 p-3 bg-accent/30 rounded-lg">
              <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
              <span className="text-foreground/80"><SafeTextRenderer text={item} /></span>
            </div>
          ))}
        </div>
        <div className="p-4 bg-primary/10 border-l-4 border-primary rounded-r-lg">
          <p className="text-foreground/70 italic">
            I conducted multiple <strong>informal feedback sessions</strong> with former co-workers and design peers to iterate on layout, text, and overall <strong>usability</strong>.
          </p>
        </div>
        <div className="space-y-6 my-8">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <img 
                src="/lovable-uploads/5f1205a8-4089-4291-9bc3-8d6b9c140740.png" 
                alt="Early wireframe UI - Basic layout and structure"
                className="w-full h-auto rounded-lg border border-border"
              />
              <p className="text-sm text-muted-foreground text-center">Early UI: Wireframe stage</p>
            </div>
            <div className="space-y-2">
              <img 
                src="/lovable-uploads/06d2170e-620d-4d15-af93-9e223d9acb4b.png" 
                alt="Refined UI - Polished interface with improved visual hierarchy"
                className="w-full h-auto rounded-lg border border-border"
              />
              <p className="text-sm text-muted-foreground text-center">Refined UI: Final design with enhanced UX</p>
            </div>
          </div>
        </div>
      </section>

      {/* Visual Identity & Branding */}
      <section>
        <div className="flex items-center gap-3 mb-6">
          <Palette className="h-6 w-6 text-primary" />
          <h3 className="text-xl font-semibold text-foreground">Visual identity & branding</h3>
        </div>
        <p className="text-foreground/80 mb-4">
          Deliverly's <strong>visual identity</strong> was built to reflect:
        </p>
        <div className="grid md:grid-cols-2 gap-3">
          {[
            "<strong>Function over flair</strong>",
            "Calm, <strong>low-distraction color schemes</strong>",
            "<strong>Bold iconography</strong> for clarity under pressure",
            "<strong>Consistency</strong> between touch targets and visual rhythm"
          ].map((item, index) => (
            <div key={index} className="flex items-start gap-3 p-3 bg-accent/30 rounded-lg">
              <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
              <span className="text-foreground/80"><SafeTextRenderer text={item} /></span>
            </div>
          ))}
        </div>
        <PlaceholderSection title="Logo, palette, or brand style tile" />
      </section>

      {/* Final Prototype */}
      <section>
        <div className="flex items-center gap-3 mb-6">
          <Smartphone className="h-6 w-6 text-primary" />
          <h3 className="text-xl font-semibold text-foreground">Final prototype</h3>
        </div>
        <p className="text-foreground/80 mb-4">
          The <strong>final prototype</strong> includes:
        </p>
        <div className="space-y-3 mb-6">
          {[
            "A <strong>real-time driver dashboard</strong> with delivery queue",
            "<strong>One-thumb flows</strong> for confirmation and pickup",
            "<strong>Feedback system</strong> for delays and customer contact",
            "Simple <strong>error handling</strong> and progress tracking"
          ].map((item, index) => (
            <div key={index} className="flex items-start gap-3 p-3 bg-accent/30 rounded-lg">
              <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
              <span className="text-foreground/80"><SafeTextRenderer text={item} /></span>
            </div>
          ))}
        </div>
        <div className="p-4 bg-yellow-500/10 border-l-4 border-yellow-500 rounded-r-lg">
          <p className="text-foreground/70 italic">
            <strong>Note:</strong> Deliverly is not intended to be a fully complete application—rather, it serves as an 
            <strong>iterative rethinking</strong> of key problem areas in current delivery tools, designed through the lens of real <strong>driver pain points</strong>.
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
          <p className="text-foreground/80 leading-relaxed text-lg">
            Deliverly is a <strong>UX-first concept</strong> rooted in direct delivery experience and <strong>iterative design practice</strong>. 
            It represents a vision of what food delivery tools could become if they truly prioritized the user 
            at the heart of the process: <strong>the driver</strong>.
          </p>
          <p className="text-foreground/80 leading-relaxed text-lg">
            This project highlights how small, thoughtful adjustments—based on <strong>empathy</strong> and <strong>field insight</strong>—can 
            make an outsized impact on daily <strong>user experience</strong>.
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

export default DeliverlyCaseStudy;