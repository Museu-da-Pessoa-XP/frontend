/* eslint-disable jsx-a11y/media-has-caption */
import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '@material-ui/core';
import { ReactMediaRecorder } from 'react-media-recorder';

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
              <>
                {' '}
                <p>
                  Clique para começar a gravar ou envie um arquivo de áudio.
                </p>
                <Button
                  onClick={startRecording}
                  id="recorder-audio_button-start_recording_idle"
                  variant="contained"
                  color="primary"
                  style={{
                    margin: '0 auto',
                    marginBottom: '10px',
                    display: 'block',
                  }}
                >
                  Gravar Áudio
                </Button>{' '}
                <p>OU</p>
              </>
            )}

            {status === 'recording' && (
              <>
                <p
                  style={{
                    color: '#e62e00',
                  }}
                >
                  <strong>Gravando Áudio</strong>
                </p>
                <Button
                  onClick={stopRecording}
                  id="recorder-audio_button-stop_recording_recording"
                  variant="contained"
                  color="secondary"
                  style={{
                    margin: '0 auto',
                    marginBottom: '10px',
                    display: 'block',
                  }}
                >
                  Parar Gravação
                </Button>
              </>
            )}

            {status === 'stopped' && (
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
                <Button
                  onClick={startRecording}
                  id="recorder-audio_button-start_recording_stopped"
                  variant="contained"
                  color="primary"
                  style={{
                    margin: '0 auto',
                    marginBottom: '10px',
                    display: 'block',
                  }}
                >
                  Gravar outro áudio
                </Button>{' '}
                <p>OU</p>
              </>
            )}
          </div>
        )}
        onStop={(mediaBlobUrl) => {
          const url = mediaBlobUrl;
          setMedia(url);
        }}
      />
    </div>
  );
}

RecorderAudio.propTypes = {
  setMedia: PropTypes.func.isRequired,
};

export default RecorderAudio;
