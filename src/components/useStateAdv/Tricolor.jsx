import { useState } from 'react';

function Tricolor() {
    const [color, setColor] = useState('gray');
    const colors = ['red','green','blue'];
    const [index, setIndex] = useState(0);

    const changeColor = () => {
        if (index >= colors.length) {
            setColor('gray');
            setIndex(0);
            return;
        }
        setColor(colors[index]);
        setIndex((index + 1));
    };

    const style = {
        width: '50px',
        height: '50px',
        borderRadius: '100%',
        border: '1px solid black',
        backgroundColor: color,
    };
    return (
        <div>
            <div style={style} onClick={changeColor}>

            </div>
         
        </div>
    );
}

export default Tricolor;