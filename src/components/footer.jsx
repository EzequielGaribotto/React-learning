function Footer(props) {
    const texto = props.texto || "Este es el footer"
    const style = {
        backgroundColor: 'lightblue',
        padding: '20px',
        textAlign: 'center',
        left: 0,
        right: 0,
        bottom: 0,
        width: '100%',
        margin: 0,
        position: 'fixed',
        zIndex: 1000
    }
    return (
        <>
            <footer style={style}>
                <h1>{texto}</h1>
            </footer>
        </>
    )
}

export default Footer;