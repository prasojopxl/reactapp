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
      {/* <Kendaraan type="Motor" merks={["yamaha","honda"]}/>
      <Kendaraan type="Mobil" merks={["honda","toyota","tesla"]}/> */}
      {/* <CustomForm/> */}
      {/* <DayThree/> */}

      <hr/>
      <PapanNilai/>
      {tampil && <Coba/>}
      <button onClick={()=>setTampil(true)}>Tampil</button>
      <button onClick={()=>setTampil(false)}>Hidden</button>
    </div>
  );
}

export default App;
