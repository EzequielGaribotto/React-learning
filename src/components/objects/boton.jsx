function Boton(props) {
    const style = {
        padding: '8px 16px',
        margin: '8px',
        backgroundColor: props.bgColor || '#4CAF50',
        color: props.textColor || 'white',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
        fontSize: '16px',
        fontWeight: 'bold',
        boxShadow: '0 2px 5px rgba(0,0,0,0.2)',
        transition: 'all 0.3s ease',
    };

    return (
        <button 
            style={style} 
            onClick={props.onClick}
            disabled={props.disabled}
        >
            {props.texto || "Botón"}
        </button>
    );
}

export default Boton;
