function Tecla({ valor, pulsar }) {
  const isOperator = ['+', '-', '*', '/', '='].includes(valor);
  const isClear = valor === 'C';
  
  const style = {
    width: '100%',
    height: '45px',
    margin: '2px',
    fontSize: '18px',
    borderRadius: '4px',
    cursor: 'pointer',
    backgroundColor: isOperator ? '#f5923e' : isClear ? '#ff6961' : '#e0e0e0',
    border: 'none',
    fontWeight: 'bold'
  };

  return (
    <button 
      style={style} 
      onClick={() => pulsar(valor)}
    >
      {valor}
    </button>
  );
}

export default Tecla;
