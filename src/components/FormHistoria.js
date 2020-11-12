import React, { useState } from 'react';

import { TextField, Grid, Snackbar, Typography } from '@material-ui/core';

import MediaTypeSelector from './MediaTypeSelector';
import MediaInput from './MediaInput';
import SendFormButton from './SendFormButton';

import Logo from '../assets/logo.png';

function FormHistoria() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [type, setType] = useState('text');
  const [media, setMedia] = useState('');
  const [alertState, setAlertState] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [alertMessage, setAlertMessage] = useState('');

  const handleInput = (setState) => (event) => {
    setState(event.target.value);
  };

  const handleToggle = (event, newType) => {
    setType(newType);
    setMedia('a');
  };

  return (
    <Grid
      container
      spacing={2}
      direction="column"
      justify="space-around"
      alignItems="center"
      style={{ minHeight: '70vh' }}
    >
      <img alt="" src={Logo} />

      <Typography variant="h6" component="h1">
        Escolha um título para sua história
      </Typography>
      <TextField
        id="title-input"
        value={title}
        onChange={handleInput(setTitle)}
      />

      <Typography variant="h6" component="h1">
        Insira uma descrição como destaque para sua história
      </Typography>
      <TextField
        id="description-input"
        value={description}
        onChange={handleInput(setDescription)}
      />

      <Typography variant="h6" component="h1">
        Escolha como você quer contar essa história
      </Typography>
      <MediaTypeSelector type={type} handleToggle={handleToggle} />
      <MediaInput media={media} setMedia={setMedia} type={type} />

      <SendFormButton inputData={{ title, description, type, media }} />

      <Snackbar
        open={alertState}
        onClose={() => {
          setAlertState(false);
        }}
        message={alertMessage}
      />
    </Grid>
  );
}

export default FormHistoria;
