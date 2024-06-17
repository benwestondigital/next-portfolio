import React, { ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="container mx-auto font-sans antialiased">
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
