import Kendaraan from "./components/kendaraan";
import CustomForm from "./components/customForm";

function App() {
  return (
    <div className="App">
      <Kendaraan jenis="Motor" merk1="Honda" merk2="Yamaha" merk3="Suzuki"/>
      <Kendaraan jenis="Mobil" merk1="honda" merk2="Mitsubishi" merk3="Tesla"/>
      <CustomForm/>
    </div>
  );
}

export default App;
