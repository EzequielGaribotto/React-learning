import { useState } from 'react';
import Bola from '../objects/bola.jsx';

function BolasInteractivas() {
    const colors = ['red', 'green', 'blue', 'purple', 'orange', 'yellow', 'pink', 'cyan'];
    const initialColors = Array(6).fill().map(() => colors[Math.floor(Math.random() * colors.length)]);
    const [bolaColors, setBolaColors] = useState(initialColors);
    const [previousColors, setPreviousColors] = useState([...initialColors]);
    const [hasChangedColors, setHasChangedColors] = useState(false);
    
    const handleClick = (index) => {
        const newColors = [...bolaColors];
        // Get random color different from current
        let newColor;
        do {
            newColor = colors[Math.floor(Math.random() * colors.length)];
        } while (newColor === newColors[index]);
        
        newColors[index] = newColor;
        setBolaColors(newColors);
        setHasChangedColors(true);
    };
    
    const resetToRed = () => {
        // Only save current colors if they're not all red already
        if (!bolaColors.every(color => color === 'red')) {
            setPreviousColors([...bolaColors]);
            setHasChangedColors(true);
        }
        setBolaColors(Array(6).fill('red'));
    };
    
    const restoreColors = () => {
        setBolaColors([...previousColors]);
    };
    
    // Check if all current colors are red
    const allRed = bolaColors.every(color => color === 'red');
    
    return (
        <div>
            <h2>Círculos interactivos - Haz click para cambiar el color</h2>
            <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '10px' }}>
                {bolaColors.map((color, index) => (
                    <div key={index} onClick={() => handleClick(index)} style={{ cursor: 'pointer' }}>
                        <Bola color={color} size="80px" />
                    </div>
                ))}
            </div>
            <div style={{ marginTop: '20px' }}>
                <button 
                    style={{
                        padding: '8px 16px',
                        margin: '8px',
                        backgroundColor: '#FF5252',
                        color: 'white',
                        border: 'none',
                        borderRadius: '4px',
                        cursor: 'pointer',
                        fontSize: '16px',
                        fontWeight: 'bold',
                    }}
                    onClick={resetToRed}
                >
                    Reset a Rojo
                </button>
                <button 
                    style={{
                        padding: '8px 16px',
                        margin: '8px',
                        backgroundColor: '#2196F3',
                        color: 'white',
                        border: 'none',
                        borderRadius: '4px',
                        cursor: allRed && hasChangedColors ? 'pointer' : 'not-allowed',
                        fontSize: '16px',
                        fontWeight: 'bold',
                        opacity: allRed && hasChangedColors ? 1 : 0.5,
                    }}
                    onClick={restoreColors}
                    disabled={!allRed || !hasChangedColors}
                >
                    Restaurar Colores
                </button>
            </div>
        </div>
    );
}

export default BolasInteractivas;
