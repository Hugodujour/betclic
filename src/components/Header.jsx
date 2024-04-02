import Betclic from "../assets/images/Betclic.png";
import "../assets/styles/Header.css";

function Header() {
  return (
    <>
      <header className="p-2 bg-red text-white">
        <div className="container-fluid">
          <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
            <a
              href="/"
              className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none"
            >
              <img src={Betclic} className="betclic-img" />
            </a>

            <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
              <li>
                <a href="#" className="nav-link text-active">
                  Sport
                </a>
              </li>
              <li>
                <a href="#" className="nav-link">
                  Live
                </a>
              </li>
              <li>
                <a href="#" className="nav-link">
                  Défis
                </a>
              </li>
              <li>
                <a href="#" className="nav-link">
                  Promotions
                </a>
              </li>
              <li>
                <a href="#" className="nav-link">
                  Poker
                </a>
              </li>
              <li>
                <a href="#" className="nav-link">
                  Turf
                </a>
              </li>
            </ul>

            <div className="text-end">
              <button type="button" className="btn btn-primary me-2">
                Inscription
              </button>
              <button type="button" className="btn btn-secondary">
                Connexion
              </button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
export default Header;
