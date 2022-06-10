import { Link } from "react-router-dom";
import "./style.scss";

function Header(props) {
  return (
    <header>
      <div className="headerpc">
        <Link to="/">
          <div className="navbutton borderleft">
            <p>Accueil</p>
          </div>
        </Link>

        <Link to="/">
          <div className="navbutton borderleft">
            <p>Accueil</p>
          </div>
        </Link>

        <Link to="/me/profile">
          <div className="navbutton borderright">
            <p>Moi</p>
          </div>
        </Link>
      </div>
    </header>
  );
}
export default Header;
