/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';


const Wrapper = styled.div`
   
`;

const StyledProgress = styled.progress`
  /* Reset the default appearance */
  -webkit-appearance: none;
  appearance: none;

  &::-webkit-progress-bar {
    height: var(--outer-height);
    padding: var(--padding);
    border-radius: var(--outer-border-radius);

    background-color: ${COLORS.transparentGray15};
    box-shadow: inset 0px 2px 4px rgba(128, 128, 128, 0.35);
  }

  &::-webkit-progress-value {
    background-color: ${COLORS.primary};
    border-radius: 0px;
    border-top-left-radius: var(--inner-border-radius);
    border-bottom-left-radius: var(--inner-border-radius);
    border-top-right-radius: ${p=>p.value >= 99 ? "var(--inner-border-radius)": "0px"};
    border-bottom-right-radius: ${p=>p.value >= 99 ? "var(--inner-border-radius)": "0px"};
    height: var(--inner-height);
  }
`;


const ProgressBar = ({ value, size }) => {

  const SIZES = {
    small: {
      "--outer-height": "8px",
      "--padding": "0px",
      "--outer-border-radius": "4px",
      "--inner-border-radius": "4px",
      "--inner-height": "8px",
    },
    medium: {
      "--outer-height": "12px",
      "--padding": "0px",
      "--outer-border-radius": "4px",
      "--inner-border-radius": "4px",
      "--inner-height": "12px",
    },
    large: {
      "--outer-height": "24px",
      "--padding": "4px",
      "--outer-border-radius": "8px",
      "--inner-border-radius": "4px",
      "--inner-height": "16px",
    }
  }

  return <>
    <VisuallyHidden>
      <label for="loadinglabel">Loading:</label>
    </VisuallyHidden>
    <StyledProgress id="loadinglabel" max={100} value={value} style={SIZES[size]}/>
  </>;
};

export default ProgressBar;
