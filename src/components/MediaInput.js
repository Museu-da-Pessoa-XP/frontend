import React, { useState } from "react";

import { TextField, Button } from "@material-ui/core";

export default ({ media, setMedia, type }) => {
  const handleTextInput = (event) => {
    const textContent = event.target.value;
    setMedia(textContent);
  };

  const handleFileInput = (event) => {
    const file = event.target.files[0];
    const url = URL.createObjectURL(file);
    setMedia(url);
  };

  const TextMediaInput = (
    <TextField
      id="media-text-input"
      multiline
      rowsMax={10}
      value={media}
      onChange={handleTextInput}
    />
  );

  const FileMediaInput = (
    <Button id="media-file-upload" variant="contained" component="label">
      Selecionar o arquivo
      <input
        type="file"
        accept={`${type}/*`}
        style={{ display: "none" }}
        onChange={handleFileInput}
      />
    </Button>
  );

  return <>{type === "text" ? TextMediaInput : FileMediaInput}</>;
};
