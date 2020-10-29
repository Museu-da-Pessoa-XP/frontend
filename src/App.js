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
  const [type, setType] = useState('text');
  const [media, setMedia] = useState('');

  function onFileChange(event) {
    setMedia(URL.createObjectURL(event.target.files[0]));
  }

  const handleInput = (setState) => (event) => {
    setState(event.target.value);
  };

  const handleToggle = (event, newType) => {
    setType(newType);
  };

  const sendForm = async () => {
    try {
      const response = await fetch('http://localhost:8000/historia/', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title,
          description,
          type,
          media,
        }),
      });

      if (response.status >= 200 && response.status < 300) {
        console.log(response);
        return response;
      }
      console.log('Something happened wrong');
      return response;
    } catch (error) {
      console.log(error);
      return error;
    }
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
        value={type}
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
        type === 'text' ? (
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
              accept={`${type}/*`}
              style={{ display: 'none' }}
              onChange={onFileChange}
            />
          </Button>
        )
      }

      <Button variant="contained" color="primary" component="span" onClick={sendForm}>
        Enviar história
      </Button>
    </div>
  );
};
