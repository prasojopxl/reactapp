import {useState} from "react";
import "./style.css";

const Label = (props) => {
    return <span>{props.title}</span>
}

const InputText = (props) => {
    return(
        <div className="iteminput"><Label title={props.title}/><input type="text" value="" /></div>
    )
}

const InputSelect = (props) => {
    return (
        <div className="iteminput">
            <Label title={props.title}/>
            <select>
                <option>{props.tgl1}</option>
                <option>{props.tgl2}</option>
            </select>
            <select>
                <option>{props.bln1}</option>
                <option>{props.bln2}</option>
            </select>
            <select>
                <option>{props.th1}</option>
                <option>{props.th2}</option>
            </select>
        </div>
    )
}

const InputRadio = (props) => {
    return (
        <div className="iteminput">
            <Label title={props.title}/>
            <input type="radio" name={props.id} id={props.name}/><label >{props.name}</label>
            <input type="radio" name={props.id} id={props.name2}/><label>{props.name2}</label>
        </div>
    )
}

const InputTextarea = (props) => {
    return (
        <div className="iteminput">
            <Label title={props.title}/>
            <textarea/>
        </div>
    )
}

const InputCheck = (props) => {
    return (
        <div className="iteminput">
            <input type="checkbox" name={props.name} id={props.name}/><label >{props.name}</label>
        </div>
    )
}

const CustomForm = () => {
    const [nama,setName] = useState("");
    const [nim,setNim] = useState("");
    const [tgl,setTgl] = useState("");
    const [alamat,setAlamat] = useState("");
    const [username,setUserName] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [check1,setCheck1] = useState("");
    const [check2,setCheck2] = useState("");
    const [check3,setCheck3] = useState("");
    
    return (
        <div className="myform">
            <form>
                <h2>Form Registrasi</h2>
                <h4>Biodata</h4>
                <InputText title="Nama" />
                <InputText title="NIM"/>
                <InputSelect title="Tanggal Lahir" tgl1={1} tgl2={2} bln1="Jan" bln2="Feb" th1={1990} th2={1991}/>
                <InputTextarea title="Alamat"/>
                <InputRadio title="Jenis Kelamin" id="gender" name="Laki-laki" name2="Perempuan"/>
                <hr/>
                <h4>User Account</h4>
                <InputText title="Username"/>
                <InputText title="Email"/>
                <InputText title="Password"/>
                <InputText title="Ulangi Password"/>
                <hr/>
                <h4>Resolusi Tahun Ini</h4>
                <InputCheck name="Menguasai HTML"/>
                <InputCheck name="Paham CSS"/>
                <InputCheck name="Mastering PHP"/>
                <input type="submit" value="Kirim Data"/>
            </form>
        </div>
    )
}

export default CustomForm;