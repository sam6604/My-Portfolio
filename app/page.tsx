import { Hero } from "@/components/Hero";
import { ProjectIndex } from "@/components/ProjectIndex";
import { ExperienceList } from "@/components/ExperienceList";
import { SkillsSection } from "@/components/SkillsSection";
import { CertificationsSection } from "@/components/CertificationsSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="mx-auto max-w-content px-5 sm:px-8 lg:px-12">
      <Hero />
      <ProjectIndex />
      <ExperienceList />
      <SkillsSection />
      <CertificationsSection />
      <Footer />
    </main>
  );
}
