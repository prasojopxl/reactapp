
export const Header = (props) => {

    return (
            <div className="header">
                <h4>SHOP</h4>
                <div className="totalbelanja">
                    Total Belanja: {props.total} (item)
                </div>
            </div>

    )
}
