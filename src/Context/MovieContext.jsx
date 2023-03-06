import axios from "axios";
import { createContext, useEffect, useState } from "react";


export const MovieContext = createContext()

const MovieContextProvider = ({children})=>{
const apiURL = 'https://api-movie-rho.vercel.app/movielist.json'
const [movies, setMovies] = useState ([])
const [selectMovieInfo, setSelectMovieInfo] =useState([])
const [fetching, setFetching] = useState (true)

useEffect(()=>{
axios
.get(apiURL)
.then((response)=>{
    setMovies(response.data)
    console.log(response);
    setFetching(false)
})
.catch(err=> console.error(err))
}, [])

return (
    <MovieContext.Provider value ={{movies, setMovies, fetching, selectMovieInfo, setSelectMovieInfo, setFetching}} >  
      {children}
    </MovieContext.Provider>
)


}

export default MovieContextProvider