import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Mail } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

// Where inquiries go. Clicking "Send" opens the visitor's own email app
// pre-addressed to Debra with all the fields filled in. No account or key needed.
const DEBRA_EMAIL = "d.anazonwu@gmail.com";

export function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    specialty: "",
    scores: "",
    docLink: "",
    message: "",
  });

  const update = (k: string, v: string) => setForm((f) => ({ ...f, [k]: v }));

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      toast.error("Please fill in your name, email, and message.");
      return;
    }

    const subject = `New IMG Editors inquiry from ${form.name}`;
    const body = [
      `Name: ${form.name}`,
      `Email: ${form.email}`,
      `Intended Specialty: ${form.specialty || "—"}`,
      `USMLE Scores: ${form.scores || "—"}`,
      `Google Doc Draft: ${form.docLink || "—"}`,
      "",
      "Message:",
      form.message,
    ].join("\n");

    const mailto = `mailto:${DEBRA_EMAIL}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;

    // Open the visitor's email client with everything prefilled.
    window.location.href = mailto;

    toast.success(
      "Your email app should now be open with your inquiry ready to send. Just hit send!",
    );
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-accent font-semibold tracking-widest uppercase text-3xl">Contact</p>
            <h2 className="mt-3 text-3xl md:text-5xl font-bold text-primary">Let's Build Your Match Story.</h2>
            <p className="mt-4 text-muted-foreground text-lg">
              Share a few details about your application. We'll get back to you within 24 hours
              with a personalized recommendation.
            </p>
            <div className="mt-8 flex items-center gap-3 p-4 rounded-2xl bg-card border border-border">
              <span className="w-10 h-10 rounded-lg bg-gradient-primary text-primary-foreground flex items-center justify-center">
                <Mail className="w-5 h-5" />
              </span>
              <div>
                <div className="text-sm font-semibold text-primary">{DEBRA_EMAIL}</div>
                <div className="text-xs text-muted-foreground">We respond within 24 hours, every day.</div>
              </div>
            </div>
          </motion.div>

          <motion.form
            onSubmit={onSubmit}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-card rounded-3xl p-6 md:p-8 border border-border shadow-elegant space-y-4"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="name">Full Name</Label>
                <Input id="name" value={form.name} onChange={(e) => update("name", e.target.value)} placeholder="Dr. Jane Smith" maxLength={100} />
              </div>
              <div>
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" value={form.email} onChange={(e) => update("email", e.target.value)} placeholder="you@email.com" maxLength={200} />
              </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="specialty">Intended Specialty</Label>
                <Input id="specialty" value={form.specialty} onChange={(e) => update("specialty", e.target.value)} placeholder="Internal Medicine" maxLength={80} />
              </div>
              <div>
                <Label htmlFor="scores">USMLE Scores (Optional)</Label>
                <Input id="scores" value={form.scores} onChange={(e) => update("scores", e.target.value)} placeholder="Step 1 / Step 2 CK" maxLength={80} />
              </div>
            </div>
            <div>
              <Label htmlFor="docLink">Link to Google Doc Draft (Optional)</Label>
              <Input id="docLink" type="url" value={form.docLink} onChange={(e) => update("docLink", e.target.value)} placeholder="https://docs.google.com/..." maxLength={300} />
            </div>
            <div>
              <Label htmlFor="message">How can we help your application?</Label>
              <Textarea id="message" value={form.message} onChange={(e) => update("message", e.target.value)} rows={5} placeholder="Tell us about your goals, timeline, and any concerns…" maxLength={2000} />
            </div>
            <Button type="submit" variant="hero" size="lg" className="w-full">
              <Send className="w-4 h-4" /> Send Inquiry
            </Button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
