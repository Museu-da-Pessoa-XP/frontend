import React from 'react';

import { ToggleButton, ToggleButtonGroup } from '@material-ui/lab';

import TextFieldsIcon from '@material-ui/icons/TextFields';
import AudiotrackIcon from '@material-ui/icons/Audiotrack';
import VideocamIcon from '@material-ui/icons/Videocam';

import PropTypes from 'prop-types';

function SelectorMediaType({ type, handleToggle }) {
  return (
    <ToggleButtonGroup
      id="selector-media-type"
      size="large"
      value={type}
      exclusive
      onChange={handleToggle}
    >
      <ToggleButton id="selector-media-type_text-button" value="text">
        <TextFieldsIcon />
        Texto
      </ToggleButton>
      <ToggleButton id="selector-media-type_audio-button" value="audio">
        <AudiotrackIcon />
        Áudio
      </ToggleButton>
      <ToggleButton id="selector-media-type_video-button" value="video">
        <VideocamIcon />
        Vídeo
      </ToggleButton>
    </ToggleButtonGroup>
  );
}

SelectorMediaType.propTypes = {
  type: PropTypes.string.isRequired,
  handleToggle: PropTypes.func.isRequired,
};

export default SelectorMediaType;
