import { useEffect } from "react";
import { Toaster } from "@/components/ui/sonner";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { Stats } from "@/components/site/Stats";
import { Expert } from "@/components/site/Expert";
import { Pricing } from "@/components/site/Pricing";
import { FAQ } from "@/components/site/FAQ";
import { ContactForm } from "@/components/site/ContactForm";
import { Footer } from "@/components/site/Footer";

export default function Index() {
  useEffect(() => {
    document.title = "IMG Editors — Residency Personal Statement Coaching for IMGs";
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Expert />
        <Pricing />
        <FAQ />
        <ContactForm />
      </main>
      <Footer />
      <Toaster richColors position="top-center" />
    </div>
  );
}
