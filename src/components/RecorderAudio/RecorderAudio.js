/* eslint-disable jsx-a11y/media-has-caption */
import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '@material-ui/core';
import { ReactMediaRecorder } from 'react-media-recorder';
import styled from 'styled-components';

const ActionButton = styled(Button)`
  margin: 0 auto;
  margin-bottom: 10px;
  display: block;
`;

function IdleRecorderScreen({ startRecording }) {
  return (
    <>
      <p>Clique para começar a gravar ou envie um arquivo de áudio.</p>
      <ActionButton
        onClick={startRecording}
        id="recorder-audio_button-start_recording_idle"
        variant="contained"
        color="primary"
      >
        Gravar Áudio
      </ActionButton>
      <p>OU</p>
    </>
  );
}

function RecordingRecorderScreen({ stopRecording }) {
  return (
    <>
      <p
        style={{
          color: '#e62e00',
        }}
      >
        <strong>Gravando Áudio</strong>
      </p>
      <ActionButton
        onClick={stopRecording}
        id="recorder-audio_button-stop_recording_recording"
        variant="contained"
        color="secondary"
      >
        Parar Gravação
      </ActionButton>
    </>
  );
}

function StoppedRecorderScreen({ startRecording, mediaBlobUrl }) {
  return (
    <>
      <p
        style={{
          color: '#006600',
        }}
      >
        <strong>Gravação Concluída</strong>
      </p>
      <audio
        src={mediaBlobUrl}
        controls
        autoPlay
        style={{
          margin: '0 auto',
          marginBottom: '10px',
          display: 'block',
        }}
      />
      <ActionButton
        onClick={startRecording}
        id="recorder-audio_button-start_recording_stopped"
        variant="contained"
        color="primary"
      >
        Gravar outro áudio
      </ActionButton>
      <p>OU</p>
    </>
  );
}

function RecorderAudio({ setMedia }) {
  return (
    <div>
      <ReactMediaRecorder
        audio
        render={({ status, startRecording, stopRecording, mediaBlobUrl }) => (
          <div
            style={{
              textAlign: 'center',
            }}
          >
            {status === 'idle' && (
              <IdleRecorderScreen startRecording={startRecording} />
            )}

            {status === 'recording' && (
              <RecordingRecorderScreen stopRecording={stopRecording} />
            )}

            {status === 'stopped' && (
              <StoppedRecorderScreen
                startRecording={startRecording}
                mediaBlobUrl={mediaBlobUrl}
              />
            )}
          </div>
        )}
        onStop={(mediaBlobUrl) => {
          setMedia(mediaBlobUrl);
        }}
      />
    </div>
  );
}

IdleRecorderScreen.propTypes = {
  startRecording: PropTypes.func.isRequired,
};

RecordingRecorderScreen.propTypes = {
  stopRecording: PropTypes.func.isRequired,
};

StoppedRecorderScreen.propTypes = {
  startRecording: PropTypes.func.isRequired,
  mediaBlobUrl: PropTypes.string.isRequired,
};

RecorderAudio.propTypes = {
  setMedia: PropTypes.func.isRequired,
};

export default RecorderAudio;
