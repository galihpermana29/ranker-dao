import { Link } from 'react-router-dom';

import Logo from '../../assets/img/Logo.png';
import './style.scss';
const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark nav-container">
      <div className="container-fluid">
        <Link to="/">
          <img src={Logo} className="nav-logo" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a
                href="https://t.me/rankerdao"
                target="_blank"
                rel="noopener noreferrer"
                className="nav-link-custom"
                aria-current="page">
                TELEGRAM
              </a>
            </li>
            <li className="nav-item">
              <a
                href="https://twitter.com/rankerdao"
                target="_blank"
                rel="noopener noreferrer"
                className="nav-link-custom">
                TWITTER
              </a>
            </li>
            <li className="nav-item">
              <a
                href="http://discord.gg/rankerdao"
                target="_blank"
                rel="noopener noreferrer"
                className="nav-link-custom">
                DISCORD
              </a>
            </li>
            <li className="nav-item">
              <a href="/about" className="nav-link-custom">
                $RANKER
              </a>
            </li>
            <li className="nav-item">
              <a
                // href="https://https://t.me/rankerdao"
                target="_blank"
                rel="noopener"
                className="nav-link-custom">
                COMING SOON
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
