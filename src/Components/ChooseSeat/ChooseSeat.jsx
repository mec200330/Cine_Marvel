import { useContext, useEffect, useState } from "react";
import { DataContext } from "../../Context/DataContext";
import "./ChooseSeat.css";
import "bootstrap/dist/css/bootstrap.css";
import Button from "../Button/Button";
import Loading from "../Loading/Loading";
import { MovieContext } from "../../Context/MovieContext";
import { Link } from "react-router-dom";


  const ChooseSeat = () => {
  const {movies, selectMovieInfo, setSelectMovieInfo} =useContext(MovieContext)
  const { seats, setSeats, fetching } = useContext(DataContext);
  const [disponible, setDisponible] = useState();
  const [buy, setBuy] = useState(false);
  const [movieSeats, setMovieSeats] = useState(movies)
  const[selectedMovieSeat, setSelectedMovieSeat]=useState()
  
  const buyTicket = () => {
    console.log("comprado");
    setBuy(!buy);
    console.log(!buy);

  };
  const seatsCopy = [...seats] //esto va dentro de un useEffect
  // useEffect(()=>{setMovieSeats(seatsCopy=[...seats])}, [seats])
 
  // 1. actualizar la API con una key que sea selectedSeats con los asientos disponibles totales 
  // 1a. cuando pintes una sala , pintas tantas sillas grises como haya en movie.availableSeats, y el resto estarán en rojo
  // 2. cuando selecciones un asiento, le restas uno a este valor 

  const Select = (add) => {
    console.log("te vas a sentar en miiiii");
     // setDisponible(!disponible);
      const seatIdent = {
      ...add,
      purchased: false,
      quantity: 1,
      
    };

switch (seatIdent.available) {
  case true: setDisponible(!disponible)
    
    break;
case false: setDisponible(disponible)
  

    break;
}

setSeats([...seats, seatIdent])
console.log(disponible);
 console.log(seatIdent.available)   
// if(seatIdent.available){
//   setDisponible(!disponible)
// }
//   console.log(disponible);


    ;
    const selectSeat = seatsCopy.some((seatId) => seatId.id === seatIdent.id);
    console.log(selectSeat);
    if (selectSeat) {
      seatsCopy.map((choose) => {
        if (choose.id === seatIdent.id) {
          choose.available = disponible;
          
        }
      });
    }
setSeats([...seats, seatsCopy])
    console.log(seats);
  };

  return (
    <div className="seatM d-flex  ">
      {fetching && <Loading/>}
     
      {seatsCopy.map((seat) => {
        if (!seat.purchased && seat.id > 0 && seat.id <= selectMovieInfo.selectedSeats
          ) {
          seat.purchased = buy;
          
          return (
            <div className="d-flex  justify-content">
              
              <article className="seatDiagramIzq " key={seat.id}>
                <p> S{seat.name}</p>
                <img
                  onClick={() => Select(seat)}
                  className={seat.available ? "seatYes" : "seatNot"}
                  src={seat.img} 
                />
              </article>
            </div>
          );
        }

        if (seat.purchased && !seat.available) {
          seat.purchased = buy;
          return (
            <div className="d-flex justify-content-end ">
              <article className="seatDiagramDer " key={seat.id}>
                <p> S{seat.name}</p>
                <img className="seatselect" src={seat.img} />
              </article>
            </div>
          );
        }

        if (seat.available && seat.purchased) {
          return (
            <div className="d-flex  justify-content">
              <article className="seatDiagramIzq col" key={seat.id}>
                <p> S{seat.name}</p>
                <img
                  onClick={() => Select(seat)}
                  className={seat.available ? "seatYes" : "seatNot"}
                  src={seat.img}
                />
              </article>
            </div>
          );
        }
       
      })}
          
      <Button 
        accion={() => buyTicket()}
        clase="cartelera4 purchased"
        nombre="Comprar"
        estado ={!disponible? "disable":""}
      ></Button>
    </div>
  );
};

export default ChooseSeat;
