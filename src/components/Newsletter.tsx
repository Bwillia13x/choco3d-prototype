import React, { useState } from "react";
import { toast } from "@/components/ui/use-toast";
const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      toast({
        title: "Please enter your email address",
        variant: "destructive"
      });
      return;
    }
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Thank you for subscribing!",
        description: "You'll receive updates about Choco3D innovations and industry insights."
      });
      setEmail("");
      setIsSubmitting(false);
    }, 1000);
  };
  return <section id="get-access" className="bg-gradient-to-b from-white via-gray-50/30 to-white py-16 sm:py-20 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-10 right-10 w-64 h-64 bg-pulse-100 rounded-full blur-3xl opacity-30"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-pulse-50 to-transparent rounded-full blur-3xl opacity-40"></div>
      
      <div className="section-container opacity-0 animate-on-scroll relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <div className="pulse-chip mx-auto mb-6">
              <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-pulse-500 text-white mr-2 text-xs font-bold">05</span>
              <span>Newsletter</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mb-4 text-pulse-900">
              Stay Updated on <span className="text-gradient-primary">Chocolate Innovation</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
              Get insights on 3D printing technology, success stories, and exclusive partnership opportunities
            </p>
          </div>
          
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center bg-white p-2 rounded-full shadow-elegant hover:shadow-elegant-hover transition-shadow duration-300">
            <div className="relative flex-grow">
              <input 
                type="email" 
                value={email} 
                onChange={e => setEmail(e.target.value)} 
                placeholder="Enter your email address" 
                className="w-full px-6 py-4 rounded-full bg-transparent focus:outline-none text-gray-700 placeholder:text-gray-400" 
                required 
              />
            </div>
            <button 
              type="submit" 
              disabled={isSubmitting} 
              className="button-primary disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap group"
            >
              {isSubmitting ? "Submitting..." : "Subscribe Now"}
              <svg className="w-4 h-4 ml-2 inline-block transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>
          </form>
          
          <p className="text-center text-sm text-gray-500 mt-4">
            🔒 We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </div>
    </section>;
};
export default Newsletter;