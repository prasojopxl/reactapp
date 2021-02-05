const Kendaraan = (props)=> {
    return (
        <div style={{textAlign:"left"}}>
            <h2>Kendaraan : {props.jenis}</h2>
            {props.jenis}: {props.merk1}<br/>
            {props.jenis}: {props.merk2}<br/>
            {props.jenis}: {props.merk3}
        </div>
    )
}

export default Kendaraan;