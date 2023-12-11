import { productCategories, products } from "data";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useMemo } from "react";
import { useLocation } from "react-router";
import { Content, Div, Layout, Span } from "./layout/components/Components";
import PageFooter from "./layout/components/PageFooter";
import { Col, Row } from "./layout/components/styles";
import Head from "./_components/Head";
import Paginator from "./_components/Paginator";
import ProductCard from "./_components/ProductCard";

const ITEMS_PER_PAGE = 12;

const Shop = () => {
  const { state } = useLocation();
  const [page, setPage] = useState(0);
  const { category } = state || {};

  useEffect(() => {
    setPage(0);
  }, [category])

  let pageTitle = "Shop";

  switch (category) {
    case productCategories.bags:
      pageTitle = "Bags";
      break;
    case productCategories.shoes:
      pageTitle = "Shoes";
      break;
    default:
      break;
  }

  const firstProductIndex = page * ITEMS_PER_PAGE;
  const lastProductIndex = firstProductIndex + ITEMS_PER_PAGE;
  const filteredProducts = products.filter((prod) => !category || prod.category === category);
  const productsToShow = filteredProducts.slice(firstProductIndex, lastProductIndex);

  return (
    <Layout>
      <Head />
      <Content>
        <Div padH={3} padV={2} auto justifyBetween bottom>
          <Span size={2.5}>Shop</Span>
          <Span gray small>{products.length} products</Span>
        </Div>
        <Row padH={3} padV={1} rowGap="4rem">
          {productsToShow.map((prod) => (
            <ProductCard {...prod} />
          ))}
          <Col>
            <Div justifyCenter>
              <Paginator
                totalPages={Math.ceil(filteredProducts.length / ITEMS_PER_PAGE)}
                currentPage={page}
                onPageClick={(page) => setPage(page)}
              />
            </Div>
          </Col>
        </Row>
      </Content>
      <PageFooter />
    </Layout>
  );
};

export default Shop;
