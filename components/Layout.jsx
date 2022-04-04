import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <div className='mx-3 sm:mx-4 md:mx-5 lg:mx-auto'>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
