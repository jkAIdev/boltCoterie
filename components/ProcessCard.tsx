'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface ProcessCardProps {
  number: number;
  title: string;
  description: React.ReactNode;
  className?: string;
}

export function ProcessCard({ number, title, description, className }: ProcessCardProps) {
  return (
    <motion.div 
      className={cn(
        "w-full p-8 bg-slate-100 rounded-lg shadow-sm", 
        className
      )}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: number * 0.1 }}
      viewport={{ once: true }}
    >
      <div className="text-center">
        <h3 className="text-xl font-bold text-slate-800 mb-4">
          {number}. {title}
        </h3>
        <div className="text-slate-600">
          {description}
        </div>
      </div>
    </motion.div>
  );
}