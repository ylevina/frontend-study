import React from 'react';
import styled from 'styled-components';

export const SectionHeading = ({text}) => {
  return (
    <StyledHeading>{text}</StyledHeading>
  );
}

const StyledHeading = styled.h1`
  font-weight: bold;
  margin: 0 0 10px;
  font-family: 'Roboto', sans-serif;
`