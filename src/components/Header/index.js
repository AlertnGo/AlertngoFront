import {Link } from "react-router-dom";
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import FaceOutlinedIcon from '@material-ui/icons/FaceOutlined';
import "./style.scss";


function Header(props) {
  return (
    <header>
      <div className="headerpc">
        <Link to="/">
          <div className="navbutton borderleft">
            <HomeOutlinedIcon />
            <p>ACCUEIL</p>
          </div>
        </Link>

        <Link to="/me">
          <div className="navbutton borderright">
            <FaceOutlinedIcon />
            <p>Moi</p>
          </div>
        </Link>
      
      </div>
    </header>
  );
}
export default Header;
