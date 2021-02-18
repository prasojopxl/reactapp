// import Kendaraan from "./components/kendaraan";
// import CustomForm from "./components/customForm";
// import DayThree from "./components/daythree";
// import PapanNilai from "./components/papanNilai";
// import Coba from "./components/coba";
// import LoginForm from "./components/loginForm";
// import {Cart} from "./Cart";
// import {CustomForm1} from "./components/customform1";
import "./style.scss";
import {Cart} from "./components/cart/Cart";

import {BrowserRouter, Switch, Route, Link, NavLink} from "react-router-dom";
import { Todo } from "./components/todo/Todo";
import { TodoDetail } from "./components/todo/TodoDetail";
import { TodoDetailState } from "./components/todo/TodoDetailState";
import { BelajarRedirect } from "./BelajarRedirect";


function App() {
  // const [tampil, setTampil] = useState(false)
  return (
      <BrowserRouter>

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
      {/* <Cart/>
      <Todo/> */}
      <div className="mainmenu">
        <Link to="/todo">Component Todo</Link><br/>
        <Link to="/cart">Component Cart</Link><br/>
        <Link to="/">Home</Link>

        <NavLink className="bar" activeClassName="bar--active" to="todo">Ke Todo</NavLink>
        <NavLink className="bar" activeStyle={{color:"red"}} to="cart">Ke Cart</NavLink>
      </div>


      <Switch>
        <Route path="/todo" exact component={Todo}/>
        <Route path="/todo/:id" exact component={TodoDetail}/>
        <Route path="/todo-detail/" exact component={TodoDetailState}/>
        <Route path="/cart" exact component={Cart}/>
        <Route path="/belajar-redirect" exact component={BelajarRedirect}/>
        <Route path="/belajar-redirect/:nama" exact component={BelajarRedirect}/>
        <Route path="/" exact component={()=> <div>halaman home</div>}/>
        <Route path="*" component={()=>"not found"}/>

      </Switch>      
      </BrowserRouter>

  );
}

export default App;
