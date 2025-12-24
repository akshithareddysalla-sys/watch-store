import "../css/ProductCard.css";

function ProductCard() {
  return (
    <div className="product-grid">
      <div className="product-card">
        <img src={require('../assets/media/images/se.png')} width={150} alt="Apple Watch SE" />
        <h2>Apple Watch SE</h2>
        <p>$99.99</p>
        <button>Add to Cart</button>
      </div>
      <div className="product-card">
        <img src={require('../assets/media/images/u2.png')} width={150} alt="Apple Watch Ultra" />
        <h2>Apple Watch Ultra 2</h2>
        <p>$799.99</p>
        <button>Add to Cart</button>
      </div>
      <div className="product-card">
        <img src={require('../assets/media/images/ten.png')} width={150} alt="Apple Watch Series 8" />
        <h2>Apple Watch Series 10</h2>
        <p>$399.99</p>
        <button>Add to Cart</button>
      </div>
      <div className="product-card">
        <img src={require('../assets/media/images/eleven.png')} width={150} alt="Apple Watch Series 9" />
        <h2>Apple Watch Series 11</h2>
        <p>$499.99</p>
        <button>Add to Cart</button>
      </div>
      <div className="product-card">
        <img src={require('../assets/media/images/u3.png')} width={150} alt="AirPods 2nd Generation" />
        <h2>Apple Watch Ultra 3</h2>
        <p>$129.99</p>
        <button>Add to Cart</button>
      </div>
      <div className="product-card">
        <img src={require('../assets/media/images/se3.png')} width={150} alt="AirPods 3rd Generation" />
        <h2>Apple Watch SE 3</h2>
        <p>$179.99</p>
        <button>Add to Cart</button>
      </div>
    </div>
  );
}

export default ProductCard;