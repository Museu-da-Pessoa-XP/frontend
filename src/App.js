import React, { useState } from 'react';
import './App.css';

function App() {
  const [selectedFile, setSelectedFile] = useState(null);

  const onFileChange = (event) => {
    setSelectedFile(URL.createObjectURL(event.target.files[0]));
  };

  return (
    <div className="App">
      <input type="file" accept="image/*;capture=camera" onChange={onFileChange} />
      <img src={selectedFile} alt="Selected media by the user." />
    </div>
  );
}

export default App;
