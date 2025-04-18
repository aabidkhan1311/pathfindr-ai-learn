
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Star } from 'lucide-react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Computer Science Student",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80",
      quote: "PathfindrAI has transformed my learning experience. The personalized recommendations perfectly match my learning style, and I'm progressing much faster than with traditional courses."
    },
    {
      name: "Michael Chen",
      role: "Software Engineer",
      image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80",
      quote: "The adaptive learning algorithms are impressive. As a professional developer looking to upskill, this platform has helped me focus on exactly what I need to learn, without wasting time on concepts I already understand."
    },
    {
      name: "Amara Okafor",
      role: "Data Science Instructor",
      image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80",
      quote: "As an educator myself, I'm amazed by how PathfindrAI has revolutionized my teaching approach. The insights I gain from the platform help me tailor my instruction to each student's needs."
    },
  ];

  return (
    <section id="testimonials" className="bg-gray-50 py-16 md:py-24">
      <div className="section-container">
        <div className="text-center mb-16 opacity-0 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What Our <span className="gradient-text">Learners Say</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it—hear from students and educators who've
            experienced the power of AI-driven personalized learning.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={testimonial.name} className="opacity-0 animate-fade-in" style={{ animationDelay: `${0.3 + index * 0.1}s` }}>
              <CardContent className="p-6">
                <div className="flex justify-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-pathfinder-orange-400 text-pathfinder-orange-400" />
                  ))}
                </div>
                
                <blockquote className="text-gray-600 mb-6 text-center">
                  "{testimonial.quote}"
                </blockquote>
                
                <div className="flex items-center justify-center">
                  <div className="mr-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="h-12 w-12 rounded-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
