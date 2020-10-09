import React, { useState } from 'react';
import './App.css';

import { TextField } from '@material-ui/core';

import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';

import TextFieldsIcon from '@material-ui/icons/TextFields';
import AudiotrackIcon from '@material-ui/icons/Audiotrack';
import VideocamIcon from '@material-ui/icons/Videocam';

export default () => {
  const [title, setTitle] = useState(null);
  const [description, setDescription] = useState(null);
  const [selectedType, setSelectedType] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);

  const onFileChange = event => {
    setSelectedFile(URL.createObjectURL(event.target.files[0]));
  };

  const handleInput = setState => event => {
    setState(event.target.value);
  };

  const handleToggle = (event, newType) => {
    setSelectedType(newType);
  };

  return (
    <div className="App">
      <h1>Escolha um título para sua história</h1>
      <TextField
        id="title-input"
        value={title}
        onChange={handleInput(setTitle)}
      />

      <h1>Insira uma descrição como destaque para sua história</h1>
      <TextField
        id="description-input"
        value={description}
        onChange={handleInput(setDescription)}
      />

      <h1>Escolha como você quer contar essa história:</h1>
      <ToggleButtonGroup
        size="large"
        value={selectedType}
        exclusive
        onChange={handleToggle}
      >
        <ToggleButton value="text">
          <TextFieldsIcon />
          Texto
        </ToggleButton>
        <ToggleButton value="audio">
          <AudiotrackIcon />
          Áudio
        </ToggleButton>
        <ToggleButton value="video">
          <VideocamIcon />
          Vídeo
        </ToggleButton>
      </ToggleButtonGroup>

      <p>
        {selectedType} {title} {description}{' '}
      </p>

      <input
        type="file"
        accept="image/*;capture=camera"
        onChange={onFileChange}
      />
      {selectedFile && (
        <img
          className="App-selected-file"
          src={selectedFile}
          alt="Selected media by the user."
        />
      )}
    </div>
  );
};
