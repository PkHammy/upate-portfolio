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
    <div className="bg-[#e5e5d1]">
      <Navbar />

      <main
        id="snap-container"
        className="overflow-y-scroll scroll-smooth md:h-screen md:snap-y md:snap-mandatory"
      >
        {/* Mobile: natural height so content never clips. md+: h-screen + snap */}
        <section id="home" className="md:h-screen md:snap-start">
          <HeroSection />
        </section>

        <section id="about" className="md:h-screen md:snap-start">
          <AboutSection />
        </section>

        <section id="projects" className="md:h-screen md:snap-start">
          <ProjectSection />
        </section>

        <section
          className="flex min-h-screen flex-col md:snap-start"
          id="contact"
        >
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
