function TablaDos({ data }) {
    if (!data || data.length === 0) return <div>No hay datos</div>;

    const headers = Object.keys(data[0]);
    return (
        <table style={{ border: "1px solid green", margin: "10px auto" }}>
            <thead>
                <tr>
                    {headers.map((header) => (
                        <th key={header}>{header}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {data.map((row, idx) => (
                    <tr key={idx}>
                        {headers.map((header) => (
                            <td key={header}>{row[header]}</td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default TablaDos;

