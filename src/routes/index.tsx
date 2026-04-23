import Footer from "#/components/Footer";
import Navbar from "#/components/Navbar";
import AboutSection from "#/components/sections/AboutSection";
import ContactSection from "#/components/sections/ContactSection";
import HeroSection from "#/components/sections/HeroSection";
import ProjectSection from "#/components/sections/ProjectSection";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  return (
    <>
      <Navbar />

      <HeroSection />
      <AboutSection />

      {/* UNCOMMENT WHEN COMPLETE */}
      <ProjectSection />

      <ContactSection />

      {/* <div className="h-screen w-full bg-fuchsia-400"></div> */}
      <Footer />
    </>
  );
}
