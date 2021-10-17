import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import Icon from '../Icon';
import { getDisplayedValue } from './Select.helpers';

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
      <SelectWrapper>
    <NativeSelect value={value} onChange={onChange}>
        {children}
    </NativeSelect>
      <SelectPresentation>
      <Option>
        {displayedValue}
      </Option>
    <IconWrapper>  
    <Icon id="chevron-down" size={24} />
      </IconWrapper>
      </SelectPresentation>
      </SelectWrapper>
  );
};

const SelectWrapper = styled.div`
  background: ${COLORS.transparentGray15};
  font-weight: 400;
  border-radius: 8px;
  border: transparent;
  color: ${COLORS.gray700};
  position: relative;
  width: fit-content;

  &:hover {
    color: ${COLORS.black};
  }
`
const NativeSelect = styled.select`
  -webkit-appearance: none;
  -moz-appearance: none;
  position: absolute;
  background: transparent;
  color: transparent;
  border: transparent;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
`

const Option = styled.div`
  display: inline-block;
  margin-top: auto;
  margin-bottom: auto;
  padding-right: 60px;
`


const SelectPresentation = styled.div`
  border: transparent;
  padding: 12px;
  width: max-content;
`

const IconWrapper = styled.div`
  position: absolute;
  top: 8px;
  right: 10px;

  pointer-events: none;
`



export default Select;
