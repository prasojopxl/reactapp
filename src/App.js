import logo from './logo.svg';
import './App.css';
import Kendaraan from "./components/kendaraan";


function App() {
  return (
    <div className="App">
      <Kendaraan jenis="Motor" merk1="Honda" merk2="Yamaha" merk3="Suzuki"/>
      <Kendaraan jenis="Mobil" merk1="honda" merk2="Mitsubishi" merk3="Tesla"/>
    </div>
  );
}

export default App;
