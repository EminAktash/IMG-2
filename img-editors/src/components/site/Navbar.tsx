import { useState } from "react";
import { Stethoscope, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const links = [
  { href: "#expert", label: "About" },
  { href: "#pricing", label: "Pricing" },
  { href: "#faq", label: "FAQ" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 inset-x-0 z-50 glass border-b border-border/60">

      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2 font-serif text-lg font-bold text-primary">
          <span className="w-9 h-9 rounded-lg bg-gradient-primary flex items-center justify-center text-primary-foreground">
            <Stethoscope className="w-5 h-5" />
          </span>
          IMG<span className="text-accent">Editors</span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-foreground transition-colors text-xl">
              {l.label}
            </a>
          ))}
        </nav>
        <div className="hidden md:block">
          <Button asChild variant="hero" size="sm">
            <a href="#contact">Get Started</a>
          </Button>
        </div>
        <button
          className="md:hidden text-foreground"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <div className="md:hidden glass border-t border-border/60 px-6 py-4 flex flex-col gap-4">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors text-xl"
            >
              {l.label}
            </a>
          ))}
          <Button asChild variant="hero" size="sm">
            <a href="#contact" onClick={() => setOpen(false)}>Get Started</a>
          </Button>
        </div>
      )}
    </header>
  );
}
