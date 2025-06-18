import React, { useState } from 'react';
import { MdHeight } from 'react-icons/md';

function MasMenos() {
    const [contador, setContador] = useState(0);

    const aumentar = () => {
        setContador(contador + 1);
    };

    const disminuir = () => {
        setContador(contador - 1);
    };

    const isAumentarDisabled = contador >= 10;
    const isDisminuirDisabled = contador <= 0;

    const buttonStyle = {
        margin: '5px',
        height: '40px',
        fontSize: '16px',
        cursor: 'pointer',
    }

    const inputStyle = {
        width: '50px',
        height: '40px',
        textAlign: 'center',
        fontSize: '16px',
        margin: '5px',
    };

    return (
        <div>
            <button onClick={disminuir} style={buttonStyle} disabled={isDisminuirDisabled}>Menos</button>
            <input type="number" value={contador} readOnly style={inputStyle}/>
            <button onClick={aumentar} style={buttonStyle} disabled={isAumentarDisabled}>Más</button>
        </div>
    );
}

export default MasMenos;
