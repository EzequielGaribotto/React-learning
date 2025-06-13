function Separador(props) {
    const topLineStyle = {
        borderTop: '1px solid black',
        width: '100%',
    }

    const bottomLineStyle = {
        marginTop: '4px',
        borderTop: '3px solid black',
        width: '100%',
    }
    return (
        <>
            <div style={topLineStyle}>
            </div>
            <div style={bottomLineStyle}>
            </div>
        </>
    )
}

export default Separador;