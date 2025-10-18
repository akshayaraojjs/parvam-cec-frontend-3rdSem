import ProductCard from '../components/ProductCard';

const Products = () => {
  const allProducts = [
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
    },
    {
      title: "Bluetooth Speaker",
      description: "Portable Bluetooth speaker with amazing sound quality.",
      price: 79.99,
      rating: 4,
      image: "https://via.placeholder.com/300x200/dc3545/ffffff?text=Speaker"
    },
    {
      title: "Phone Case",
      description: "Protective phone case with stylish design.",
      price: 24.99,
      rating: 3,
      image: "https://via.placeholder.com/300x200/6f42c1/ffffff?text=Phone+Case"
    },
    {
      title: "Tablet Stand",
      description: "Adjustable tablet stand for comfortable viewing.",
      price: 34.99,
      rating: 4,
      image: "https://via.placeholder.com/300x200/fd7e14/ffffff?text=Tablet+Stand"
    }
  ];

  const handleCategoryFilter = (category) => {
    alert(`Filtering by ${category}...`);
  };

  return (
    <div className="py-5">
      <div className="container">
        {/* Page Header */}
        <div className="row mb-5">
          <div className="col-12">
            <h1 className="display-5 fw-bold text-center">Our Products</h1>
            <p className="lead text-center text-muted">
              Discover our wide range of high-quality products
            </p>
          </div>
        </div>

        {/* Filter Section */}
        <div className="row mb-4">
          <div className="col-12">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Filter by Category</h5>
                <div className="d-flex flex-wrap gap-2">
                  <button 
                    className="btn btn-outline-primary"
                    onClick={() => handleCategoryFilter('All')}
                  >
                    All
                  </button>
                  <button 
                    className="btn btn-outline-primary"
                    onClick={() => handleCategoryFilter('Electronics')}
                  >
                    Electronics
                  </button>
                  <button 
                    className="btn btn-outline-primary"
                    onClick={() => handleCategoryFilter('Accessories')}
                  >
                    Accessories
                  </button>
                  <button 
                    className="btn btn-outline-primary"
                    onClick={() => handleCategoryFilter('Wearables')}
                  >
                    Wearables
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="row g-4">
          {allProducts.map((product, index) => (
            <div key={index} className="col-lg-4 col-md-6">
              <ProductCard {...product} />
            </div>
          ))}
        </div>

        {/* Pagination */}
        <nav className="mt-5">
          <ul className="pagination justify-content-center">
            <li className="page-item disabled">
              <a className="page-link" href="#" tabIndex="-1">Previous</a>
            </li>
            <li className="page-item active">
              <a className="page-link" href="#">1</a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">2</a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">3</a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">Next</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Products;