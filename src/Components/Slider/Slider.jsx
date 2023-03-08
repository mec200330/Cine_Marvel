import { motion } from "framer-motion";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { MovieContext } from "../../Context/MovieContext";
import Button from "../Button/Button";
import Loading from "../Loading/Loading";

import "./Slider.css";

const Slider = () => {
  const { movies, setMovies, selectMovieInfo, setSelectMovieInfo, fetching } = useContext(MovieContext);
  const [moviesBack, setMoviesBack] = useState(movies)

    


  const selectMovie = (infoMovie) => {
    console.log("Selecionaste esta movie");
    const movieInfo = {
      ...infoMovie,
    };
    console.log(movieInfo);
    setSelectMovieInfo(movieInfo);
   setMovies([...movies, moviesBack])
  };

  return (
    
    <motion.div className="container">
       
      <motion.div
        className="col slider"
        drag="x"
        dragConstraints={{ right: 0, left: -13902 }}
      >
        {fetching && <Loading/>}
        {moviesBack.map((images) => {
          return (
            <motion.div key={images.id}>
              <img className="img" src={images.img}></img>
              <Link className="buttonSlider" to={"/selectedMovie"}>
                {" "}
                <Button accion={() => selectMovie(images)} clase="ver" nombre="Ver"></Button>{" "}
              </Link>
            </motion.div>
          );
        })}
      </motion.div>
    </motion.div>
  );
};

export default Slider;
