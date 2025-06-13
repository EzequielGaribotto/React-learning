function Tabla() {
    const style = {
        border: "1px solid blue",
    }
    const headers = ["Nombre", "Edad", "Ciudad"];
    const header =  headers.map((header, index) => (
        <th key={index}>{header}</th>
    ));
    const names = ["Juan", "Ana", "Carlos"];
    const rows = names.map(name => (
        <tr key={name}>
            <td>{name}</td>
            <td>{Math.floor(Math.random() * 50) + 20}</td>
            <td>{["Madrid", "Barcelona", "Valencia"][Math.floor(Math.random() * 3)]}</td>
        </tr>
    ));
    return (
        <>
            <table style={style}>
                <thead>
                    <tr>
                        {header}
                    </tr>
                </thead>
                <tbody>
                    {rows}
                </tbody>
            </table>
        </>
    )
}

export default Tabla;