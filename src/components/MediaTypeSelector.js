import React from 'react';

import { ToggleButton, ToggleButtonGroup } from '@material-ui/lab';

import TextFieldsIcon from '@material-ui/icons/TextFields';
import AudiotrackIcon from '@material-ui/icons/Audiotrack';
import VideocamIcon from '@material-ui/icons/Videocam';

export default ({ type, handleToggle }) => {
  return (
    <ToggleButtonGroup
      id="media-type-toggle"
      size="large"
      value={type}
      exclusive
      onChange={handleToggle}
    >
      <ToggleButton id="media-type-toggle-text" value="text">
        <TextFieldsIcon />
        Texto
      </ToggleButton>
      <ToggleButton id="media-type-toggle-audio" value="audio">
        <AudiotrackIcon />
        Áudio
      </ToggleButton>
      <ToggleButton id="media-type-toggle-video" value="video">
        <VideocamIcon />
        Vídeo
      </ToggleButton>
    </ToggleButtonGroup>
  );
};
