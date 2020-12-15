import React from 'react';
import PropTypes from 'prop-types';
import VideoRecorder from 'react-video-recorder';
import LoadingView from './LoadingView';
import UnsupportedView from './UnsupportedView';
import ErrorView from './ErrorView';
import Actions from './Actions';

function RecorderVideo({ setMedia, type }) {
  return (
    <VideoRecorder
      constraints={{
        audio: true,
        video: type === 'video',
      }}
      isOnInitially
      onRecordingComplete={(videoBlob) => {
        const url = URL.createObjectURL(videoBlob);
        setMedia(url);
      }}
      renderLoadingView={LoadingView}
      renderUnsupportedView={UnsupportedView}
      renderErrorView={ErrorView}
      renderActions={Actions}
    />
  );
}

RecorderVideo.propTypes = {
  setMedia: PropTypes.func.isRequired,
  type: PropTypes.oneOf(['text', 'audio', 'video']).isRequired,
};

export default RecorderVideo;
