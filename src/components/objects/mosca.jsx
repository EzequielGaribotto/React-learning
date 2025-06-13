import { FaBug } from "react-icons/fa";

function Mosca(props) {
    const color = props.color || "black";
    const size = props.size || "40px";
    const style = {
        position: "fixed",
        top: "10px",    
        right: "10px",
        color: color,
        fontSize: size,
    };

    return (
        <div style={style}>
            <FaBug />
        </div>
    );
}

export default Mosca;