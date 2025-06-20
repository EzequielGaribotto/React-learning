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
    width: '230px',
    padding: '15px',
    backgroundColor: '#f8f9fa',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
    margin: '0 auto',
  };

  const keypadStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: '5px',
  };

  return (
    <div style={containerStyle}>
      <h3>Calculadora</h3>
      <Display contenido={display} />
      <div style={keypadStyle}>
        <Tecla valor="7" pulsar={pulsar} />
        <Tecla valor="8" pulsar={pulsar} />
        <Tecla valor="9" pulsar={pulsar} />
        <Tecla valor="/" pulsar={pulsar} />

        <Tecla valor="4" pulsar={pulsar} />
        <Tecla valor="5" pulsar={pulsar} />
        <Tecla valor="6" pulsar={pulsar} />
        <Tecla valor="*" pulsar={pulsar} />

        <Tecla valor="1" pulsar={pulsar} />
        <Tecla valor="2" pulsar={pulsar} />
        <Tecla valor="3" pulsar={pulsar} />
        <Tecla valor="-" pulsar={pulsar} />

        <Tecla valor="0" pulsar={pulsar} />
        <Tecla valor="," pulsar={pulsar} />
        <Tecla valor="=" pulsar={pulsar} />
        <Tecla valor="+" pulsar={pulsar} />

        <Tecla valor="C" pulsar={pulsar} style={{gridColumn: 'span 4'}} />
      </div>
    </div>
  );
}

export default Calculadora;
