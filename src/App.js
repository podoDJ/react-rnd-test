// App.js
import React from 'react';
import { Rnd } from 'react-rnd';

const ImageBox = ({ imageUrl }) => (
  <Rnd
    default={{
      x: Math.random() * 600, // Random initial x position
      y: Math.random() * 200, // Random initial y position
      width: "150px",
      height: "150px",
      
    }}
    minWidth={150}
    minHeight={150}
    // bounds="parent"
    bounds="window"
  >
    <img src={imageUrl} draggable="false" alt="github avatar" width="150px" />
  </Rnd>
);

const App = () => (
  <div
    style={{
      width: '800px',
      height: '400px',
      border: '1px solid black',
      margin: 'auto',
      display: 'block'
    }}
  >
    <ImageBox imageUrl="/rabbit.png" />
    <ImageBox imageUrl="/shark.png" />
  </div>
);

export default App;
