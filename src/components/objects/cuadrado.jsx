function Cuadrado(props) {
    const style = {
        width: props.size || '50px',
        height: props.size || '50px',
        backgroundColor: props.color || 'green',
        display: 'inline-block',
        margin: props.margin || '5px',
    }
    return (
        <>
            <div style={style}>
            </div>
        </>
    )
}

export default Cuadrado;