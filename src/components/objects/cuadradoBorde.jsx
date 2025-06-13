function CuadradoBorde(props) {
    const style = {
        width: props.size || '50px',
        height: props.size || '50px',
        backgroundColor: 'transparent',
        display: 'inline-block',
        margin: props.margin || '5px',
        border: `${props.grosor || '2px'} solid black`,
        borderColor: props.color || 'black',
    }
    return (
        <>
            <div style={style}>
            </div>
        </>
    )
}

export default CuadradoBorde;