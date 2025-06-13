function Gato(props) {
    const width = props.ancho || props.size || '200px';
    const height = props.alto || props.size || '200px';
    const nombre = props.nombre || 'Gato';
    const style = {
        width,
        height,
        backgroundColor: 'transparent',
        display: 'inline-block',
        margin: props.margin || '5px',
        border: `${props.grosor || '2px'} solid ${props.color || 'black'}`,
        overflow: 'hidden',
        borderRadius: '8px'
    };
    const nombreStyle = {
        textAlign: 'center',
        marginTop: '8px',
        fontWeight: 'bold'
    };
    const url = `https://loremflickr.com/${parseInt(width)}/${parseInt(height)}/cat`;

    return (
        <div style={{ display: 'inline-flex', flexDirection: 'column', alignItems: 'center' }}>
            <div style={style}>
                <img
                    src={url}
                    alt={nombre}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                />
            </div>
            <div style={nombreStyle}>{nombre}</div>
        </div>
    );
}

export default Gato;