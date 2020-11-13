import React, { useState } from 'react';

import { TextField, Snackbar, Typography, Button } from '@material-ui/core';

import SelectorMediaType from './SelectorMediaType';
import InputMedia from './InputMedia';
import Logo from '../assets/logo.png';
import Form from './Form';
import sendForm from './sendForm';

function FormHistoria() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [type, setType] = useState('text');
  const [media, setMedia] = useState('');
  const [alertState, setAlertState] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');
  const alertMessages = {
    success: 'História enviada com sucesso!',
    fail: 'Houve um erro ao enviar a história. :('
  };

  const handleInput = (setState) => (event) => {
    setState(event.target.value);
  };

  const handleToggle = (event, newType) => {
    setType(newType);
    setMedia('');
  };

  const setAlert = (message) => {
    setAlertMessage(message);
    setAlertState(true);
  };

  return (
    <Form
      id="form-historia"
      onSubmit={(event) => {
      event.preventDefault();
      sendForm({ title, description, type, media })
        .then((response) => {
          const message = response.ok
            ? alertMessages.success
            : alertMessages.fail;
          setAlert(message);
        })
        .catch(() => setAlert(alertMessages.fail));
    }}
    >
      <img alt="" src={Logo} />

      <Typography variant="h6" component="h1">
        Escolha um título para sua história
      </Typography>
      <TextField
        id="form-historia_input-title"
        value={title}
        onChange={handleInput(setTitle)}
      />

      <Typography variant="h6" component="h1">
        Insira uma descrição como destaque para sua história
      </Typography>
      <TextField
        id="form-historia_input-description"
        value={description}
        onChange={handleInput(setDescription)}
      />

      <Typography variant="h6" component="h1">
        Escolha como você quer contar essa história
      </Typography>
      <SelectorMediaType id="form-historia_selector-media-type" type={type} handleToggle={handleToggle} />
      <InputMedia media={media} setMedia={setMedia} type={type} />

      <Button
        id="form-historia_button-submit"
        type="submit"
        variant="contained"
        color="primary"
      >
        Enviar história
      </Button>

      <Snackbar
        id="form-historia_alert-result"
        open={alertState}
        onClose={() => {
          setAlertState(false);
        }}
        autoHideDuration={6000}
        message={alertMessage}
      />
    </Form>
  );
}

export default FormHistoria;