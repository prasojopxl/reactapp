import React, {useState} from 'react'
import "./customform1.css";



export const CustomForm1 = () => {
    const [nama,setNama] = useState("");
    const [nim, setNim] = useState("");
    const [lahir, setLahir] = useState("");     
    const [alamat, setAlamat] = useState("");
    const [jeniskelamin, setJeniskelamin] = useState("");
    const [resolusi, setResolusi]= useState("");
    const [username, setUsername]= useState("");
    const [email, setEmail]= useState("");
    const [password, setPassword]= useState("");
    const [password2, setPassword2]= useState("");


    return (
        <div className="containerform">
            <h1>Form Registrasi</h1>
            <div className="wrp-iteminput">
                <span className="subtitle">Biodata</span>
                <div className="iteminput">
                    <label>Nama</label>
                    <input value={nama} onChange={(e)=>setNama(e.target.value) } type="text" name="nama"/>
                </div>
                <div className="iteminput">
                    <label>NIM</label>
                    <input type="text" name="nama" value={nim} onChange={(e)=>setNim(e.target.value)}/>
                </div>
                <div className="iteminput">
                    <label>Tanggal Lahir</label>
                    <input type="date" name="tanggallahir" value={lahir} onChange={(e)=>setLahir(e.target.value)}/>
                </div>
                <div className="iteminput">
                    <label>Alamat</label>
                    <textarea cols="30" rows="5" value={alamat} name="alamat" onChange={(e)=> setAlamat(e.target.value)}/>
                </div>
                <div className="iteminput">
                    <label>Jenis Kelamin</label>
                    <input type="radio" name="jeniskelamin" value="l" onChange={(e)=> setJeniskelamin(e.target.value)}/>Laki laki
                    <input type="radio" name="jeniskelamin" value="p" onChange={(e)=> setJeniskelamin(e.target.value)}/>Perempuan
                </div>
            </div>

            <div className="wrp-iteminput">
                <span className="subtitle">User Account</span>
                <div className="iteminput">
                    <label>Username</label>
                    <input type="text" name="username" value={username} onChange={(e)=>setUsername(e.target.value)}/>
                </div>
                <div className="iteminput">
                    <label>Email</label>
                    <input type="text" name="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                </div>
                <div className="iteminput">
                    <label>Password</label>
                    <input type="password" name="password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
                </div>
                <div className="iteminput">
                    <label>Ulangi Password</label>
                    <input type="password" name="password2" value={password2} onChange={(e)=>setPassword2(e.target.value)}/>
                </div>
            </div>


            <div className="wrp-iteminput">
                <span className="subtitle">Resolusi Tahun ini</span>
                <div className="small-wrpimput">
                    <div className="iteminput">
                        <input type="checkbox" name="resolusi1" value="html" checked={resolusi === "html"} onChange={(e)=>setResolusi(e.target.value)}/>Menguasai HTML
                    </div>
                    <div className="iteminput">
                        <input type="checkbox" name="resolusi2" value="react" checked={resolusi === "react"} onChange={(e)=>setResolusi(e.target.value)}/>Menguasai ReactJS
                    </div>
                    <div className="iteminput">
                        <input type="checkbox" name="resolusi3" value="nodejs" checked={resolusi === "nodejs"} onChange={(e)=>setResolusi(e.target.value)}/>Menguasai NodeJS
                    </div>
                </div>
            </div>

            <button onClick={()=>console.log(nama, nim, lahir, jeniskelamin, resolusi, username, email, password, password2)}> Kirim Data</button>

        </div>
    )
}
