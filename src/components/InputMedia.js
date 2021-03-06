import React from 'react';

import { TextField, Button } from '@material-ui/core';
import PropTypes from 'prop-types';

import RecorderVideo from './RecorderVideo/index';

import RecorderAudio from './RecorderAudio/RecorderAudio';

function InputMedia({ media, setMedia, type }) {
  const handleTextInput = (event) => {
    const textContent = event.target.value;
    setMedia(textContent);
  };

  const handleFileInput = (event) => {
    const file = event.target.files[0];
    const url = URL.createObjectURL(file);
    setMedia(url);
  };

  const InputTextMedia = (
    <TextField
      id="input-media_input-media-text"
      multiline
      rowsMax={10}
      variant="outlined"
      margin="normal"
      value={media}
      onChange={handleTextInput}
    />
  );

  const InputFileMedia = (
    <>
      {type === 'video' && <RecorderVideo setMedia={setMedia} type={type} />}
      {type === 'audio' && <RecorderAudio setMedia={setMedia} />}
      <Button
        id="input-media_upload-media-file"
        variant="contained"
        component="label"
      >
        Selecionar o arquivo
        <input
          type="file"
          accept={`${type}/*`}
          style={{ display: 'none' }}
          onChange={handleFileInput}
        />
      </Button>
    </>


  );

  return <>{type === 'text' ? InputTextMedia : InputFileMedia}</>;
}

InputMedia.propTypes = {
  media: PropTypes.string.isRequired,
  setMedia: PropTypes.func.isRequired,
  type: PropTypes.oneOf(['text', 'audio', 'video']).isRequired,
};

export default InputMedia;
