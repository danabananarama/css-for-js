import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const sizes = {
  small: {
    fontSize: 14,
    iconSize: 16
  },
  large: {
    fontSize: 18,
    iconSize: 20
  }
}

const IconInput = ({
  label,
  icon,
  width = 250,
  size,
  placeholder,
}) => {
  const {fontSize, iconSize} = sizes[size];
  return <Wrapper>
    <IconWrapper>
      <Icon id={icon} size={iconSize} />
    </IconWrapper>
    <VisuallyHidden>
      <label>{label}</label>
    </VisuallyHidden>
    <Input placeholder="Search..." fontSize={fontSize} iconSize={iconSize} style={{"--width": `${width}px`}} />
    </Wrapper>;
};

const Input = styled.input`
  font-size: ${p => p.fontSize/16}rem;
  border: none;
  width: var(--width);
  font-family: Roboto;
  padding-left: ${p => 1.5*p.iconSize}px;
  margin-bottom: 4px;
  /* Use parent style rather than user agent stylesheet */
  color: inherit;
  font-weight: 700;

  &::placeholder {
    color: ${COLORS.gray500};
    font-weight: 400;
  }
`

const Wrapper =  styled.div`
  border-bottom: ${COLORS.black} 1px solid;
  max-width: max-content;

  color: ${COLORS.gray700};

  &:hover {
    color: ${COLORS.black};
  }
`

const IconWrapper = styled.div`
  position: absolute;
  pointer-events: none;
`


export default IconInput;
