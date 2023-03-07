import { useContext } from "react"
import Cartelera from "../Components/Cartelera/Cartelera"
import Estreno from "../Components/Estreno/Estreno"
import { MovieContext } from "../Context/MovieContext"
import './Home.css'


const Home = () => {
   const {movies} = useContext (MovieContext)
  return (
    <div className="home">
      <Estreno/>
      <Cartelera/>
    </div>
  )
}

export default Home
