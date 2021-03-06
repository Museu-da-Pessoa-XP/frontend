import React from 'react';
import PropTypes from 'prop-types';

import { TextField, Typography } from '@material-ui/core';

import InputTags from '../InputTags';

function FormAdditionalInformation({ data, setData }) {
  const handleInput = (newInput) => (event) => {
    setData({ ...data, ...newInput(event.target.value) });
  };

  return (
    <>
      <Typography variant="h6" component="h1">
        Que título quer dar a ela?
      </Typography>
      <TextField
        id="form-additional-information_input-title"
        placeholder="Título"
        variant="outlined"
        margin="normal"
        value={data.title}
        fullWidth
        onChange={handleInput((title) => ({ title }))}
      />

      <Typography variant="h6" component="h1">
        E quais palavras-chave resumem a essência de sua história?
      </Typography>
      <InputTags
        value={data.tags}
        setValue={(tags) => setData({ ...data, tags })}
      />
    </>
  );
}

FormAdditionalInformation.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    tags: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
  setData: PropTypes.func.isRequired,
};

export default FormAdditionalInformation;
