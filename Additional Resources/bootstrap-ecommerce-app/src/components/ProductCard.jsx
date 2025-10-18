const ProductCard = (props) => {
  const handleAddToCart = () => {
    alert(`Added ${props.title} to cart!`);
  };

  const handleQuickView = () => {
    alert(`Quick view: ${props.title}`);
  };

  return (
    <div className="card h-100 shadow-sm">
      <img 
        src={props.image} 
        className="card-img-top" 
        alt={props.title}
        style={{ height: '200px', objectFit: 'cover' }}
      />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text flex-grow-1">{props.description}</p>
        <div className="d-flex justify-content-between align-items-center mb-3">
          <span className="h5 text-primary mb-0">${props.price}</span>
          {props.rating && (
            <div className="text-warning">
              {'★'.repeat(props.rating)}{'☆'.repeat(5 - props.rating)}
            </div>
          )}
        </div>
        <div className="d-grid gap-2">
          <button 
            className="btn btn-primary"
            onClick={handleAddToCart}
          >
            Add to Cart
          </button>
          <button 
            className="btn btn-outline-secondary"
            onClick={handleQuickView}
          >
            Quick View
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;