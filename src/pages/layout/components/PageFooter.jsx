import { productCategories } from "data";
import React from "react";
import { useHistory } from "react-router";
import { ROUTES } from "routes/ApplicationRoutes";
import styled from "styled-components";
import { Clickable, Div, Footer, P, Span } from "./Components";
import { Col, Row } from "./styles";

const StyledLinkSpan = styled(Span)`
  :hover {
    text-decoration: underline;
    color: #252525;
  }
`;

const Link = ({ label, onClick }) => {
  return (
    <Clickable fitContent marB={0.25} onClick={onClick}>
      <StyledLinkSpan gray small>
        {label}
      </StyledLinkSpan>
    </Clickable>
  );
};

const PageFooter = () => {
  const history = useHistory();
  return (
    <Footer>
      <Row padH={10}>
        <Col col={4}>
          <Div col>
            <Span size={1.2} marB1>
              Quick Links
            </Span>
            <Link label="Lookbook" />
            <Link label="Shoes" onClick={() => {}} />
            <Link label="Bags" onClick={() => history.push(ROUTES.shop, { category: productCategories.bags })} />
          </Div>
        </Col>
        <Col col={4}>
          <Div col>
            <Span size={1.2} marB1>
              Information
            </Span>
            <Link label="About" />
            <Link label="Shipping policy" />
          </Div>
        </Col>
        <Col col={4}>
          <Div col>
            <Span size={1.2} marB1>
              Our mision
            </Span>
            <P gray>
              Quality materials, good designs, craftsmansip and sustainability.
            </P>
          </Div>
        </Col>
      </Row>
      <Div justifyEnd marT={2} padH={10} auto>
        <Span xxsmall>
          © 2021, <Clickable onClick={() => alert("Easter egg")}><StyledLinkSpan xxsmall>MOBOLIC ENTERPRISES</StyledLinkSpan></Clickable> powered by 4 latas de monster a las 2 am
        </Span>
      </Div>
    </Footer>
  );
};

export default PageFooter;
