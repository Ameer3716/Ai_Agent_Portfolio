import Hero from "@/components/Hero";
import AboutPreview from "@/components/AboutPreview";
import Projects from "@/components/Projects";
import StackCloud from "@/components/StackCloud";
import ContactCTA from "@/components/ContactCTA";

export default function Home() {
  return (
    <main className="bg-background">
      <Hero />
      <AboutPreview />
      <Projects />
      <StackCloud />
      <ContactCTA />
    </main>
  );
}
