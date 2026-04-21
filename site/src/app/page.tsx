import { Hero } from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import Approach from "@/components/sections/Approach";
import { Outcomes } from "@/components/sections/Outcomes";
import { Voices } from "@/components/sections/Voices";
import About from "@/components/sections/About";
import FAQ from "@/components/sections/FAQ";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <main className="relative isolate">
      <Hero />
      <Services />
      <Approach />
      <Outcomes />
      <Voices />
      <About />
      <FAQ />
      <Contact />
    </main>
  );
}
