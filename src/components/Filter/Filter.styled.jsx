import styled from 'styled-components';

export const FilterInputStyled = styled.input`
  max-width: 400px;
  width: 100%;
  height: 30px;
  margin-bottom: 20px;
  padding: 2px 20px;
  border: solid 2px #008000;
  border-radius: 6px;
  background-color: inherit;
  outline: none;
  font-size: 18px;
  line-height: 1.16;
  letter-spacing: 0.01em;
  color: #000000;
  &:hover,
  &:focus {
    border: solid 2px #3c322d;
  }
`;

export const FilterTitleStyled = styled.h3`
  margin-bottom: 30px;

  font-family: 'Roboto';
  font-weight: 700;
  font-size: 30px;
`;
