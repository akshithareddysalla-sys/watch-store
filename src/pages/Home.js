import Navbar from '../components/Navbar.js';
import ProductCard from '../components/ProductCard.js';
import Footer from '../components/Footer.js';

function Home() {
  return (
    <>

      <Navbar />
      
      <div className="container">
        <h1>Welcome to the Watch Store</h1>
        <p>Discover our exclusive collection of watches.</p>

        <div className="product-grid">
          <ProductCard />
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Home;