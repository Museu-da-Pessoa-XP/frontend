// TODO: previsualizacao dos dados inseridos
// TODO: campos de rg etc

import React, { useState } from 'react';
import {
  Box,
  Button,
  Snackbar,
  Stepper,
  Step,
  StepLabel,
  Typography,
} from '@material-ui/core';

import Form from './Form';
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
  const [data, setData] = useState({});

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

  const handleReset = () => {
    setActiveStep(0);
    setData({});
  };

  const handleSubmit = (event) => {
    event.preventDefault();
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
    <div className={classes.root}>
      <Stepper activeStep={activeStep}>
        {steps.map((label) => {
          return (
            <Step key={label}>
              <StepLabel />
            </Step>
          );
        })}
      </Stepper>
      <div>
        {activeStep === steps.length ? (
          // TODO: preview do arquivo
          <div>
            <Typography className={classes.instructions}>
              Todas as etapas concluídas!
            </Typography>
            <Button
              id="form-historia_button-submit"
              onClick={handleSubmit}
              variant="contained"
              color="primary"
            >
              Enviar história
            </Button>
            <Button onClick={handleReset} className={classes.button}>
              Voltar ao início
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
          </div>
        ) : (
          <Form id="form-page">
            <Box m={4} display="flex" flexDirection="column">
              {
                [
                  <FormPersonalData setData={setData} data={data} />,
                  <FormSelectMediaType setData={setData} data={data} />,
                  <FormInsertMedia setData={setData} data={data} />,
                  <FormAdditionalInformation setData={setData} data={data} />,
                ][activeStep]
              }
              <Box>
                <Button
                  id="form-select-media-type_button-submit"
                  onClick={handleBack}
                  variant="contained"
                  className={useStyles.button}
                >
                  Voltar
                </Button>

                <Button
                  id="form-select-media-type_button-submit"
                  onClick={handleNext}
                  variant="contained"
                  color="primary"
                >
                  Continuar
                </Button>
              </Box>
            </Box>
          </Form>
        )}
      </div>
    </div>
  );
}
