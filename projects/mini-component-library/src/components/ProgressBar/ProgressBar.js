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
const borderRadius = {
  small: "4px",
  medium: "4px",
  large: "8px"
}

const ProgressBar = ({ value, size }) => {
  return <div role="progressbar" aria-valuenow={value} aria-valuemin="0" aria-valuemax="100">
    <FullBar style={{"--bar-height": barHeights[size], "--bar-border-radius": borderRadius[size]}}>
      <ProgressWrapper padding={size === "large" ? 4 : 0}>
      <Progress value={value} />
      </ProgressWrapper>
    </FullBar>
    <VisuallyHidden>{`${value}px`}</VisuallyHidden>
  </div>
};

const FullBar = styled.div`
  width: 370px;
  height: var(--bar-height);
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};

  background: ${COLORS.transparentGray15};
  position: absolute;
  border-radius: var(--bar-border-radius);
`

const ProgressWrapper = styled.div`
  top: ${p => p.padding}px;
  left: ${p => p.padding}px;
  bottom: ${p => p.padding}px;
  right: ${p => p.padding}px;

  position: absolute;

  /* round corners near 100% */
  overflow: hidden;

  border-radius: 4px;
`

const Progress = styled.div`
  width: ${p => `${p.value}%`};
  height: 100%;

  background: ${COLORS.primary};

  border-radius: "4px 0px 0px 4px";
`

export default ProgressBar;
