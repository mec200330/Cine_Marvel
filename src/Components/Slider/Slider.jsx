import { motion } from "framer-motion";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { MovieContext } from "../../Context/MovieContext";
import Button from "../Button/Button";
import Loading from "../Loading/Loading";
import "./Slider.css";

const Slider = () => {
  const { movies, selectMovieInfo, setSelectMovieInfo, fetching } = useContext(MovieContext);
  const [moviesBack, setMoviesBack] = useState(movies)

    


  const selectMovie = (infoMovie) => {
    console.log("Selecionaste esta movie");
    const movieInfo = {
      ...infoMovie,
    };
    console.log(movieInfo);
    setSelectMovieInfo(movieInfo);
  };

  return (
    
    <motion.div className="container">
       
      <motion.div
        className="col slider"
        drag="x"
        dragConstraints={{ right: 0, left: -13902 }}
      >
        {moviesBack.map((images) => {
          return (
            <motion.div key={images.id}>
              <img className="img" src={images.img}></img>
              <Link className="buttonSlider" to={"/selectedMovie"}>
                {" "}
                <Button
                  accion={() => selectMovie(images)}
                  clase="cartelera1"
                  nombre="Ver"
                ></Button>{" "}
              </Link>
            </motion.div>
          );
        })}
      </motion.div>
    </motion.div>
  );
};

export default Slider;
