import React, { useState } from 'react';

import { TextField, Snackbar, Typography, Button } from '@material-ui/core';

import MediaTypeSelector from './MediaTypeSelector';
import MediaInput from './MediaInput';
import Logo from '../assets/logo.png';
import Form from './Form';

const getBlobFromLocation = (mediaLocation) =>
  fetch(mediaLocation).then((response) => response.blob());

const getBlobFromText = (mediaText) =>
  new Blob([mediaText], { type: 'text/plain' });

const getBlob = async ({ media, type }) => {
  if (type === 'text') return getBlobFromText(media);
  return getBlobFromLocation(media);
};

const getFormData = async (inputData) => {
  const formData = new FormData();

  const media = await getBlob(inputData);
  const data = { ...inputData, media };

  Object.keys(data).forEach((fieldName) => {
    formData.append(fieldName, data[fieldName]);
  });

  return formData;
};

const sendForm = async (inputData) => {
  const formData = await getFormData(inputData);

  const response = await fetch('http://localhost:8000/historia/', {
    method: 'POST',
    body: formData,
  });

  return response;
};

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
    <Form onSubmit={(event) => {
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
      <MediaTypeSelector id="media-type-selector" type={type} handleToggle={handleToggle} />
      <MediaInput media={media} setMedia={setMedia} type={type} />

      <Button
        type="submit"
        variant="contained"
        color="primary"
      >
        Enviar história
      </Button>

      <Snackbar
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
