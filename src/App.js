// import Kendaraan from "./components/kendaraan";
// import CustomForm from "./components/customForm";
// import DayThree from "./components/daythree";
// import PapanNilai from "./components/papanNilai";
// import Coba from "./components/coba";
// import LoginForm from "./components/loginForm";
// import {Cart} from "./Cart";
// import {CustomForm1} from "./components/customform1";
import {Cart} from "./components/cart/Cart";
import {Todo} from "./components/todo/Todo";


function App() {
  // const [tampil, setTampil] = useState(false)
  return (
    <div className="App">
      {/* <Kendaraan type="Motor" merks={["yamaha","honda"]}/>
      <Kendaraan type="Mobil" merks={["honda","toyota","tesla"]}/> */}
      {/* <CustomForm/> */}
      {/* <DayThree/> */}

      {/* <hr/>
      <PapanNilai/>
      {tampil && <Coba/>}
      <button onClick={()=>setTampil(true)}>Tampil</button>
      <button onClick={()=>setTampil(false)}>Hidden</button> */}

      {/* <LoginForm/> */}
      {/* <CustomForm1/> */}
      <Cart/>
      <Todo/>

    </div>
  );
}

export default App;
