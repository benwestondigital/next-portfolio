import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <div className='container antialiased mx-auto font-sans'>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
