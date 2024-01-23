// Assignment 2

// take an array of different colors. Let's say red, yellow, blue, green. onClick of a specific color, the background of the UI will change to that specific color. And the color div will be changed to white.

import { useState } from 'react';
import './App.css';

const ColorChanger = () => {
  const colors = ['red', 'yellow', 'blue', 'green'];
  const [selectedColor, setSelectedColor] = useState(null);

  const handleColorClick = (color) => {
    document.body.style.backgroundColor = color;
    setSelectedColor(color); // Update to set the selectedColor to the clicked color
  };

  return (
    <div className="color-container">
      {colors.map((color, index) => (
        <div
          key={index}
          className="color-box"
          style={{ backgroundColor: selectedColor === color ? 'white' : color }}
          onClick={() => handleColorClick(color)}
        >
          {color}
        </div>
      ))}
    </div>
  );
};

export default ColorChanger;




