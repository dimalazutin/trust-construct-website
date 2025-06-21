import React from 'react';
import { Youtube } from 'lucide-react';

const VideoSection: React.FC = () => {
  return (
    <section id="video" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">See how it works in action</h2>
        <p className="text-gray-600 mb-8">
          Our platform streamlines the entire construction project lifecycle, from initial bidding to final payment, with built-in protections for both clients and contractors.
        </p>

        {/* responsive 16:9 wrapper */}
        <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
          <iframe
            className="absolute top-0 left-0 w-full h-full rounded-lg shadow-md"
            src="https://www.youtube.com/embed/8etFMtBR79A?rel=0"
            title="TrustConstruct Demo"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>

          {/* YouTube icon overlay */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <Youtube className="w-16 h-16 text-blue-600 opacity-75" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
