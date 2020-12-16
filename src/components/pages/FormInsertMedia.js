import React from 'react';
import PropTypes from 'prop-types';

import { Typography } from '@material-ui/core';

import InputMedia from '../InputMedia';

function FormInsertMedia({ data, setData }) {
  const setMedia = (media) => {
    setData({ ...data, ...{ media } });
  };

  return (
    <>
      <Typography variant="h6" component="h1">
        Conte a sua história
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

FormInsertMedia.propTypes = {
  data: PropTypes.shape({
    type: PropTypes.oneOf(['text', 'audio', 'video']).isRequired,
    media: PropTypes.string.isRequired,
  }).isRequired,
  setData: PropTypes.func.isRequired,
};

export default FormInsertMedia;
