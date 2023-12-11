import { Clickable } from "pages/layout/components/Components";
import React from "react";
import styled, { css } from "styled-components";

const selectedCircleCss = css`
  height: 2rem;
  width: 2rem;
`;

const notSelectedCircleCss = css`
  :hover {
    border-color: gray;
  }
`;

const StyledColorCircle = styled.div`
  height: 1rem;
  width: 1rem;
  margin-right: 1rem;
  border-radius: 50%;
  border: solid 1px black;
  ${({ hex }) => `background-color: ${hex};`}
  ${({ selected }) => (selected ? notSelectedCircleCss : selectedCircleCss)}
  cursor: pointer;
`;

const ColorCircle = ({ color, selected, onColorSelect }) => {
  return (
    <Clickable auto onClick={() => onColorSelect(color)}>
      <StyledColorCircle hex={color.hex} selected={selected} />
    </Clickable>
  );
};

export default ColorCircle;
