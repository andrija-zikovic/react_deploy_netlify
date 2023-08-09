import Window from "./Window";
import Input from "./Input";
import { useState } from 'react';

function App() {
  const [newColor, setNewColor] = useState('');
  return (
    <div>
      <Window 
        color={newColor}
      />
      <Input
        setNewColor={setNewColor}
      />
    </div>    
  );
}

export default App;
