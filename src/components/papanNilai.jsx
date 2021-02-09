import {useEffect, useState} from "react";

const PapanNilai = () => {
    const [skor, setSkor] = useState(10);

    useEffect(() =>{
        // mounting
        setSkor(100);
        return () => {
            console.log("halo dunia")
        };
    },[]);

    return (
        <div>
            <div>Skor : {skor}</div>
            <button onClick={()=>setSkor(skor+1)}>Tambah</button>
            <button onClick={()=>setSkor(skor-1)}>Kurang</button>
            <button onClick={()=>setSkor(0)}>Inisialisasi</button>            
        </div>
    )
}

export default PapanNilai;