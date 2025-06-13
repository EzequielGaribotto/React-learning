function BolaBingo(props) {
    const size = props.size || '80px';
    const color = props.color || 'red';
    const num = props.num || '';
    const style = {
        width: size || '100%',
        height: size || '100%',
        backgroundColor: color,
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        margin: props.margin || '5px',
        position: 'relative'
    };
    const textStyle = {
        color: 'white',
        fontSize: '40px',
        fontWeight: 'bold',
        textAlign: 'center',
        lineHeight: 1
    };
    const containerStyle = {
        display: 'inline-flex',
        flexDirection: 'column',
        alignItems: 'center'
    };
    return (
        <div style={containerStyle}>
            <div style={style}>
                <span style={textStyle}>{num}</span>
            </div>
        </div>
    );
}

export default BolaBingo;
