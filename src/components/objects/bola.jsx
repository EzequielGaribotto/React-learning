function Bola(props) {
    const style = {
        width: props.size || '50px',
        height: props.size || '50px',
        backgroundColor: props.color ||'red',
        borderRadius: '50%',
        display: 'inline-block',
        margin: props.margin ||'5px',
    }
    return (
        <>
            <div style={style}>
            </div>
        </>
    )
}

export default Bola;