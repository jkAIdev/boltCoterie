import React from 'react';
import { cn } from '@/lib/utils';

interface FooterLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

function FooterLink({ href, children, className }: FooterLinkProps) {
  return (
    <a 
      href={href} 
      className={cn(
        "text-slate-400 hover:text-white transition-colors", 
        className
      )}
    >
      {children}
    </a>
  );
}

export function Footer() {
  return (
    <footer className="w-full py-8 bg-slate-900 text-slate-300">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="mb-4">
          <p className="text-sm text-slate-400">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et 
            dolore magna aliqua.
          </p>
        </div>
        
        <div className="flex flex-col md:flex-row md:items-center md:justify-between border-t border-slate-700 pt-4">
          <div className="flex items-center gap-4 mb-4 md:mb-0">
            <FooterLink href="#">Unsubscribe</FooterLink>
            <span className="text-slate-600">|</span>
            <FooterLink href="#">Security</FooterLink>
            <span className="text-slate-600">|</span>
            <FooterLink href="#">Privacy statement</FooterLink>
          </div>
          
          <div className="text-sm text-slate-400">
            © 2023 Coterie Inc., Trademarks.
          </div>
        </div>
      </div>
    </footer>
  );
}