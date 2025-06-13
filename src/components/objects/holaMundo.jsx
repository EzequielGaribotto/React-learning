function HolaMundo(props) {
    const texto = props.texto || "¡Hola, Mundo!"
    const style = {
        position: props.position || "absolute",
    }
    return (
        <>
            <p style={style}>
                <h1>{texto}</h1>
            </p>
        </>
    )
}

export default HolaMundo;