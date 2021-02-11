const Kendaraan = (props)=> {
    return (
        <div style={{textAlign:"left"}}>
            <h2>Kendaraan : {props.type}</h2>
            {props.merks.map((merk)=> {
                return (
                    <div> {props.type} {merk} </div>
                )
            } )}
        </div>
    )
}

export default Kendaraan;