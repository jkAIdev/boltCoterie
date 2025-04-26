'use client';

import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

export function HeroSection() {
  return (
    <section className="w-full py-8 md:py-12">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="flex flex-col items-center">
          <div className="w-full max-w-3xl mb-8 overflow-hidden rounded-lg">
            <Image 
              src="https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg" 
              alt="Professional looking at financial data on tablet"
              width={1000}
              height={500}
              className="w-full h-auto object-cover"
            />
          </div>
          
          <motion.div 
            className="text-center max-w-3xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-800 mb-4">
              Get a better rate by connecting with QuickBooks
            </h1>
            <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
              Your QuickBooks data gives us a more accurate view of your business, 
              so we can provide you with the best possible rates, terms, and service.
            </p>
            <Button className="bg-emerald-400 hover:bg-emerald-500 text-slate-800 font-medium px-8 py-6 rounded-md text-lg transition-all">
              Sign in to QuickBooks
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}