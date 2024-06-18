import React, { type ReactNode } from 'react';
import { Header } from './Header';
import { Footer } from './Footer';

interface LayoutProps {
  children: ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => (
  <div className="container mx-auto font-sans antialiased">
    <Header />
    {children}
    <Footer />
  </div>
);
