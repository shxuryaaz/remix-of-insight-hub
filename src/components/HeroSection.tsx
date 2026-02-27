import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import agilowLogoWhite from "@/assets/agilow-logo-white.png";

const Navbar = () => (
  <nav className="fixed top-0 left-0 right-0 z-50 bg-primary/95 backdrop-blur-md border-b border-sidebar-border">
    <div className="container mx-auto flex h-16 items-center justify-between px-6">
      <img src={agilowLogoWhite} alt="Agilow" className="h-8" />
      <div className="hidden md:flex items-center gap-8">
        <a href="#" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm font-medium">Home</a>
        <a href="#features" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm font-medium">Features</a>
        <a href="#how-it-works" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm font-medium">How It Works</a>
        <a href="#personas" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm font-medium">For Teams</a>
        <Button variant="hero" size="sm">Book a Call</Button>
      </div>
    </div>
  </nav>
);

const HeroSection = () => (
  <section className="relative min-h-screen bg-gradient-hero flex items-center justify-center overflow-hidden pt-16">
    {/* Subtle dot pattern */}
    <div className="absolute inset-0 opacity-[0.06]" style={{
      backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
      backgroundSize: "32px 32px"
    }} />

    {/* Glowing orb effect */}
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[55%] w-[500px] h-[500px] md:w-[700px] md:h-[700px]">
      <div className="absolute inset-0 rounded-full bg-brand-orange/20 blur-[100px]" />
      <div className="absolute inset-[15%] rounded-full bg-accent/25 blur-[80px]" />
      <div className="absolute inset-[30%] rounded-full bg-primary-foreground/10 blur-[60px]" />
    </div>

    <div className="container mx-auto px-6 relative z-10 text-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="max-w-3xl mx-auto"
      >
        <div className="inline-flex items-center gap-2 bg-accent/20 border border-accent/30 rounded-full px-4 py-1.5 mb-8">
          <span className="bg-brand-orange text-brand-orange-foreground text-xs font-bold px-2.5 py-0.5 rounded-full">New</span>
          <span className="text-primary-foreground/80 text-sm font-medium">Project Context Engine</span>
        </div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground leading-[1.08] tracking-tight mb-6 font-display">
          Stop being your team's{" "}
          <span className="text-brand-orange">human router.</span>
        </h1>

        <p className="text-lg md:text-xl text-primary-foreground/60 leading-relaxed mb-10 max-w-2xl mx-auto">
          Agilow aggregates context from Slack, Jira, email, and meetings into one intelligent platform — so your team finds answers, not you.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="hero" size="xl">
            Get Early Access
            <ArrowRight className="ml-1" />
          </Button>
          <Button variant="hero-outline" size="xl">
            View Features
          </Button>
        </div>

        <div className="mt-16 flex items-center justify-center gap-8 text-primary-foreground/40 text-sm">
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-success rounded-full" />
            Save 6–10 hrs/week
          </span>
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-success rounded-full" />
            Zero data entry
          </span>
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-success rounded-full" />
            Source-cited AI
          </span>
        </div>
      </motion.div>
    </div>
  </section>
);

export { Navbar, HeroSection };
