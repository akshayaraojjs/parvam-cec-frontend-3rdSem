import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-secondary">
      <div className="container">
        <a className="navbar-brand fw-bold" href="/">
          <i className="bi bi-shop me-2"></i>
          ShopEasy
        </a>
        
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <NavLink 
                to="/" 
                className={({ isActive }) => 
                  isActive ? "nav-link active fw-bold" : "nav-link"
                }
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink 
                to="/products" 
                className={({ isActive }) => 
                  isActive ? "nav-link active fw-bold" : "nav-link"
                }
              >
                Products
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink 
                to="/services" 
                className={({ isActive }) => 
                  isActive ? "nav-link active fw-bold" : "nav-link"
                }
              >
                Services
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;