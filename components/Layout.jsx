import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <div className='container mx-auto font-sans antialiased'>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
