import { motion } from "framer-motion";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  {
    q: "Are your services only for IMGs?",
    a: "No. While we specialize in International Medical Graduates, we also work with native English speakers and U.S. medical students who want expert guidance shaping their residency personal statement.",
  },
  {
    q: "Do you write residency statements?",
    a: "It depends on the tier. The Revision & Critique tier includes limited rewriting, while the Finished for You package includes substantial rewriting. We work from your draft and Zoom transcripts to add new material in your own voice, so the final statement is authentically yours.",
  },
  {
    q: "Do you use a template?",
    a: "Yes. We follow the defined format that residency Program Directors expect: an opening story to hook the reader, body paragraphs anchored in patient experiences, and a focused conclusion that neatly ties your statement together and explains how you'll contribute to the program. Throughout the statement, we'll focus on your commitment to your specialty, because that's what Program Directors value.",
  },
  {
    q: "How do I get started?",
    a: "Prepare a rough draft of up to 900 words in a Google Doc and send it our way. The initial evaluation has a 48-hour turnaround, after which we'll recommend the package that fits your application best.",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="py-20 md:py-28 bg-secondary">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <p className="text-accent font-semibold tracking-widest uppercase text-3xl">FAQ</p>
          <h2 className="mt-3 text-3xl md:text-5xl font-bold text-primary">Questions, Answered.</h2>
          <p className="mt-4 text-muted-foreground">Everything you need to know before getting started.</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto bg-card rounded-3xl border border-border shadow-sm p-2 md:p-4"
        >
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((f, i) => (
              <AccordionItem key={f.q} value={`item-${i}`} className="border-b last:border-0 px-4">
                <AccordionTrigger className="text-left text-base md:text-lg font-semibold text-primary hover:no-underline py-5">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
