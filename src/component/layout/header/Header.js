
import "./Header.css";
import globe from "../../../assets/img/globe.svg";
import toggleImage from "../../../assets/img/switchIcon.png";
import { Link } from "react-router-dom";

const Header = () => {
  
  return (
    <div>
      <nav className="navbar navbar-expand-lg ">
        <div className="container-fluid">
          <a className="navbar-brand  ms-lg-4" href="#"/>
          <span className="logo"> Alliance.</span> 
          <button
            class="navbar-toggler  float-end"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse d-fle"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link">
                 
                  <img src={toggleImage} width="70px" />
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link  ">Contact</a>
              </li>
              <li className="nav-item">
                <a className="nav-link">
                 
                  <img src={globe} />
                  <span className="ms-2">En</span>
                </a>
              </li>
              <li className="nav-item">
               
                <Link to="/signup" className="nav-link">
                 
                  <button className="btn btn-logout ">Sign Up</button>
                </Link>
              </li>
              <li className="nav-item">
               
              <Link to="/signin" className="nav-link">
                  <button className="btn btn-login">Login</button>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/*------------------- body---------------------*/}
    
    </div>
  );
};

export default Header;
