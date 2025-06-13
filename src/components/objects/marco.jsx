function Marco(props) {
    const style = {
        border: `${props.borde} solid ${props.color}`,
        backgroundColor: props.fondo,
        padding: '10px',
        borderRadius: '5px',
        boxSizing: 'border-box',
        width: '100%',
    }

    return (
        <div style={style}>
            <img src={`${props.src}${parseInt(200)}/${parseInt(200)}`} alt="Marco" style={{ width: '100%', borderRadius: '5px' }} />
        </div>
    )
}

export default Marco;
