import React from 'react';

import { Typography } from '@material-ui/core';

import InputMedia from '../InputMedia';

function FormInsertMedia({ data, setData }) {
  const setMedia = (media) => {
    setData({ ...data, ...{ media } });
  };

  return (
    <>
      <Typography variant="h6" component="h1">
        Selecione a sua história
      </Typography>
      <InputMedia
        media={data.media}
        setMedia={setMedia}
        type={data.type}
        fullWidth
      />
    </>
  );
}

export default FormInsertMedia;
