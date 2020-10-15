import React, { useState } from 'react';
import './App.css';

import { TextField, Button } from '@material-ui/core';

import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';

import TextFieldsIcon from '@material-ui/icons/TextFields';
import AudiotrackIcon from '@material-ui/icons/Audiotrack';
import VideocamIcon from '@material-ui/icons/Videocam';

export default () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [selectedType, setSelectedType] = useState('text');
  const [media, setMedia] = useState(null);

  const onFileChange = (event) => {
    setMedia(URL.createObjectURL(event.target.files[0]));
  };

  const handleInput = (setState) => (event) => {
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
        id="media-type-toggle"
        size="large"
        value={selectedType}
        exclusive
        onChange={handleToggle}
      >
        <ToggleButton id="media-type-toggle-text" value="text">
          <TextFieldsIcon />
          Texto
        </ToggleButton>
        <ToggleButton id="media-type-toggle-audio" value="audio">
          <AudiotrackIcon />
          Áudio
        </ToggleButton>
        <ToggleButton id="media-type-toggle-video" value="video">
          <VideocamIcon />
          Vídeo
        </ToggleButton>
      </ToggleButtonGroup>

      {
        selectedType === 'text' ? (
          <TextField
            id="media-text-input"
            multiline
            rowsMax={10}
            value={media}
            onChange={handleInput(setMedia)}
          />
        ) : (
          <Button
            id="media-file-upload"
            variant="contained"
            component="label"
          >
            Selecionar o arquivo
            <input
              type="file"
              accept={`${selectedType}/*`}
              style={{ display: 'none' }}
              onChange={onFileChange}
            />
          </Button>
        )
      }

      <Button variant="contained" color="primary" component="span">
        Enviar história
      </Button>
    </div>
  );
};
