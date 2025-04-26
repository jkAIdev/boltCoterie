import { Navbar } from '@/components/Navbar';
import { HeroSection } from '@/components/HeroSection';
import { TrustSection } from '@/components/TrustSection';
import { HowItWorksSection } from '@/components/HowItWorksSection';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-1">
        <HeroSection />
        <TrustSection />
        <HowItWorksSection />
      </div>
      <Footer />
    </main>
  );
}