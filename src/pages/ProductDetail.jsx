import { products } from "data";
import React from "react";
import { useState } from "react";
import { useMemo } from "react";
import { useParams } from "react-router";
import styled from "styled-components";
import Amount from "./layout/components/Amount";
import { Content, Div, Layout, Span } from "./layout/components/Components";
import PageFooter from "./layout/components/PageFooter";
import { Col, Row } from "./layout/components/styles";
import Head from "./_components/Head";
import { shuffleArray } from "../util/array";
import ProductCard, {
  OldPrice,
  saleContainerGeneralStyle,
} from "./_components/ProductCard";
import QuantityField from "./_components/QuantityField";
import ColorCircle from "./_components/ColorCircle";
import { useDispatch } from "react-redux";
import { actions } from "reducer/cart";
import { NotificationManager } from "react-notifications";

const StyledImage = styled.img`
  width: 100%;
`;

export const Button = styled.button`
  width: fit-content;
  background-color: ${({ light }) => (light ? "white" : "#252525")};
  border: solid 1px #252525;
  margin-top: 0.5rem;
  padding: 0.75rem;
  cursor: pointer;
`;

const SaleContainer = styled.div`
  ${saleContainerGeneralStyle}
  height: fit-content;
  align-self: center;
  margin-left: 1rem;
`;

const ProductDetail = () => {
  const { id } = useParams();
  const product = useMemo(
    () => products.find((p) => p.id === parseInt(id)),
    [id]
  );

  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [quantity, setQuantity] = useState(0);
  const dispatch = useDispatch();

  const recommendedProducts = shuffleArray(
    products.filter((prod) => prod.id !== product.id)
  ).slice(0, 8);

  const onAddToCart = () => {
    const productsToAdd = [];
    for (let i = 0; i < quantity; i++) {
      productsToAdd.push({ ...product, selectedColor });
    }
    dispatch(actions.addProducts(productsToAdd));
    // TODO: Descomentar (si, esto arregla el bug masomenos)
    /*NotificationManager.error(
      `Added ${quantity} product${quantity > 1 ? "s" : ""} to the cart`
    );*/
  };

  return (
    <Layout>
      <Head />
      <Content>
        <Row marT={3} padH={3}>
          <Col col={4} colStart={2}>
            <Div justifyCenter>
              <StyledImage src={product.img} />
            </Div>
          </Col>
          <Col colStart={7} col={5}>
            <Div col>
              <Span size={3}>{product.name}</Span>
              {product.offerPrice ? (
                <Div col>
                  <OldPrice small gray>
                    <Amount value={product.price} />
                  </OldPrice>
                  <Div>
                    <Span size={2} light>
                      <Amount value={product.offerPrice} />
                    </Span>
                    <SaleContainer>
                      <Span white>Sale</Span>
                    </SaleContainer>
                  </Div>
                </Div>
              ) : (
                <Span size={2} light>
                  <Amount value={product.price} />
                </Span>
              )}
              <Div marT1 marB={2} bottom>
                {product.colors.map((color) => (
                  <ColorCircle
                    color={color}
                    selected={color.id === selectedColor.id}
                    onColorSelect={() => {}}
                  />
                ))}
              </Div>
              <Span light marB={0.5}>
                Quantity
              </Span>
              <QuantityField value={quantity} onChange={setQuantity} />
              <Span small marT={0.5} gray>
                1 in cart
              </Span>
              <Div marT={2} col>
                <Button>
                  <Span white light>
                    Buy now
                  </Span>
                </Button>
                <Button light onClick={onAddToCart}>
                  <Span light>Add to cart</Span>
                </Button>
              </Div>
            </Div>
          </Col>
          <Col colStart={2} col={2}>
            <Div col marT={2}>
              <Span size={1.1} marB={0.5}>
                Free Shipping
              </Span>
              <Span small gray>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima
                nulla laboriosam tempora, sunt nesciunt molestiae non.
              </Span>
            </Div>
          </Col>
          <Col col={2}>
            <Div col marT={2}>
              <Span size={1.1} marB={0.5}>
                Hassle-Free Exchanges
              </Span>
              <Span small gray>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima
                nulla laboriosam tempora, sunt nesciunt molestiae non.
              </Span>
            </Div>
          </Col>
        </Row>
        <Row marT={2} padH={3}>
          <Col col={10} colStart={2}>
            <Row marT1>
              {recommendedProducts.map((prod) => (
                <ProductCard {...prod} />
              ))}
            </Row>
          </Col>
        </Row>
      </Content>
    </Layout>
  );
};

export default ProductDetail;
