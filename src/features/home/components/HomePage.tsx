import HeroSection from './HeroSection';
import TrainerHighlights from './TrainerHighlights';
import TransformationsPreview from './TransformationsPreview';
import WhyChooseMe from './WhyChooseMe';
import WhatsAppCTA from './WhatsAppCTA';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TrainerHighlights />
      {/* <OnlineTrainingCTA /> */}
      <TransformationsPreview />
      <WhyChooseMe />
      <WhatsAppCTA />
    </>
  );
}
