import ChooseSeat from "../Components/ChooseSeat/ChooseSeat";
import "./Asientos.css";
import Seat from "../Assets/image/Seatcine_zs1m3v.png";

const Asientos = () => {
  return (
    <div className="asientoscontainer row">
      <div className="asientos col">
        <button className="pantalla">Pantalla</button>
        <ChooseSeat />
      </div>

      <div className="seatstate col">
        
        <div>
          <p className="titlestate">Disponible</p>
          <img className="seatdisponible" src={Seat} />
        </div>
        <div>
          <p className="titlestate">Seleccionado</p>
          <img className="seatseleccionado" src={Seat} />
        </div>
        <div>
          <p className="titlestate">Ocupado</p>
          <img className="seatocupado" src={Seat} />
        </div>
        <div className="infoUsers">

          <h2>¿Cómo usar tus entradas?</h2>
          <br />

          <h3>Muestra tu QR</h3>
          <p>
            Accede directamente al recinto mostrando el código QR de tu entrada
            impresa o en tu smartphone.
          </p>
          <h3>Taquillas</h3>
          <p>
            Podrás recoger tus entradas en las taquillas del propio recinto en:
            Calle Coslada 5, Madrid.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Asientos;
