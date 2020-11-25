import React, { useState } from "react";

import {
  TextField,
  Snackbar,
  Typography,
  Button,
  Select,
  MenuItem,
  Box,
} from "@material-ui/core";

import SelectorMediaType from "./SelectorMediaType";
import InputMedia from "./InputMedia";
import Logo from "../assets/logo.png";
import Form from "./Form";
import sendForm from "./sendForm";

function FormPersonalData({ sendData }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handleInput = (setState) => (event) => {
    setState(event.target.value);
  };

  return (
    <Form id="form-personal-data" onSubmit={sendData({ name, email, phone })}>
      <img alt="" src={Logo} />

      <Box m={4} display="flex" flexDirection="column">
        <Typography variant="h6" component="h1">
          Digite suas informações pessoais
        </Typography>
        <TextField
          id="form-historia_input-name"
          placeholder="Nome"
          value={name}
          onChange={handleInput(setName)}
        />

        <TextField
          id="form-historia_input-email"
          placeholder="E-mail"
          value={email}
          onChange={handleInput(setEmail)}
        />

        <TextField
          id="form-historia_input-telephone"
          placeholder="Telefone"
          value={phone}
          onChange={handleInput(setPhone)}
        />
      </Box>

      <Button
        id="form-historia_button-submit"
        type="submit"
        variant="contained"
        color="primary"
      >
        Continuar
      </Button>
    </Form>
  );
}

export default FormPersonalData;
