import "./NavBar.css";
import Logo from "../../Assets/image/Marvel_logo.png";
import { Link } from "react-router-dom";
import Button from "../Button/Button";
import ReactPlayer from "react-player";

const NavBar = () => {
  // const URLVideo =
  //   "https://res.cloudinary.com/dw4ai2d9d/video/upload/v1678140150/videoplayback_fl2uql.webm";
  return (
    <nav className="navBar">
     
      <Link to="/">
        {" "}
        <img className="logo" src={Logo} alt="Icon Marvel" />{" "}
      </Link>
      <Link to="/"><Button clase="cartelera" nombre="Inicio">
          {" "}
        </Button>
      </Link>
      <Link to="/cine">
        {" "}
        <Button clase="cartelera1" nombre="Cartelera"></Button>
      </Link>
      <Button clase="cartelera2" nombre="Promos"></Button>
      <Button clase="cartelera3" nombre="Ubicación"></Button>
    <Link to='/pago'> <Button clase="cartelera4" nombre="Info"></Button></Link> 
      <Button clase="comprar" nombre="Comprar"></Button>
    </nav>
  );
};

export default NavBar;
