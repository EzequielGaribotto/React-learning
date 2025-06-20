import { useState } from 'react';
import Display from './Display';
import Tecla from './Tecla';

function Calculadora() {
  const [display, setDisplay] = useState('0');
  const [valorAnterior, setValorAnterior] = useState(null);
  const [operacion, setOperacion] = useState(null);
  const [resetDisplay, setResetDisplay] = useState(true);

  const borrarDisplay = () => {
    setDisplay('0');
    setValorAnterior(null);
    setOperacion(null);
    setResetDisplay(true);
  };

  const calcular = () => {
    if (valorAnterior === null) return;
    
    const num1 = parseFloat(valorAnterior);
    const num2 = parseFloat(display);
    let resultado;

    switch (operacion) {
      case '+':
        resultado = num1 + num2;
        break;
      case '-':
        resultado = num1 - num2;
        break;
      case '*':
        resultado = num1 * num2;
        break;
      case '/':
        resultado = num1 / num2;
        break;
      default:
        return;
    }

    setDisplay(resultado.toString());
    setValorAnterior(null);
    setOperacion(null);
    setResetDisplay(true);
  };

  const pulsar = (valor) => {
    if (valor === 'C') {
      borrarDisplay();
      return;
    }

    if (valor === '=') {
      calcular();
      return;
    }

    if (['+', '-', '*', '/'].includes(valor)) {
      setValorAnterior(display);
      setOperacion(valor);
      setResetDisplay(true);
      return;
    }

    // Handling numeric input
    if (resetDisplay) {
      setDisplay(valor === ',' ? '0,' : valor);
      setResetDisplay(false);
    } else {
      if (valor === ',' && display.includes(',')) return;
      setDisplay(display === '0' ? (valor === ',' ? '0,' : valor) : display + valor);
    }
  };

  const containerStyle = {
    width: '280px',
    padding: '15px',
    backgroundColor: '#f8f9fa',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
    margin: '0 auto',
  };

  const keypadStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: '2px',
    width: '100%',
  };

  const keypadValues = [
    ['7', '8', '9', '/'],
    ['4', '5', '6', '*'],
    ['1', '2', '3', '-'],
    ['0', ',', '=', '+'],
    ['C']
  ];

  return (
    <div style={containerStyle}>
      <h3>Calculadora</h3>
      <Display contenido={display} />
      <div style={keypadStyle}>
        {keypadValues.map((row, rowIndex) => 
          row.map((valor, colIndex) => (
            <Tecla 
              key={`${rowIndex}-${colIndex}`} 
              valor={valor} 
              pulsar={pulsar} 
              style={valor === 'C' ? {gridColumn: 'span 4'} : {}}
            />
          ))
        )}
      </div>
    </div>
  );
}

export default Calculadora;
