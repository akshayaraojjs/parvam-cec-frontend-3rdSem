export default function Contact() {
  return (
    <div className="container mt-5">
      <h2>Contact Us</h2>
      <form className="mt-4">
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input type="text" className="form-control" placeholder="Enter your name" required />
        </div>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input type="email" className="form-control" placeholder="Enter your email" required />
        </div>
        <div className="mb-3">
          <label className="form-label">Message</label>
          <textarea className="form-control" rows="3" placeholder="Your message"></textarea>
        </div>
        <button className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
}