import React from "react";

import {
  TextField,
  Typography,
} from "@material-ui/core";

import Logo from "../../assets/logo.png";

function FormPersonalData({ data, setData }) {
  
  const handleInput = (newInput) => (event) => {
    setData({ ...data, ...newInput(event.target.value)});
  };

  return (
    <>
      <img alt="" src={Logo} />

      <Typography variant="h6" component="h1">
        Digite suas informações pessoais
      </Typography>
      <TextField
        id="form-historia_input-name"
        placeholder="Nome"
        variant="outlined"
        margin="normal"
        fullWidth
        value={data.name}
        onChange={handleInput((name) => ({name}))}
      />

      <TextField
        id="form-historia_input-email"
        placeholder="E-mail"
        variant="outlined"
        margin="normal"
        fullWidth
        value={data.email}
        onChange={handleInput((email) => ({email}))}
      />

      <TextField
        id="form-historia_input-telephone"
        placeholder="Telefone"
        variant="outlined"
        margin="normal"
        fullWidth
        value={data.phone}
        onChange={handleInput((phone) => ({phone}))}
      />

    </>
  );
}

export default FormPersonalData;
