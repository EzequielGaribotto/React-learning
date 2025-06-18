import { useState } from 'react';
import { Dropdown } from 'react-bootstrap';

function Fotos() {
    const fotos = {
        'foto1': 'https://picsum.photos/200/300?random=1',
        'foto2': 'https://picsum.photos/200/300?random=2',
        'foto3': 'https://picsum.photos/200/300?random=3',
        'foto4': 'https://picsum.photos/200/300?random=4',
    }

    const [fotoActual, setFotoActual] = useState(fotos.foto1);
    const [selectedKey, setSelectedKey] = useState('foto1');
    
    const handleSelect = (key) => {
        setSelectedKey(key);
        setFotoActual(fotos[key]);
    };

    const containerStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '20px',
        gap: '15px',
    };

    const imageStyle = {
        borderRadius: '5px',
        boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
    };
    
    return (
        <div style={containerStyle}>
            <h2>Selector de Fotos</h2>
            <img 
                src={fotoActual} 
                alt="Foto aleatoria" 
                style={imageStyle}
            />
            <Dropdown onSelect={handleSelect}>
                <Dropdown.Toggle variant="secondary" id="dropdown-fotos">
                    {selectedKey.charAt(0).toUpperCase() + selectedKey.slice(1)}
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    {Object.keys(fotos).map((key) => (
                        <Dropdown.Item 
                            key={key} 
                            eventKey={key} 
                            active={selectedKey === key}
                        >
                            {key.charAt(0).toUpperCase() + key.slice(1)}
                        </Dropdown.Item>
                    ))}
                </Dropdown.Menu>
            </Dropdown>
        </div>
    );
}

export default Fotos;