import React from 'react';
import { DollarSign, FileText, UserCheck, Shield } from 'lucide-react';

const BenefitsGrid: React.FC = () => {
  const benefits = [
    {
      icon: DollarSign,
      title: "No lead fees",
      description: "Contractors keep 100% of their earnings with no upfront lead costs."
    },
    {
      icon: FileText,
      title: "Built-in contracts",
      description: "Milestone-based contracts enforce clear terms throughout."
    },
    {
      icon: UserCheck,
      title: "Verified pros",
      description: "All professionals are vetted and rated by previous clients."
    },
    {
      icon: Shield,
      title: "Escrow security",
      description: "Funds held securely until work is approved by the client."
    }
  ];

  return (
    <section id="benefits" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
        <h2 className="text-3xl sm:text-4xl font-bold text-black">
          What makes us different
        </h2>
      </div>
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-8 px-4 sm:px-6 lg:px-8">
        {benefits.map((b, i) => {
          const Icon = b.icon;
          return (
            <div key={i} className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 bg-navy/10 rounded-xl flex items-center justify-center mb-6">
                <Icon className="h-8 w-8 text-navy" />
              </div>
              <h3 className="text-xl font-semibold text-black mb-3">{b.title}</h3>
              <p className="text-gray-600 leading-relaxed">{b.description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default BenefitsGrid;
