
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';

const CTASection = () => {
  return (
    <section className="bg-gradient-to-r from-pathfinder-purple-400 to-pathfinder-purple-600 text-white py-16">
      <div className="section-container">
        <div className="max-w-3xl mx-auto text-center opacity-0 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Find Your Unique Learning Path?
          </h2>
          <p className="text-lg text-white/90 mb-8">
            Join thousands of students who are already experiencing the power of AI-personalized
            education. Start your journey today.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" className="bg-white text-pathfinder-purple-500 hover:bg-gray-100">
              Get Started Free
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10 gap-2">
              Schedule a Demo <ArrowRight size={16} />
            </Button>
          </div>
          
          <p className="mt-6 text-sm text-white/80">
            No credit card required. Free trial for 14 days.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
