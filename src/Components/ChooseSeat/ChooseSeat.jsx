import { useContext, useState } from "react";
import { DataContext } from "../../Context/DataContext";
import "./ChooseSeat.css";
import "bootstrap/dist/css/bootstrap.css";
import Button from "../Button/Button";
import Loading from "../Loading/Loading";

const ChooseSeat = () => {
  const { seats, setSeats, fetching } = useContext(DataContext);
  const [disponible, setDisponible] = useState(false);
  const [buy, setBuy] = useState(false);

  const buyTicket = () => {
    console.log("comprado");
    setBuy(!buy);
    console.log(!buy);
  };

  // 1. actualizar la API con una key que sea selectedSeats con los asientos disponibles totales 
  // 1a. cuando pintes una sala , pintas tantas sillas grises como haya en movie.availableSeats, y el resto estarán en rojo
  // 2. cuando selecciones un asiento, le restas uno a este valor 

  

  const Select = (add) => {
    console.log("te vas a sentar en miiiii");

    setDisponible(!disponible);
    console.log(disponible);

    const seatIdent = {
      ...add,
      purchased: false,
    };
    console.log(seatIdent);
    const selectSeat = seats.some((seatId) => seatId.id === seatIdent.id);
    console.log(selectSeat);
    if (selectSeat) {
      seats.map((choose) => {
        if (choose.id === seatIdent.id) {
          choose.available = disponible;
        }
      });
    }

    console.log(seats);
  };

  return (
    <div className="seatM d-flex  ">
      {fetching && <Loading/>}
      {seats.map((seat) => {
        if (!seat.purchased && seat.id > 0 && seat.id <= 5) {
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
        clase="cartelera4"
        nombre="Comprar"
      ></Button>
    </div>
  );
};

export default ChooseSeat;
