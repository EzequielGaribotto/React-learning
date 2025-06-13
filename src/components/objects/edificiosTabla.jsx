import edificis from '../edificis.json';

function EdificiosTabla() {
    if (!edificis || edificis.length === 0) return <div>No hay datos</div>;

    const headers = ["name", "city", "country", "height_m", "year", "floors"];
    return (
        <table style={{ border: "1px solid #333", margin: "10px auto", borderCollapse: "collapse" }}>
            <thead>
                <tr>
                    {headers.map(header => (
                        <th key={header} style={{ border: "1px solid #333", padding: "6px 12px", background: "#eee" }}>
                            {header}
                        </th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {edificis.map((row, idx) => (
                    <tr key={idx}>
                        {headers.map(header => (
                            <td key={header} style={{ border: "1px solid #333", padding: "6px 12px" }}>
                                {row[header]}
                            </td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default EdificiosTabla;
