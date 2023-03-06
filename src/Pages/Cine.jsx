import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import Button from "../Components/Button/Button";
import Loading from "../Components/Loading/Loading";
import { MovieContext } from "../Context/MovieContext";
import "./Cine.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {Dropdown, DropdownItem, DropdownMenu, DropdownToggle} from "reactstrap";

const Cine = () => {
  const { movies, selecMovieInfo, setSelecMovieInfo, fetching, setFetching } =
    useContext(MovieContext);
  
  const [dropdown, setDropdown] = useState(false);
  
  const [moviesBackUp, setMoviesBackUp] = useState(movies)
   
  const abrirdrop = () => {
    setDropdown(!dropdown);
  };

  
  const filterYear = () => {
  
    console.log("me estas filtrando");
    const filteredArray = movies.sort((x, y) => x.release_year - y.release_year);
  };

  const filterChrono=()=>{
   
    const filteredArray = movies.sort((x, y) => x.chronological_order - y.chronological_order);
  }
const filterName =()=>{


function SortArray(x, y) {
    return x.movie_title.localeCompare(y.movie_title)
    
  }

  var s = movies.sort(SortArray)
  console.log(s);


}
  


  return (
    <article className="moviesListContainer">
       
      <Dropdown  isOpen={dropdown} toggle={abrirdrop}>
        <DropdownToggle className="dropdownChange" caret>Filtrar Películas</DropdownToggle>

        <DropdownMenu>
          <DropdownItem onClick={() => filterYear() }>Ordenar por año de estreno</DropdownItem>
          <DropdownItem onClick={()=> filterChrono()}>Ordenar por  cronológicamente</DropdownItem>
          <DropdownItem onClick={()=> filterName()}>Ordenar AZ</DropdownItem>
        </DropdownMenu>
      </Dropdown>

      {fetching && <Loading />}
      {!fetching && moviesBackUp.map((moviesList) => {
        return (
        <section key={moviesList.id} className="moviesListInfo row">




            <div  className="col">
              <img className="moviesListImg" src={moviesList.img}></img>
            </div>

            <div className="moviesListDataInfo col">
              <h1>{moviesList.movie_title}</h1>
              <h3>Genero: {moviesList.genre}</h3>
              <h3>Año de estreno: {moviesList.release_year}</h3>
              <h3>Clasificación: +{moviesList.classification}</h3>
              <Link to="/asientos">
                {" "}
                <Button clase="cartelera2" nombre="Reservar"></Button>{" "}
              </Link>
            </div>
          </section>
        );
      })}
    </article>
  );
};

export default Cine;
