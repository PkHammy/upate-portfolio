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
    <div className="h-screen bg-[#e5e5d1]">
      <Navbar />

      <main
        id="snap-container"
        className="h-screen snap-y snap-mandatory overflow-y-scroll scroll-smooth"
      >
        <section id="home" className="h-screen snap-start">
          <HeroSection />
        </section>

        <section id="about" className="h-screen snap-start">
          <AboutSection />
        </section>

        <section id="projects" className="h-screen snap-start">
          <ProjectSection />
        </section>

        {/* Contact + Footer */}
        <section className="flex min-h-screen snap-start flex-col" id="contact">
          <div className="flex-1">
            <ContactSection />
          </div>

          <footer className="bg-[#111111]">
            <Footer />
          </footer>
        </section>
      </main>
    </div>
  );
}
