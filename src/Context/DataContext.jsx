import axios from "axios";
import { createContext, useState, useEffect } from "react";
export const DataContext = createContext()

const DataProvider = ({children})=>{
const apiURL = 'https://api-seat-mec200330.vercel.app/'
const [seats, setSeats] = useState ([])
const [fetching, setFeching] = useState(true)

useEffect(()=>{

    axios
    .get(apiURL)
    .then((response)=> {
        setSeats(response.data.seat)
        console.log(response);
        setFeching(false)
    })
    .catch(err=> console.error(err))
}, [])

return(
    <DataContext.Provider value ={{seats, setSeats, fetching}} >
      {children}

    </DataContext.Provider>
)

}

export default DataProvider
