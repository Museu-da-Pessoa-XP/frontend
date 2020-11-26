// 
// Gravar historia, contar historia, informações extras
// 
// >>Página 1 - [Dados pessoais, sem muito critério]
// -Nome
// -E-mail (validar o e-mail é bem importante, ou aqui ou numa tela de login)
// -Telefone
// [Autorização] ou [Primeira históra - já mandei outras histórias (vai precisar de validação!)] (colocamos dps)
// >>Página 2 - [Mandar a história]
// -Formato de áudio, vídeo e texto podendo ser na própria plataforma (formato texto podemos usar o editor de texto)
// -Poder enviar apenas áudio e vídeo de fora? Ou limitar o formato do arquivo de texto?
// >>Página 3 - [Preview do arquivo]

// TODO: previsualizacao dos dados inseridos
// TODO: campos de rg etc

import React, { useState } from "react";
import {
  Box,
  Button,
  Stepper,
  Step,
  StepLabel,
  Typography
} from "@material-ui/core";

import Form from "./Form";
import useStyles from "../styles/style";
import FormPersonalData from "./FormPersonalData";
import FormSelectMediaType from "./FormSelectMediaType";
import FormInsertMedia from "./FormInsertMedia";
import FormAdditionalInformation from "./FormAdditionalInformation";

function getSteps() {
  return [
    "Dados Pessoais",
    "Como você quer contar sua história?",
    "Conte sua história",
    "Informações adicionais"
  ];
}

export default function MultiStepForm() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(0);
  const [skipped, setSkipped] = useState(new Set());

  const [data, setData] = useState({});

  const steps = getSteps();

  const isStepOptional = (step) => {
    return step === 1;
  };

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      // You probably want to guard against something like this,
      // it should never occur unless someone's actively trying to break something.
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  const handleReset = () => {
    setActiveStep(0);
    setData({});
  };

  const sendData = (childNewData) => (event) => {
    event.preventDefault();
    setData({ ...data, ...childNewData });
    handleNext();
  };

  return (
    <div className={classes.root}>
      <Stepper activeStep={activeStep}>
        {steps.map((label, ) => {
          const stepProps = {};
          const labelProps = {};
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      <div>
        {activeStep === steps.length ? (
          <div>
            <Typography className={classes.instructions}>
              Todas as etapas concluídas!
            </Typography>
            <Button onClick={handleReset} className={classes.button}>
              Voltar ao início
            </Button>
          </div>
        ) : (
            <Form id="form-page">
              <Box m={4} display="flex" flexDirection="column">
                {
                  [
                    <FormPersonalData setData={setData} data={data} />,
                    <FormSelectMediaType setData={setData} data={data} />,
                    <FormInsertMedia setData={setData} data={data} />,
                    <FormAdditionalInformation setData={setData} data={data                   } />
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
