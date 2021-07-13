import {Link } from "react-router-dom";
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import FaceRoundedIcon from '@material-ui/icons/FaceRounded';
import "./style.scss";


function Header(props) {
  return (
    <header>
      <div className="headerpc">
        <Link to="/">
          <div className="navbutton borderleft">
            <HomeRoundedIcon />
            <p>ACCUEIL</p>
          </div>
        </Link>

        <Link to="/me">
          <div className="navbutton borderright">
            <FaceRoundedIcon />
            <p>Moi</p>
          </div>
        </Link>
      
      </div>
    </header>
  );
}
export default Header;
