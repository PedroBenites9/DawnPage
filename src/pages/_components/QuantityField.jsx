import { Clickable, Div, Span } from "pages/layout/components/Components";
import React from "react";
import styled from "styled-components";

const QuantityContainer = styled(Div)`
  height: 2rem;
  border: 2px #f7f2f2 solid;
`;

const QuantityOperatorContainer = styled(Div).attrs({ center: true })`
  height: 100%;
  width: auto;
  padding: 0 1rem;
  background: #f7f2f2;
`;

const QuantityField = ({ onChange, value }) => {
  return (
    <QuantityContainer center fitContent>
      <Clickable onClick={value > 1 && (() => onChange(value - 1))} h100>
        <QuantityOperatorContainer>
          <Span>-</Span>
        </QuantityOperatorContainer>
      </Clickable>
      <Span light marH1>
        {value}
      </Span>
      <Clickable onClick={() => onChange(value + 1)} h100>
        <QuantityOperatorContainer>
          <Span>+</Span>
        </QuantityOperatorContainer>
      </Clickable>
    </QuantityContainer>
  );
};

export default QuantityField;
