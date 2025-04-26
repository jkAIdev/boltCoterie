import React from 'react';
import { Circle } from 'lucide-react';

export function Logo() {
  return (
    <div className="flex items-center gap-1">
      <Circle className="w-5 h-5 fill-indigo-600 text-indigo-600" />
      <span className="text-2xl font-bold text-slate-800">coterie</span>
    </div>
  );
}