import React from 'react';
import styled from 'styled-components';

const LoadingMessage = styled.div`
  font-family: Arial;
`;

const LoadingView = () => <LoadingMessage>Carregando...</LoadingMessage>;

export default LoadingView;
