import { Stethoscope } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2 font-serif font-bold text-lg">
          <span className="w-9 h-9 rounded-lg bg-gradient-accent flex items-center justify-center text-accent-foreground">
            <Stethoscope className="w-5 h-5" />
          </span>
          IMG<span className="text-accent">Editors</span>
        </div>
        <p className="text-sm text-primary-foreground/60">
          © {new Date().getFullYear()} IMG Editors. Crafted for international medical graduates.
        </p>
      </div>
    </footer>
  );
}
