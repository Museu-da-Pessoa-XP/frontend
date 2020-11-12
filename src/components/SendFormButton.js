import React from 'react';
import { Button, Snackbar } from '@material-ui/core';

export default ({ inputData }) => {
  const getBlobFromLocation = (mediaLocation) =>
    fetch(mediaLocation).then((response) => response.blob());

  const getBlobFromText = (mediaText) =>
    new Blob([mediaText], { type: 'text/plain' });

  const getBlob = async ({ media, type }) => {
    if (type === 'text') return getBlobFromText(media);
    return getBlobFromLocation(media);
  };

  const sendForm = async () => {
    try {
      const formData = new FormData();

      const media = await getBlob(inputData);
      const data = { ...inputData, media };

      Object.keys(data).forEach((fieldName) => {
        formData.append(fieldName, data[fieldName]);
      });

      const response = await fetch('http://localhost:8000/historia/', {
        method: 'POST',
        headers: {
          // Accept: 'application/json',
          // 'Content-type': 'multipart/form-data',
        },
        body: formData,
      });

      if (response.status >= 200 && response.status < 300) {
        // TODO: This should be set in FormHistoria
        // setAlertMessage('História enviada com sucesso!');
        // setAlertState(true);
        console.log(response);
        return response;
      }
      // TODO: This should be set in FormHistoria
      // setAlertMessage('Aconteceu algo errado :(');
      // console.log('Something happened wrong');
      return response;
    } catch (error) {
      console.log(error);
      return error;
    }
  };

  return (
    <Button
      variant="contained"
      color="primary"
      component="span"
      onClick={sendForm}
    >
      Enviar história
    </Button>
  );
};
