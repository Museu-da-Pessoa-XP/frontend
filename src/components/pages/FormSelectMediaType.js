import React from 'react';
import PropTypes from 'prop-types';

import { Typography } from '@material-ui/core';

import SelectorMediaType from '../SelectorMediaType';

function FormSelectMediaType({ data, setData }) {
  const handleToggle = (event, type) => {
    setData({ ...data, ...{ type } });
  };

  return (
    <>
      <Typography variant="h6" component="h1">
        Como você quer contar sua história?
      </Typography>
      <SelectorMediaType
        id="form-select-media-type_selector-media-type"
        type={data.type}
        handleToggle={handleToggle}
      />
    </>
  );
}

FormSelectMediaType.propTypes = {
  data: PropTypes.shape({
    type: PropTypes.oneOf(['text', 'audio', 'video']).isRequired,
  }).isRequired,
  setData: PropTypes.func.isRequired,
};

export default FormSelectMediaType;
