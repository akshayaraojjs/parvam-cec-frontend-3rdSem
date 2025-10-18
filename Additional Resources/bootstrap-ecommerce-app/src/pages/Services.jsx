const Services = () => {
  const services = [
    {
      icon: "🚚",
      title: "Fast Delivery",
      description: "Free delivery on orders over $50. Same-day delivery available in selected areas."
    },
    {
      icon: "↩️",
      title: "Easy Returns",
      description: "30-day return policy. No questions asked return process for your convenience."
    },
    {
      icon: "🔒",
      title: "Secure Payment",
      description: "Your payments are secure with our encrypted payment processing system."
    },
    {
      icon: "📞",
      title: "24/7 Support",
      description: "Round-the-clock customer support to help you with any queries or issues."
    },
    {
      icon: "🏷️",
      title: "Best Prices",
      description: "We guarantee the best prices with our price match policy."
    },
    {
      icon: "⭐",
      title: "Quality Assurance",
      description: "All products are quality checked to ensure you receive the best."
    }
  ];

  const handleServiceClick = (serviceTitle) => {
    alert(`Learn more about ${serviceTitle}`);
  };

  return (
    <div className="py-5">
      <div className="container">
        {/* Page Header */}
        <div className="row mb-5">
          <div className="col-12 text-center">
            <h1 className="display-5 fw-bold">Our Services</h1>
            <p className="lead text-muted">
              We provide exceptional services to enhance your shopping experience
            </p>
          </div>
        </div>

        {/* Services Grid */}
        <div className="row g-4">
          {services.map((service, index) => (
            <div key={index} className="col-lg-4 col-md-6">
              <div 
                className="card h-100 shadow-sm border-0 service-card"
                onClick={() => handleServiceClick(service.title)}
                style={{ cursor: 'pointer', transition: 'transform 0.2s' }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-5px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <div className="card-body text-center p-4">
                  <div className="display-1 mb-3">{service.icon}</div>
                  <h4 className="card-title text-primary">{service.title}</h4>
                  <p className="card-text text-muted">{service.description}</p>
                  <button className="btn btn-outline-primary mt-2">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info Section */}
        <div className="row mt-5">
          <div className="col-12">
            <div className="card bg-light border-0">
              <div className="card-body p-5 text-center">
                <h2 className="mb-4">Why Choose Us?</h2>
                <div className="row">
                  <div className="col-md-4 mb-3">
                    <h5 className="text-primary">1000+</h5>
                    <p className="text-muted">Happy Customers</p>
                  </div>
                  <div className="col-md-4 mb-3">
                    <h5 className="text-primary">500+</h5>
                    <p className="text-muted">Products</p>
                  </div>
                  <div className="col-md-4 mb-3">
                    <h5 className="text-primary">50+</h5>
                    <p className="text-muted">Cities Served</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;