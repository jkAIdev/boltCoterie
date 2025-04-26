import React from 'react';
import { Logo } from './Logo';

export function Navbar() {
  return (
    <header className="w-full py-4 px-6 md:px-10 bg-white">
      <div className="max-w-7xl mx-auto">
        <Logo />
      </div>
    </header>
  );
}