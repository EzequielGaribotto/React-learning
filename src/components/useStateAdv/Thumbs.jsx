import { useState } from 'react';
import { FaThumbsUp, FaThumbsDown } from 'react-icons/fa';

function Thumbs() {
    const [isThumbUp, setIsThumbUp] = useState(true);
    
    const toggleThumb = () => {
        setIsThumbUp(!isThumbUp);
    };
    
    const containerStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        margin: '50px auto',
        cursor: 'pointer',
    };
    
    const iconStyle = {
        fontSize: '60px',
        color: isThumbUp ? '#4CAF50' : '#F44336',
        transition: 'all 0.3s ease'
    };
    
    return (
        <div style={containerStyle}>
            <h2>Componente Thumbs</h2>
            <div onClick={toggleThumb} style={iconStyle}>
                {isThumbUp ? <FaThumbsUp /> : <FaThumbsDown />}
            </div>
            <p style={{ marginTop: '20px' }}>
                Estado actual: {isThumbUp ? 'Positivo (true)' : 'Negativo (false)'}
            </p>
        </div>
    );
}

export default Thumbs;
