
import { motion } from "framer-motion";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { MovieContext } from "../../Context/MovieContext";
import Button from "../Button/Button";
import Loading from "../Loading/Loading";
import "./MovieList.css";

const MovieList = () => {
  const { movies, fetching, setSelectMovieInfo } = useContext(MovieContext);
 
  const selectMovie = (infoMovie) => {
    console.log("Selecionaste esta movie");
    const movieInfo = {
    ...infoMovie
    }
    console.log(movieInfo);
    setSelectMovieInfo(movieInfo)
  };



  return (
    <motion.div className="premiereContainer">
      <motion.div className="premiereInfo col" drag='x' dragConstraints={{ right: 0, left: -725 }}>
        
        {fetching && <Loading/>}
        {movies.map((movie) => {
          if (movie.premiere) {
            return (
              <motion.div key={movie.id} >
                <img className="premiereImg" src={movie.img}></img>
             <Link className="sliderPremiereButton" to={'/selectedMovie'}><Button accion={()=>selectMovie(movie)} clase='ver' nombre='Ver'></Button></Link>   
                
              </motion.div>
              
            );
            
          }
        })}
        
      </motion.div>
      
    </motion.div>
  );
};

export default MovieList;
