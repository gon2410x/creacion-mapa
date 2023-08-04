import logo from './logo.svg';
import './App.css';
import { MapContainer, TileLayer,Popup, Marker  } from 'react-leaflet'
import "leaflet/dist/leaflet.css"
import './Mapa.css'
import L from "leaflet";

import icon1 from 'leaflet/dist/images/marker-icon.png'

let VenueLocationIcon = new L.icon({
  // iconUrl: require("./assets/venue_location_icon.svg"),
  // iconRetinaUrl: require("./assets/venue_location_icon.svg"),
  iconUrl: require("./assets/com.png"),
  iconRetinaUrl: require("./assets/com.png"),
  iconAnchor: null,
  shadowUrl: null,
  shadowSize: null,
  shadowAnchor: null,
  iconSize: [15, 15],
  // className: "leaflet-venue-icon",
});


function App() {
  const position = [-24.188350756285242, -65.30349536351312 ]
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>

      <div>

      <MapContainer center={position} zoom={12.5} scrollWheelZoom={false} className='mapa'>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position} icon={VenueLocationIcon}>
          <Popup>
            {/* A pretty CSS3 popup. <br /> Easily customizable. */}
          </Popup>
        </Marker>
      </MapContainer>
      </div>

      <h3>second map</h3>
      <div>

      <MapContainer center={position} zoom={12.5} scrollWheelZoom={false} className='mapa'>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
      </div>
    </div>
  );
}

export default App;



//fuentes
//  https://react-leaflet.js.org/
//  https://www.youtube.com/watch?v=NfDTO4c0xLc
//  https://www.youtube.com/watch?v=FMc1FDm2ydQ&list=PL3lEHoDPkc-5I3QN3WrGxQhzp1F2ryZsM
