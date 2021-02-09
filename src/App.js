import {useState} from "react"
// import Kendaraan from "./components/kendaraan";
// import CustomForm from "./components/customForm";
// import DayThree from "./components/daythree";
import PapanNilai from "./components/papanNilai";
import Coba from "./components/coba";

function App() {
  const [tampil, setTampil] = useState(false)
  return (
    <div className="App">
      {/* <Kendaraan jenis="Motor" merk1="Honda" merk2="Yamaha" merk3="Suzuki"/>
      <Kendaraan jenis="Mobil" merk1="honda" merk2="Mitsubishi" merk3="Tesla"/>
      <CustomForm/> */}
      {/* <DayThree/> */}

      
      <PapanNilai/>
      {tampil && <Coba/>}
      <button onClick={()=>setTampil(true)}>Tampil</button>
      <button onClick={()=>setTampil(false)}>Hidden</button>
    </div>
  );
}

export default App;
