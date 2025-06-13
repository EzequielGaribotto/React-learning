function Capital(props) {
    const text = props.text || "Capital";
    const firstLetter = text.charAt(0).toUpperCase();
    const boxStyle = {
        width: props.size || '80px',
        height: props.size || '80px',
        backgroundColor: props.backgroundColor,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: '8px',
    };
    const firstLetterStyle = {
        color: props.textColor || 'black',
        fontSize: props.fontSize || '24px',
        textAlign: 'center',
        lineHeight: 1,
        margin: 0,
    };
    const containerStyle = {
        display: 'inline-flex',
        flexDirection: 'column',
        alignItems: 'center',
    };
    const textStyle = {
        textAlign: 'center',
        width: '100%',
    };
    return (
        <div style={containerStyle}>
            <div style={boxStyle}>
                <span style={firstLetterStyle}>{firstLetter}</span>
            </div>
            <div style={textStyle}>{text}</div>
        </div>
    );
}

export default Capital;