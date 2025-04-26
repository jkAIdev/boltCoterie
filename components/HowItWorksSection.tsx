import React from 'react';
import { ProcessCard } from './ProcessCard';

export function HowItWorksSection() {
  return (
    <section className="w-full py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <h2 className="text-3xl font-bold text-slate-800 text-center mb-12">
          How it works
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <ProcessCard 
            number={1} 
            title="Log in" 
            description={
              <p>
                Sign into your QuickBooks account using{' '}
                <a href="#" className="text-blue-500 hover:underline">this link</a>.
              </p>
            }
          />
          
          <ProcessCard 
            number={2} 
            title="Link your account" 
            description={
              <p>
                Allow QuickBooks to share your data with <span className="font-medium">Coterie</span> just once.
              </p>
            }
          />
          
          <ProcessCard 
            number={3} 
            title="Check your inbox" 
            description={
              <p>
                You'll get a confirmation once the data share is complete and 
                then we'll send you an email with an updated offer.
              </p>
            }
          />
        </div>
      </div>
    </section>
  );
}