import { useState } from "react";
import {
  Search, ShoppingBag, Menu, X, ArrowRight,
  Heart, Gem, ShieldCheck, Truck, Sparkles
} from "lucide-react";
import "./App.css";

const categories = ["All", "Rings", "Necklaces", "Earrings", "Bracelets"];

const products = [
  {
    id: 1,
    name: "Royal Gold Necklace",
    category: "Necklaces",
    price: 45999,
    image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=700"
  },
  {
    id: 2,
    name: "Classic Diamond Ring",
    category: "Rings",
    price: 28999,
    image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=700"
  },
  {
    id: 3,
    name: "Elegant Gold Earrings",
    category: "Earrings",
    price: 18999,
    image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=700"
  },
  {
    id: 4,
    name: "Golden Bracelet",
    category: "Bracelets",
    price: 22999,
    image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=700"
  }
];

function App() {
  const [category, setCategory] = useState("All");
  const [search, setSearch] = useState("");
  const [cart, setCart] = useState([]);
  const [menuOpen, setMenuOpen] = useState(false);

  const filteredProducts = products.filter((product) => {
    const matchesCategory =
      category === "All" || product.category === category;

    const matchesSearch =
      product.name.toLowerCase().includes(search.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  const addToCart = (product) => {
    setCart((previous) => [...previous, product]);
  };

  return (
    <div className="app">
      <div className="announcement">
        ✨ Timeless Elegance. Crafted for Generations.
      </div>

      <header className="header">
        <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X /> : <Menu />}
        </button>

        <a href="#" className="logo">
          <span>BSSONS</span>
          <small>JEWELLERS</small>
        </a>

        <nav className={menuOpen ? "nav open" : "nav"}>
          <a href="#home" onClick={() => setMenuOpen(false)}>Home</a>
          <a href="#collections" onClick={() => setMenuOpen(false)}>Collections</a>
          <a href="#products" onClick={() => setMenuOpen(false)}>Jewellery</a>
          <a href="#about" onClick={() => setMenuOpen(false)}>Our Story</a>
        </nav>

        <div className="header-actions">
          <label className="search-box">
            <Search size={18} />
            <input
              placeholder="Search jewellery..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </label>

          <button className="cart-button">
            <ShoppingBag size={21} />
            <span>{cart.length}</span>
          </button>
        </div>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-content">
            <p className="eyebrow">THE ART OF FINE JEWELLERY</p>
            <h1>Elegance That<br />Lasts Forever.</h1>
            <p className="hero-description">
              Discover exquisite jewellery crafted with passion,
              precision and timeless beauty.
            </p>
            <a href="#products" className="primary-button">
              Explore Collection <ArrowRight size={18} />
            </a>
          </div>
        </section>

        <section className="benefits">
          <div><Gem /><span>Premium Craftsmanship</span></div>
          <div><ShieldCheck /><span>Quality Assured</span></div>
          <div><Truck /><span>Secure Delivery</span></div>
          <div><Sparkles /><span>Timeless Designs</span></div>
        </section>

        <section className="collections" id="collections">
          <div className="section-heading">
            <p className="eyebrow">DISCOVER YOUR STYLE</p>
            <h2>Our Collections</h2>
            <p>Find the perfect expression of your elegance.</p>
          </div>

          <div className="category-grid">
            {[
              ["Rings", "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=600"],
              ["Necklaces", "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600"],
              ["Earrings", "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600"],
              ["Bracelets", "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=600"]
            ].map(([name, image]) => (
              <button
                className="category-card"
                key={name}
                onClick={() => {
                  setCategory(name);
                  document.getElementById("products").scrollIntoView();
                }}
              >
                <img src={image} alt={name} />
                <span>{name}</span>
              </button>
            ))}
          </div>
        </section>

        <section className="products-section" id="products">
          <div className="section-heading">
            <p className="eyebrow">HANDPICKED FOR YOU</p>
            <h2>Featured Jewellery</h2>
            <p>Beautiful designs for every special moment.</p>
          </div>

          <div className="filters">
            {categories.map((item) => (
              <button
                key={item}
                className={category === item ? "filter active" : "filter"}
                onClick={() => setCategory(item)}
              >
                {item}
              </button>
            ))}
          </div>

          <div className="product-grid">
            {filteredProducts.map((product) => (
              <article className="product-card" key={product.id}>
                <div className="product-image">
                  <img src={product.image} alt={product.name} />
                  <button className="wishlist"><Heart size={19} /></button>
                  <button
                    className="quick-add"
                    onClick={() => addToCart(product)}
                  >
                    Add to Bag
                  </button>
                </div>
                <div className="product-info">
                  <p>{product.category}</p>
                  <h3>{product.name}</h3>
                  <strong>₹{product.price.toLocaleString("en-IN")}</strong>
                </div>
              </article>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <p className="empty">No matching jewellery found.</p>
          )}
        </section>

        <section className="story" id="about">
          <p className="eyebrow">OUR PROMISE</p>
          <h2>Beauty in Every Detail.</h2>
          <p>
            At BSSONS Jewellers, every design celebrates beauty,
            craftsmanship and the memories that last a lifetime.
          </p>
        </section>
      </main>

      <footer>
        <a href="#home" className="logo">
          <span>BSSONS</span>
          <small>JEWELLERS</small>
        </a>
        <p>© 2026 BSSONS Jewellers. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
