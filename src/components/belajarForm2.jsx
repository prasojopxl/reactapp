import {useState} from "react";



export const BelajarForm2 = () => {
    const [username, setUsername] = useState("");
    const [alamat, setAlamat] = useState("");
    return (
        <div>
            <h1>Form regeistrasi</h1>
            <div className="item-input"><label>Nama</label><input type="text" name ="name"/></div>
            <div className="item-input"><label>NIM</label><input type="text" name ="name"/></div>
            <div className="item-input"><label>Tanggal Lahir</label><input type="date" name ="name"/></div>
            <div className="item-input"><label>Alamat</label><textarea/></div>
            <div className="item-input"><label>Jenis Kelamin</label><input type="radio" name="gender"/><input type="radio" name="gender"/></div>
        </div>
    )
}
