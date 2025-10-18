const TestimonialCard = (props) => {
  return (
    <div className="card border-0 shadow-sm h-100">
      <div className="card-body text-center">
        <div className="mb-3">
          <img 
            src={props.avatar} 
            alt={props.name}
            className="rounded-circle"
            style={{ width: '80px', height: '80px', objectFit: 'cover' }}
          />
        </div>
        <h5 className="card-title">{props.name}</h5>
        <p className="text-muted mb-3">{props.role}</p>
        <p className="card-text">"{props.testimonial}"</p>
        <div className="text-warning">
          {'★'.repeat(props.rating)}{'☆'.repeat(5 - props.rating)}
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;