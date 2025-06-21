import React from 'react';
import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import ProblemCards from './components/ProblemCards';
import ProcessTimeline from './components/ProcessTimeline';
import KeyFeaturesSlider from './components/KeyFeaturesSlider';
import BenefitsGrid from './components/BenefitsGrid';
import VideoSection from './components/VideoSection';
import ComparisonTable from './components/ComparisonTable';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';

// ← Вот этот импорт
import ChatWidget from './components/ChatWidget';

function App() {
  return (
    <div className="min-h-screen bg-white font-inter text-black">
      <Navigation />
      <HeroSection />
      <ProblemCards />
      <ProcessTimeline />
      <KeyFeaturesSlider />
      <BenefitsGrid />
      <VideoSection />
      <ComparisonTable />
      <CallToAction />
      <Footer />

      {/* ← И вот этот компонент */}
      <ChatWidget />
    </div>
  );
}

export default App;
