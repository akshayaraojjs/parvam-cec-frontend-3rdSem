import ProductCard from '../components/ProductCard';
import TestimonialCard from '../components/TestimonialCard';

const Home = () => {
  const featuredProducts = [
    {
      title: "Wireless Headphones",
      description: "High-quality wireless headphones with noise cancellation.",
      price: 99.99,
      rating: 4,
      image: "https://via.placeholder.com/300x200/007bff/ffffff?text=Headphones"
    },
    {
      title: "Smart Watch",
      description: "Feature-rich smartwatch with health monitoring.",
      price: 199.99,
      rating: 5,
      image: "https://via.placeholder.com/300x200/28a745/ffffff?text=Smart+Watch"
    },
    {
      title: "Laptop Backpack",
      description: "Durable laptop backpack with multiple compartments.",
      price: 49.99,
      rating: 4,
      image: "https://via.placeholder.com/300x200/ffc107/000000?text=Backpack"
    }
  ];

  const testimonials = [
    {
      name: "John Smith",
      role: "Regular Customer",
      testimonial: "Great products and excellent customer service!",
      rating: 5,
      avatar: "https://via.placeholder.com/100/007bff/ffffff?text=JS"
    },
    {
      name: "Sarah Johnson",
      role: "Business Owner",
      testimonial: "The quality exceeded my expectations. Highly recommended!",
      rating: 4,
      avatar: "https://via.placeholder.com/100/28a745/ffffff?text=SJ"
    },
    {
      name: "Mike Davis",
      role: "Tech Enthusiast",
      testimonial: "Fast shipping and great prices. Will shop again!",
      rating: 5,
      avatar: "https://via.placeholder.com/100/6f42c1/ffffff?text=MD"
    }
  ];

  const handleShopNow = () => {
    alert('Redirecting to products page...');
  };

  const handleLearnMore = () => {
    alert('Learn more about our services...');
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-primary text-white py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h1 className="display-4 fw-bold mb-4">Welcome to ShopEasy</h1>
              <p className="lead mb-4">
                Discover amazing products at unbeatable prices. Quality guaranteed with fast delivery.
              </p>
              <div className="d-flex gap-3">
                <button 
                  className="btn btn-light btn-lg"
                  onClick={handleShopNow}
                >
                  Shop Now
                </button>
                <button 
                  className="btn btn-outline-light btn-lg"
                  onClick={handleLearnMore}
                >
                  Learn More
                </button>
              </div>
            </div>
            <div className="col-lg-6">
              <img 
                src="https://via.placeholder.com/600x400/ffffff/007bff?text=Shop+Now" 
                alt="Hero" 
                className="img-fluid rounded shadow"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-5">
        <div className="container">
          <h2 className="text-center mb-5">Featured Products</h2>
          <div className="row g-4">
            {featuredProducts.map((product, index) => (
              <div key={index} className="col-md-4">
                <ProductCard {...product} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-5 bg-light">
        <div className="container">
          <h2 className="text-center mb-5">What Our Customers Say</h2>
          <div className="row g-4">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="col-md-4">
                <TestimonialCard {...testimonial} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-5 bg-dark text-white">
        <div className="container text-center">
          <h2 className="mb-4">Ready to Get Started?</h2>
          <p className="lead mb-4">Join thousands of satisfied customers today.</p>
          <button 
            className="btn btn-primary btn-lg"
            onClick={handleShopNow}
          >
            Start Shopping
          </button>
        </div>
      </section>
    </div>
  );
};

export default Home;