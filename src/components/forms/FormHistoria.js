// TODO: previsualizacao dos dados inseridos
// TODO: campos de rg etc

import React, { useState } from 'react';
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

import useStyles from '../styles/style';
import FormPersonalData from './FormPersonalData';
import FormSelectMediaType from './FormSelectMediaType';
import FormInsertMedia from './FormInsertMedia';
import FormAdditionalInformation from './FormAdditionalInformation';

import sendForm from '../sendForm';

function getSteps() {
  return [
    'Dados Pessoais',
    'Como você quer contar sua história?',
    'Conte sua história',
    'Informações adicionais',
  ];
}

export default function MultiStepForm() {
  const classes = useStyles();
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

  const steps = getSteps();

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

  return (
    <Container
      maxWidth="xs"
      style={{ display: 'flex', flexDirection: 'column', height: '100%' }}
    >
      <Stepper activeStep={activeStep}>
        {steps.map((label) => {
          return (
            <Step key={label}>
              <StepLabel />
            </Step>
          );
        })}
      </Stepper>

      <Snackbar
        id="form-historia_alert-result"
        open={alertState}
        onClose={() => {
          setAlertState(false);
        }}
        autoHideDuration={6000}
        message={alertMessage}
      />

      <>
        <Box
          flexGrow={1}
          m={4}
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
        >
          {activeStep === steps.length ? (
            <Typography className={classes.instructions}>
              Todas as etapas concluídas!
            </Typography>
          ) : (
            [
              <FormPersonalData setData={setData} data={data} />,
              <FormSelectMediaType setData={setData} data={data} />,
              <FormInsertMedia setData={setData} data={data} />,
              <FormAdditionalInformation setData={setData} data={data} />,
            ][activeStep]
          )}
        </Box>

        <Box
          display="flex"
          justifyContent="space-around"
          style={{ width: '100%' }}
          marginBottom={2}
        >
          {activeStep === 0 ? (
            ''
          ) : (
            <Button
              id="form-historia_button-back"
              onClick={handleBack}
              variant="contained"
              className={useStyles.button}
              fullWidth
            >
              Voltar
            </Button>
          )}
          {activeStep === steps.length ? (
            <Button
              id="form-historia_button-submit"
              onClick={handleSubmit}
              variant="contained"
              color="primary"
              fullWidth
            >
              Enviar história
            </Button>
          ) : (
            <Button
              id="form-historia_button-next"
              onClick={handleNext}
              variant="contained"
              color="primary"
              fullWidth
            >
              Continuar
            </Button>
          )}
        </Box>
      </>
    </Container>
  );
}
