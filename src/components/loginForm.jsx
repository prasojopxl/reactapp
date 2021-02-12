import React, {useState} from "react";

export default function LoginForm()  {
    const [username, setUsername] = useState("");
    const [alamat, setAlamat] = useState("");

    return (
        <div>
            {username}
            <input type="text" name="username" value={username} placeholder="username" onChange={(event)=>{
                setUsername(event.target.value);
            }}/>
            <br/>
            <br/>
            {alamat}
            <input type="text" name="alamat" placeholder="alamat" onChange={(event)=>{
                setAlamat(event.target.value);
            }}/>
            <br/>
            <br/>
            <button 
                onClick={
                    ()=>console.log("Nama: ", username + " Alamat: ", alamat)
                }            
            >Login</button>

        </div>
    )
}


