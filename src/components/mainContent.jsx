import Separador from './objects/separador.jsx';
import Calculadora from './calculator/Calculadora.jsx';

function MainContent(props) {
    const style = {
        padding: '20px',
        textAlign: 'center',
        borderRadius: props.radius,
        boxSizing: 'border-box',
        width: '100%',
    }

    const elements = [
        <Calculadora />
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