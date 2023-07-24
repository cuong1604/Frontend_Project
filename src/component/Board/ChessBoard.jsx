import { useState } from 'react';
import './App.css';
import { Space, InputNumber } from 'antd';


function App() {
  const [size, setSize] = useState(8);
  const [cellColor1, setCellColor1] = useState('#FFFFFF');
  const [cellColor2, setCellColor2] = useState('#CCCCCC');

  const renderCell = (row, col) => {
    const isEven = (row + col) % 2 === 0;
    const cellColor = isEven ? cellColor1 : cellColor2;
    const cellStyle = {
      width: 50,
      height: 50,
      backgroundColor: cellColor,
    };
    return <div className="cell" style={cellStyle}></div>;
  };

  const renderRow = (row) => {
    const cells = Array(size).fill(null).map((_, col) => renderCell(row, col));
    return <div className="row">{cells}</div>;
  };

  const renderBoard = () => {
    const rowsArray = Array(size).fill(null).map((_, row) => renderRow(row));
    return <div className="board">{rowsArray}</div>;
  };

  const handleColsChange = (event) => {
    setSize(event)
  };

  const handleCellColor1Change = (event) => {
    setCellColor1(event.target.value);
  };

  const handleCellColor2Change = (event) => {
    setCellColor2(event.target.value);
  };

  return (
    <div className="App">
      <h1 className='titleb'>Chess Board</h1>
      <Space style={{marginBottom: 10}}>
        <label>
          Change size: 
          {/* <input type="number" value={size} onChange={handleColsChange} /> */}
          <InputNumber min={2} max={30} value={size} onChange={handleColsChange}></InputNumber>
        </label>
        <label>
          Cell Color 1:
          <input type="color" value={cellColor1} onChange={handleCellColor1Change} />
        </label>
        <label>
          Cell Color 2:
          <input type="color" value={cellColor2} onChange={handleCellColor2Change} />
        </label>
      </Space>
      {renderBoard()}
    </div>
  );
}

export default App;