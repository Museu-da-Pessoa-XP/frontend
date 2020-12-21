import React from 'react';

import { Typography } from '@material-ui/core';

function FormHowToTellStory() {
  return (
    <>
      <Typography variant="h6" component="h1">
        Mas o que eu devo contar?
      </Typography>
      <p>
        O importante é que seja uma história! Com começo, meio e fim. Você pode
        selecionar um momento específico de sua vida e depois voltar outras
        vezes para contar outros.
        <br />
        <br />
        Pode, por exemplo, ser a história da origem da sua família, uma história
        sobre sua infância ou vida atual. Pode até ser a história de uma outra
        pessoa, como alguém da sua família.
        <br />
        <br />
        Cuidado para não se perder em opiniões e comentários. Pensar no que quer
        contar, antes de começar, já ajuda bastante!
      </p>
    </>
  );
}

export default FormHowToTellStory;
