'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export function TrustSection() {
  return (
    <section className="w-full py-16 md:py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
          <motion.div 
            className="w-full md:w-1/2"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="w-full max-w-md mx-auto overflow-hidden rounded-full">
              <Image 
                src="https://images.pexels.com/photos/3182833/pexels-photo-3182833.jpeg" 
                alt="Professional working at computer desk"
                width={500}
                height={500}
                className="w-full h-auto object-cover"
              />
            </div>
          </motion.div>
          
          <motion.div 
            className="w-full md:w-1/2"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
              Connect with confidence
            </h2>
            <p className="text-lg text-slate-600">
              More than 100 million people around the world trust Intuit with their 
              financial data through products like TurboTax, QuickBooks, and Credit Karma.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}