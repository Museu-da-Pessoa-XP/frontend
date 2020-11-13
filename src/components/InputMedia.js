import React from "react";

import { TextField, Button } from "@material-ui/core";
import PropTypes from 'prop-types';

function InputMedia ({ media, setMedia, type }) {
  const handleTextInput = (event) => {
    const textContent = event.target.value;
    setMedia(textContent);
  };

  const handleFileInput = (event) => {
    const file = event.target.files[0];
    const url = URL.createObjectURL(file);
    setMedia(url);
  };

  const InputTextMedia= (
    <TextField
      id="input-media_input-media-text"
      multiline
      rowsMax={10}
      value={media}
      onChange={handleTextInput}
    />
  );

  const InputFileMedia = (
    <Button id="input-media_upload-media-file" variant="contained" component="label">
      Selecionar o arquivo
      <input
        type="file"
        accept={`${type}/*`}
        style={{ display: "none" }}
        onChange={handleFileInput}
      />
    </Button>
  );

  return <>{type === "text" ? InputTextMedia : InputFileMedia}</>;
};

InputMedia.propTypes = {
  media: PropTypes.string.isRequired,
  setMedia: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
}

export default InputMedia;