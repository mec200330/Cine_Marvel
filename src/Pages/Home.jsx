import { useContext } from "react"
import Cartelera from "../Components/Cartelera/Cartelera"
import Estreno from "../Components/Estreno/Estreno"
import { MovieContext } from "../Context/MovieContext"



const Home = () => {
   const {movies} = useContext (MovieContext)
  return (
    <div>
      <Estreno/>
      <Cartelera/>
      
    </div>
  )
}

export default Home
