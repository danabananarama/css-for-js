/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const barHeights = {
  small: "8px",
  medium: "12px",
  large: "24px"
}

const ProgressBar = ({ value, size }) => {
  return <div role="progressbar" aria-valuenow={value} aria-valuemin="0" aria-valuemax="100">
    <FullBar style={{"--bar-height": barHeights[size]}}>
      <Progress value={value} padding={size === "large" ? 4 : 0} />
    </FullBar>
  </div>
};

const FullBar = styled.div`
  width: 370px;
  height: var(--bar-height);
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};

  background: ${COLORS.transparentGray15};
  position: absolute;
  border-radius: 4px;
`


const Progress = styled.div`
  width: ${p => `${parseInt(p.value) * (370 - 2 * p.padding) / 100}px`};

  top: ${p => p.padding}px;
  left: ${p => p.padding}px;
  bottom: ${p => p.padding}px;

  background: ${COLORS.primary};
  position: absolute;

  border-radius: ${p => parseInt(p.value) < 99 ? "4px 0px 0px 4px" : "4px"};
`

export default ProgressBar;
