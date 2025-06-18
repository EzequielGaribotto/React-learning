import HolaMundo from './objects/holaMundo.jsx';
import Bola from './objects/bola.jsx';
import Cuadrado from './objects/cuadrado.jsx';
import Separador from './objects/separador.jsx';
import CuadradoBorde from './objects/cuadradoBorde.jsx';
import Mosca from './objects/mosca.jsx';
import Capital from './objects/capital.jsx';
import Gato from './objects/gato.jsx';
import FotoBola from './objects/fotoBola.jsx';
import Tabla from './objects/tabla.jsx';
import TablaDos from './objects/tablaDos.jsx';
import comarcas from './comarcas.json';
import edificios from './edificis.json';
import BolaBingo from './objects/bolaBingo.jsx';
import FotoBolaX from './objects/fotoBolaX.jsx';
import Marco from './objects/marco.jsx';
import Edificios from './objects/edificios.jsx';
import MasMenos from './useState/MasMenos.jsx';
import BolasInteractivas from './useState/bolasInteractivas.jsx';
import Paginacion from './useState/Paginacion.jsx';

function MainContent(props) {
    const style = {
        padding: '20px',
        textAlign: 'center',
        borderRadius: props.radius,
        boxSizing: 'border-box',
        width: '100%',
    }

    const elements = [
        <Paginacion key="paginacion" min={1} max={15} />,
        <BolasInteractivas key="bolasInteractivas" />,
        <MasMenos key="masMenos" />
    ];

    const content = [];
    for (let i = 0; i < elements.length; i++) {
        content.push(elements[i]);
        if (i < elements.length - 1) {
            content.push(<Separador key={`sep-${i}`} />);
        }
    }

    return (
        <>
        <div style={{ 
            minHeight: '100vh', 
            width: '100%', 
            backgroundColor: 'lightblue', 
            alignItems: 'center', 
            display: 'flex', 
            flexDirection: 'column',
            boxSizing: 'border-box',
        }}>
            <main style={style}>
                {content}
            </main>
        </div>
        </>
    )
}

export default MainContent;