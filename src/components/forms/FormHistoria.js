import React, { useState } from "react";

import {
  TextField,
  Snackbar,
  Typography,
  Button,
  Select,
  MenuItem,
  Box
} from "@material-ui/core";

import SelectorMediaType from "../SelectorMediaType";
import InputMedia from "../InputMedia";
import Logo from "../../assets/logo.png";
import Form from "./Form";
import sendForm from "../sendForm";

function FormHistoria() {
  const [title, setTitle] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [category, setCategory] = useState("study");
  const [description, setDescription] = useState("");
  const [type, setType] = useState("text");
  const [media, setMedia] = useState("");
  const [alertState, setAlertState] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const alertMessages = {
    success: "História enviada com sucesso!",
    fail: "Houve um erro ao enviar a história. :(",
  };

  const handleInput = (setState) => (event) => {
    setState(event.target.value);
  };

  const handleToggle = (event, newType) => {
    setType(newType);
    setMedia("");
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

      <Box
        m={4}
        display="flex"
        flexDirection="column"
        alignItems="center"
        style={{ minHeight: "70vh" }}
        justifyContent="space-between"
      >
        <Typography variant="h6" component="h1">
          Escolha um título para sua história
        </Typography>
        <TextField
          id="form-historia_input-title"
          value={title}
          onChange={handleInput(setTitle)}
        />

        <Typography variant="h6" component="h1">
          Escolha a categoria da história
        </Typography>

        <Select
          id="form-historia_input-category"
          value={category}
          onChange={handleInput(setCategory)}
        >
          <MenuItem value={"study"}>Estudos</MenuItem>
          <MenuItem value={"love"}>Amor</MenuItem>
          <MenuItem value={"travel"}>Viagem</MenuItem>
          <MenuItem value={"family"}>Família</MenuItem>
          <MenuItem value={"happiness"}>Felicidade</MenuItem>
          <MenuItem value={"others"}>Outros</MenuItem>
        </Select>

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
        <SelectorMediaType
          id="form-historia_selector-media-type"
          type={type}
          handleToggle={handleToggle}
        />
        <InputMedia media={media} setMedia={setMedia} type={type} />

        <Button
          id="form-historia_button-submit"
          type="submit"
          variant="contained"
          color="primary"
        >
          Enviar história
        </Button>
      </Box>

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
