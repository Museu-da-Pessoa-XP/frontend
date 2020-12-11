/* eslint-disable react/jsx-props-no-spreading */
// TODO: pré visualização dos dados inseridos
// TODO: adicionar redirect para forms

import React, { useState } from 'react';
import PropTypes from 'prop-types';

import {
  Box,
  Button,
  Container,
  Snackbar,
  Stepper,
  Step,
  StepLabel,
  Typography,
} from '@material-ui/core';

import FormPersonalData from './pages/FormPersonalData';
import FormSelectMediaType from './pages/FormSelectMediaType';
import FormInsertMedia from './pages/FormInsertMedia';
import FormAdditionalInformation from './pages/FormAdditionalInformation';

import sendForm from './sendForm';

export default function FormStory() {
  const [activeStep, setActiveStep] = useState(0);
  const [data, setData] = useState({
    name: '',
    email: '',
    phone: '',
    type: 'text',
    media: '',
    title: '',
    tags: [],
  });

  const [alertState, setAlertState] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');
  const alertMessages = {
    success: 'História enviada com sucesso!',
    fail: 'Houve um erro ao enviar a história. :(',
  };
  const setAlert = (message) => {
    setAlertMessage(message);
    setAlertState(true);
  };

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSubmit = () => {
    sendForm(data)
      .then((response) => {
        const message = response.ok
          ? alertMessages.success
          : alertMessages.fail;
        setAlert(message);
      })
      .catch(() => setAlert(alertMessages.fail));
  };

  const defaultPropsPage = { setData, data };
  const pages = [
    <FormPersonalData {...defaultPropsPage} />,
    <FormSelectMediaType {...defaultPropsPage} />,
    <FormInsertMedia {...defaultPropsPage} />,
    <FormAdditionalInformation {...defaultPropsPage} />,
  ];

  const lastPage = <Typography>Todas as etapas concluídas!</Typography>;

  const PageBox = ({ children }) => (
    <Box
      flexGrow={1}
      m={4}
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
    >
      {children}
    </Box>
  );
  PageBox.propTypes = {
    children: PropTypes.node.isRequired,
  };

  const ButtonBox = ({ children }) => (
    <Box
      display="flex"
      justifyContent="space-around"
      style={{ width: '100%' }}
      marginBottom={2}
    >
      {children}
    </Box>
  );
  ButtonBox.propTypes = {
    children: PropTypes.node.isRequired,
  };

  const buttonBack = (
    <Button
      id="form-historia_button-back"
      onClick={handleBack}
      variant="contained"
      fullWidth
    >
      Voltar
    </Button>
  );
  const buttonNext = (
    <Button
      id="form-historia_button-next"
      onClick={handleNext}
      variant="contained"
      color="primary"
      fullWidth
    >
      Continuar
    </Button>
  );
  const buttonSubmit = (
    <Button
      id="form-historia_button-submit"
      onClick={handleSubmit}
      variant="contained"
      color="primary"
      fullWidth
    >
      Enviar história
    </Button>
  );

  return (
    <Container
      maxWidth="xs"
      style={{ display: 'flex', flexDirection: 'column', height: '100%' }}
    >
      <Stepper activeStep={activeStep}>
        {pages.map((page) => (
          <Step key={page.type}>
            <StepLabel />
          </Step>
        ))}
      </Stepper>

      <PageBox>
        {activeStep === pages.length ? lastPage : pages[activeStep]}
      </PageBox>

      <ButtonBox>
        {activeStep !== 0 && buttonBack}
        {activeStep === pages.length ? buttonSubmit : buttonNext}
      </ButtonBox>

      <Snackbar
        id="form-historia_alert-result"
        open={alertState}
        onClose={() => {
          setAlertState(false);
        }}
        autoHideDuration={6000}
        message={alertMessage}
      />
    </Container>
  );
}
