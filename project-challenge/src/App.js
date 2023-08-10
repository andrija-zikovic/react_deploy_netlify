import Window from "./Window";
import Input from "./Input";
import { useState } from 'react';

function App() {
  const [newColor, setNewColor] = useState('');
  const [hexValue, setHexValue] = useState('');
  const [isDarkText, setIsDarkText] = useState(true);

  return (
    <div className="App">
      <Window 
        newColor={newColor}
        hexValue={hexValue}
        isDarkText={isDarkText}
      />
      <Input
        newColor={newColor}
        setNewColor={setNewColor}
        setHexValue={setHexValue}
        isDarkText={isDarkText}
        setIsDarkText={setIsDarkText}
      />
    </div>    
  );
}

export default App;
