/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import SmoothScroll from './components/layout/SmoothScroll';
import ModernBackground from './components/layout/ModernBackground';
import HeroSection from './components/sections/HeroSection';
import AboutSection from './components/sections/AboutSection';
import TechStack from './components/sections/TechStack';
import ProjectsSection from './components/sections/ProjectsSection';
import ExperienceSection from './components/sections/ExperienceSection';
import ContactSection from './components/sections/ContactSection';

export default function App() {
  return (
    <SmoothScroll>
      <div className="relative min-h-screen text-white">
        <ModernBackground />

        <Navbar />
        
        <main className="relative z-10">
          <HeroSection />
          <AboutSection />
          <TechStack />
          <ProjectsSection />
          <ExperienceSection />
          <ContactSection />
        </main>

        <Footer />
      </div>
    </SmoothScroll>
  );
}
