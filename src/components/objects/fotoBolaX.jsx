function FotoBolaX(props) {
    const width = props.talla || '200px';
    const height = props.talla || '200px';
    const nombre =  'Gato';
    const style = {
        width,
        height,
        backgroundColor: 'transparent',
        display: 'inline-block',
        margin: '5px',
        border: '2px solid black',
        overflow: 'hidden',
        borderRadius: props.talla / 2
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

export default FotoBolaX;