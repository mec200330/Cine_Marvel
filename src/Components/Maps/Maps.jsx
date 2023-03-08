import google from "google"
import GoogleMaps from "simple-react-google-maps";


const Maps = () => {
  return (
    <div>
      <GoogleMaps
      
      style={{height: "400px", }}
      zoom={12}
center={{
    lat: 40.127355,
    lng: -3.695428
}}
      />
    </div>
  )
}

export default Maps
