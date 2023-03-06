import { useContext } from "react";
import { Link } from "react-router-dom";
import Button from "../Components/Button/Button";
import { MovieContext } from "../Context/MovieContext";
import "./SelectedMovie.css";


const SelectedMovie = () => {
  const {selectMovieInfo } = useContext(MovieContext);
  
  console.log(selectMovieInfo);

  return (
    <article className="movieContainer">
        <section className="sectionInfo row">  
      <div className="col">
        <img className="movieInfoImg" src={selectMovieInfo.img}></img>
      </div>

      <div className="movieInfoData col ">
        <h1>{selectMovieInfo.movie_title}</h1>
        <h3>Genero: {selectMovieInfo.genre}</h3>
        <h3>Año de estreno: {selectMovieInfo.release_year}</h3>
        <h3>Clasificación: +{selectMovieInfo.classification}</h3>
        <Link to='/asientos'><Button clase='cartelera2' nombre='Reservar'></Button> </Link>  
      </div>
      </section>
    </article>
  );
};

export default SelectedMovie;
