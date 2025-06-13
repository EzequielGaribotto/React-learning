function Edificios(props) {
    const tableStyle = {
        minWidth: '300px',
        borderCollapse: 'collapse',
        margin: props.margin || '5px',
        marginLeft: 'auto',
        marginRight: 'auto',
    };
    const thtdStyle = {
        border: '1px solid #333',
        padding: '8px',
        backgroundColor: '#f9f9f9',
    };
    const thStyle = {
        ...thtdStyle,
        backgroundColor: '#e0e0e0',
        fontWeight: 'bold',
    };

    const edificios = props.edificios || [];
    const headers = edificios.length > 0 ? Object.keys(edificios[0]) : [];

    return (
        <>
            <table style={tableStyle}>
                <thead>
                    <tr>
                        {headers.map((header, idx) => (
                            <th key={idx} style={thStyle}>{header}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {edificios.map((edificio, idx) => (
                        <tr key={idx}>
                            {headers.map((header, hidx) => (
                                <td key={hidx} style={thtdStyle}>{edificio[header]}</td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    )
}

export default Edificios;