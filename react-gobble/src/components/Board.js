import React from 'react';
import Box from './Box'

function Board({boxes, onClick }) {
    return (
      <div style={style}>
        {boxes.map((box, i) => (
          <Box key={i} letter={box} onClick={() => onClick(i)} />
      ))}
      </div>
    );
}

const style = {
    border: '4px solid lightblue',
    borderRadius: '10px',
    width: '320px',
    height: '320px',
    margin: '0 auto',
    display: 'grid',
    gridTemplate: 'repeat(3, 1fr) / repeat(3, 1fr)'
  };

export default Board;