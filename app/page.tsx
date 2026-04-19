import { Hero } from '../components/Hero';
import { SocialProof } from '../components/SocialProof';
import { Services } from '../components/Services';
import { WhyChooseUs } from '../components/WhyChooseUs';
import { Gallery } from '../components/Gallery';
import { Team } from '../components/Team';
import { Pricing } from '../components/Pricing';
import { Location } from '../components/Location';
import { FinalCta } from '../components/FinalCta';
import { Footer } from '../components/Footer';

export default function Home() {
  return (
    <main className="bg-bg-dark min-h-screen">
      <Hero />
      <SocialProof />
      <Services />
      <WhyChooseUs />
      <Gallery />
      <Team />
      <Pricing />
      <Location />
      <FinalCta />
      <Footer />
    </main>
  );
}
