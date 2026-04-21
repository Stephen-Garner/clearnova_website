import dynamic from "next/dynamic";
import { Hero } from "@/components/sections/Hero";

const Services = dynamic(() => import("@/components/sections/Services"));
const Approach = dynamic(() => import("@/components/sections/Approach"));
const Outcomes = dynamic(() => import("@/components/sections/Outcomes"));
const Voices = dynamic(() => import("@/components/sections/Voices"));
const About = dynamic(() => import("@/components/sections/About"));
const FAQ = dynamic(() => import("@/components/sections/FAQ"));
const Contact = dynamic(() => import("@/components/sections/Contact"));

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
