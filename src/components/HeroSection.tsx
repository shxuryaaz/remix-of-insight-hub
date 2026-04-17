import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import agilowLogoWhite from "@/assets/agilow-logo-white.png";

const navLinks = [
{ label: "Home", href: "#" },
{ label: "Features", href: "#features" },
{ label: "How It Works", href: "#how-it-works" },
{ label: "For Teams", href: "#personas" }];


const smoothScrollTo = (target: number, duration = 1200) => {
  const start = window.scrollY;
  const distance = target - start;
  let startTime: number | null = null;
  const ease = (t: number) => t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
  const step = (time: number) => {
    if (!startTime) startTime = time;
    const progress = Math.min((time - startTime) / duration, 1);
    window.scrollTo(0, start + distance * ease(progress));
    if (progress < 1) requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
};

const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
  e.preventDefault();
  if (href === "#") {
    smoothScrollTo(0);
    return;
  }
  const el = document.querySelector(href);
  if (el) smoothScrollTo(el.getBoundingClientRect().top + window.scrollY - 80);
};

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-primary/95 backdrop-blur-md border-b border-sidebar-border">
      <div className="container mx-auto flex h-16 items-center justify-between px-6">
        <img src={agilowLogoWhite} alt="Agilow" className="h-8" />
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((l) =>
          <a key={l.label} href={l.href} onClick={(e) => handleSmoothScroll(e, l.href)} className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm font-medium">
              {l.label}
            </a>
          )}
          <a href="https://calendly.com/shiv-agilow/warm-chat-with-shiv" target="_blank" rel="noopener noreferrer"><Button variant="hero" size="sm">Request a Private Preview</Button></a>
        </div>
        <button className="md:hidden text-primary-foreground" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {open &&
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="md:hidden overflow-hidden bg-primary/95 border-t border-sidebar-border">
          
            <div className="flex flex-col gap-1 px-6 py-4">
              {navLinks.map((l) =>
            <a key={l.label} href={l.href} onClick={(e) => {handleSmoothScroll(e, l.href);setOpen(false);}} className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm font-medium py-2.5">
                  {l.label}
                </a>
            )}
              <a href="https://calendly.com/shiv-agilow/warm-chat-with-shiv" target="_blank" rel="noopener noreferrer"><Button variant="hero" size="sm" className="mt-2 w-full">Request a Private Preview</Button></a>
            </div>
          </motion.div>
        }
      </AnimatePresence>
    </nav>);

};

const HeroSection = () =>
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
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="max-w-3xl mx-auto">
      
        


      

        <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-[1.35] tracking-tight mb-4 md:mb-5 font-display">
          The Ground Truth for{" "}
          <span className="text-brand-orange">Life Sciences Engineering.</span>
        </h1>

        <p className="text-sm sm:text-base md:text-lg text-primary-foreground/60 leading-relaxed mb-8 md:mb-10 max-w-xl mx-auto text-center">
          Stop losing clinical momentum to fragmented data. Agilow synthesizes your team's technical discussions into actionable project intelligence—giving you the "Why" behind every milestone without the status meetings.
        </p>

        <div className="flex justify-center">
          <a href="https://calendly.com/shiv-agilow/warm-chat-with-shiv" target="_blank" rel="noopener noreferrer">
            <Button variant="hero" size="xl">
              Request a Private Preview
              <ArrowRight className="ml-1" />
            </Button>
          </a>
        </div>

        <div className="mt-10 md:mt-16 flex flex-wrap items-center justify-center gap-4 md:gap-8 text-primary-foreground/40 text-xs sm:text-sm">
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
  </section>;

export { Navbar, HeroSection };