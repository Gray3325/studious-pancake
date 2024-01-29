import { useState } from "react"; //導入useState狀態組件
function Square() {
  const [value, setValue] = useState(null);
  function handleClick() {
    setValue("X");
  }
  return (
    <button className='square' onClick={handleClick}>
      {value}
    </button>
  );
}

export default function Board() {
  
  return (
    <>
      <div className='board-row'>
        <Square />
        <Square />
        <Square />
      </div>
      <div className='board-row'>
        <Square />
        <Square />
        <Square value='6' />
      </div>
      <div className='board-row'>
        <Square />
        <Square />
        <Square />
      </div>
    </>
  );
}
