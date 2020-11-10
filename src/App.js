import React, { useState } from 'react';
import './App.css';

import {
  TextField,
  Button,
  Grid,
  Snackbar,
  Typography
} from '@material-ui/core';

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
  const [alertState, setAlertState] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');

  function onFileChange(event) {
    setMedia(URL.createObjectURL(event.target.files[0]));
  }

  const handleInput = setState => event => {
    setState(event.target.value);
  };

  const handleToggle = (event, newType) => {
    setType(newType);
  };

  const getMediaFile = mediaLocation =>
    fetch(mediaLocation).then(r => r.blob());

  const sendForm = async () => {
    try {
      const formData = new FormData();
      const mediaFile =
        type === 'text'
          ? new Blob([media], { type: 'text/plain' })
          : await getMediaFile(media);

      formData.append('title', title);
      formData.append('description', description);
      formData.append('type', type);
      formData.append('media', mediaFile);

      const response = await fetch('http://localhost:8000/historia/', {
        method: 'POST',
        headers: {
          // Accept: 'application/json',
          // 'Content-type': 'multipart/form-data',
        },
        body: formData
      });

      if (response.status >= 200 && response.status < 300) {
        setAlertMessage('História enviada com sucesso!');
        setAlertState(true);
        console.log(response);
        return response;
      }
      setAlertMessage('Aconteceu algo errado :(');
      console.log('Something happened wrong');
      return response;
    } catch (error) {
      console.log(error);
      return error;
    }
  };

  return (
    <div className="App">
      <Grid
        container
        spacing={2}
        direction="column"
        justify="space-around"
        alignItems="center"
        style={{ minHeight: '70vh' }}
      >
        <img alt="" src={require('./assets/logo.png')} />
        <Grid
          container
          item
          direction="column"
          justify="center"
          alignItems="center"
        >
          <Typography variant="h6" component="h1">
            Escolha um título para sua história
          </Typography>
          <TextField
            id="title-input"
            value={title}
            onChange={handleInput(setTitle)}
          />
        </Grid>

        <Grid
          container
          item
          direction="column"
          justify="center"
          alignItems="center"
        >
          <Typography variant="h6" component="h1">
            Insira uma descrição como destaque para sua história
          </Typography>
          <TextField
            id="description-input"
            value={description}
            onChange={handleInput(setDescription)}
          />
        </Grid>

        <Grid
          container
          item
          direction="column"
          justify="space-around"
          alignItems="center"
          style={{ minHeight: '30vh' }}
        >
          <Typography variant="h6" component="h1">
            Escolha como você quer contar essa história
          </Typography>
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

          {type === 'text' ? (
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
          )}
        </Grid>

        <Grid
          container
          item
          direction="column"
          justify="center"
          alignItems="center"
        >
          <Button
            variant="contained"
            color="primary"
            component="span"
            onClick={sendForm}
          >
            Enviar história
          </Button>
        </Grid>

        <Snackbar
          open={alertState}
          onClose={() => {
            setAlertState(false);
          }}
          message={alertMessage}
        />
      </Grid>
    </div>
  );
};
