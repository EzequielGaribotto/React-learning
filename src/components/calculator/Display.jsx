function Display({ contenido }) {
  const style = {
    width: '100%',
    backgroundColor: '#f0f0f0',
    padding: '10px',
    fontSize: '24px',
    textAlign: 'right',
    marginBottom: '10px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    overflow: 'hidden',
    textOverflow: 'ellipsis'
  };

  return (
    <div style={style}>
      {contenido}
    </div>
  );
}

export default Display;
