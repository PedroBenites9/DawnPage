import { products } from "data";
import React from "react";
import styled from "styled-components";
import { Content, Div, Layout, P, Span } from "./layout/components/Components";
import PageFooter from "./layout/components/PageFooter";
import { Col, Row } from "./layout/components/styles";
import Banner from "./_components/Banner";
import Head from "./_components/Head";
import ProductCard from "./_components/ProductCard";

const ReviewImg = styled.img`
  max-height: 4rem;
  width: fit-content;
`;

const Review = ({ img, text }) => {
  return (
    <Div col padH={5} auto>
      <ReviewImg src={img} />
      <P light center marT1>
        "{text}"
      </P>
    </Div>
  );
};

const Home = () => {
  return (
    <Layout>
      <Head />
      <Content>
        <Banner />
        <Div center col marT={2}>
          <Span size={2}>Obsessive Attention Intelligent Effort</Span>
          <Span gray>
            Functional handbags made of luxurious and honest materials to improve people's lives in small but mighty ways.
          </Span>
        </Div>
        <Row padV={2} padH={10} rowGap="4rem">
          {products.slice(0, 8).map((prod) => (
            <ProductCard {...prod} />
          ))}
        </Row>
        <Row marT={2} padH={10}>
          <Col col={6}>
            <Review
              img="https://cdn.shopify.com/s/files/1/0551/7626/5784/files/1_zmzOs2NElSXPbU6OX0EIeg_2x_fd3e94eb-93f7-4405-aac8-224df6d5b6dc_710x.png?v=1628776889"
              text="All too often, we're forced to pick: style, or sustainability. Recently, more designers have been making environmental impact a top priority"
            />
          </Col>
          <Col col={6}>
            <Review
              img="https://cdn.shopify.com/s/files/1/0551/7626/5784/files/Refinery29_710x.png?v=1628776879"
              text="The leather is sourced from environmentally friendly tanneries in Italy, France, and Turkey, where Rure is based and everything is assembled by hand."
            />
          </Col>
        </Row>
      </Content>
      <PageFooter />
    </Layout>
  );
};

export default Home;
