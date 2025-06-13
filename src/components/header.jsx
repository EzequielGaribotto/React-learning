function Header(props) {
    const texto = props.texto || "Este es el header"

    const style = {
        backgroundColor: 'lightblue',
        padding: '20px',
        textAlign: 'center'
    }
    return (
        <>
            <header style={style}>
                <h1>{texto}</h1>
            </header>
        </>
    )
}

export default Header;