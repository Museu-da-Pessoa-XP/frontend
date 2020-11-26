import React, { useState } from "react";

import {
  TextField,
  Typography,
  Select,
  MenuItem,
} from "@material-ui/core";


function FormAdditionalInformation({ data, setData }) {

  const handleInput = (newInput) => (event) => {
    setData({ ...data, ...newInput(event.target.value) });
  };

  return (
    <>

      <Typography variant="h6" component="h1">
        Conte um pouco sobre a sua história
      </Typography>
      <TextField
        id="form-additional-information_input-title"
        placeholder="Título"
        variant="outlined"
        margin="normal"
        value={data.title}
        onChange={handleInput((title) => ({ title }))}
      />

      <Select
        id="form-additional-information_input-category"
        variant="outlined"
        margin="normal"
        value={data.category}
        onChange={handleInput((category) => ({ category }))}
      >
        <MenuItem value="study">Estudos</MenuItem>
        <MenuItem value="love">Amor</MenuItem>
        <MenuItem value="travel">Viagem</MenuItem>
        <MenuItem value="family">Família</MenuItem>
        <MenuItem value="happiness">Felicidade</MenuItem>
        <MenuItem value="others">Outros</MenuItem>
      </Select>

      <TextField
        id="form-additional-information_input-description"
        placeholder="Descrição"
        variant="outlined"
        margin="normal"
        value={data.description}
        onChange={handleInput((description) => ({ description }))}
      />

    </>
  );
}

export default FormAdditionalInformation;
