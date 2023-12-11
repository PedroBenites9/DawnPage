import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { actions, selectors } from "reducer/cart";
import { ROUTES } from "routes/ApplicationRoutes";
import styled from "styled-components";
import Amount from "./layout/components/Amount";
import {
  Clickable,
  Content,
  Div,
  Layout,
  P,
  Span,
} from "./layout/components/Components";
import PageFooter from "./layout/components/PageFooter";
import { Col, Row } from "./layout/components/styles";
import { Button } from "./ProductDetail";
import Head from "./_components/Head";
import { OldPrice } from "./_components/ProductCard";
import QuantityField from "./_components/QuantityField";

const StyledImage = styled.img`
  width: 80%;
`;

const StyledHeaderRow = styled(Row)`
  border-bottom: solid 1px #f3f3f3;
`;

const StyledButton = styled(Button)`
  width: 20rem;
`;

const ColourSquare = styled.div`
  height: 0.5rem;
  width: 0.5rem;
  border: solid black 1px;
  display: inline-block;
  margin-left: 0.5rem;
  ${({ color }) => `background-color: ${color};`}
`;

const Cart = () => {
  const cartContent = useSelector(selectors.getCart);
  const dispatch = useDispatch();
  const history = useHistory();

  const composeCartProductId = (prod) => `${prod.id}${prod.selectedColor.id}`;

  const getCartItems = () => {
    const finalCartItems = {};
    cartContent.forEach((item) => {
      const id = composeCartProductId(item);
      if (finalCartItems[id]) {
        finalCartItems[id].quantity++;
        return;
      }
      finalCartItems[id] = { ...item, quantity: 1 };
    });

    return Object.keys(finalCartItems).map((key) => finalCartItems[key]);
  };

  const handleChangeQuantity = (prod, newQuantity) => {
    if (newQuantity < 1 || newQuantity > 10) return;

    let newCart = [];

    if (prod.quantity > newQuantity) {
      let index = -1;
      for (let i = cartContent.length - 1; i >= 0; i--) {
        if (
          composeCartProductId(prod) === composeCartProductId(cartContent[i])
        ) {
          index = i;
          break;
        }
      }
      newCart = [
        ...cartContent.slice(0, index),
        ...cartContent.slice(index + 1, cartContent.length),
      ];
    } else {
      const itemToDuplicate = cartContent.find(
        (p) => composeCartProductId(p) === composeCartProductId(prod)
      );
      newCart = [...cartContent, itemToDuplicate];
    }

    dispatch(actions.setProducts(newCart));
  };

  const handleRemove = (prod) => {
    dispatch(
      actions.setProducts(
        cartContent.filter(
          (p) => composeCartProductId(p) === composeCartProductId(prod)
        )
      )
    );
  };

  const onContinueShopping = () => history.push(ROUTES.shop);

  const calculateTotal = () => {
    let sum = 0;
    getCartItems().forEach(
      (p) => (sum += (p.offerPrice || p.price) * p.quantity)
    );
    return sum;
  };

  const getPrice = (product) => {
    const priceElement = (
      <Span light>
        <Amount value={product.price} />
      </Span>
    );

    if (product.offerPrice) {
      return (
        <Div center justifyEnd>
          <OldPrice xsmall gray marR1>
            <Amount value={product.price} />
          </OldPrice>

          {priceElement}
        </Div>
      );
    }
    return priceElement;
  };

  const cartView = (
    <>
      <Row marT={3} col>
        <Col col={10} colStart={2}>
          <Div col>
            <Div justifyBetween center>
              <Span size={2}>Cart</Span>

              <Clickable auto onClick={onContinueShopping}>
                  <Button>
                    <Span white ligth>
                      Continue shopping
                    </Span>
                  </Button>
              </Clickable>

            </Div>
          </Div>
        </Col>
      </Row>
      <StyledHeaderRow padB={0.5} marB1 marT={1.5}>
        <Col colStart={2} col={6}>
          <Div>
            <Span gray small>
              Product
            </Span>
          </Div>
        </Col>
        <Col colStart={8} col={2}>
          <Div>
            <Span gray small>
              Quantity
            </Span>
          </Div>
        </Col>
        <Col colStart={10} col={2}>
          <Div justifyEnd>
            <Span gray small>
              Quantity
            </Span>
          </Div>
        </Col>
      </StyledHeaderRow>
      <Row grow={1} rowGap="2rem">
        {getCartItems().map((prod) => (
          <>
            <Col colStart={2} col={1}>
              <StyledImage src={prod.img} />
            </Col>
            <Col colStart={3} col={5}>
              <Div col justifyCenter>
                <Span marB={0.75}>{prod.name}</Span>
                <Span gray small>
                  Color: {prod.selectedColor.name}{" "}
                  <ColourSquare color={prod.selectedColor.hex} />
                </Span>
              </Div>
            </Col>
            <Col col={2} colStart={8}>
              <Div>
                <QuantityField
                  value={prod.quantity}
                  onChange={(newQuantity) =>
                    handleChangeQuantity(prod, newQuantity)
                  }
                />
                <Clickable auto onClick={() => handleRemove(prod)}>
                  <Span xsmall marL={0.5}>
                    Remove
                  </Span>
                </Clickable>
              </Div>
            </Col>
            <Col col={2} colStart={10}>
              <Div justifyEnd>{getPrice(prod)}</Div>
            </Col>
          </>
        ))}
      </Row>
      <Row>
        <Col colStart={2} col={10}>
          <Div bottom col>
            <Span>
              Subtotal: <Amount value={calculateTotal()} />
            </Span>
            <StyledButton auto>
              <Span white light>
                Checkout
              </Span>
            </StyledButton>
          </Div>
        </Col>
      </Row>
    </>
  );

  return (
    <Layout>
      <Head />
      <Content>{cartView}</Content>
    </Layout>
  );
};

export default Cart;
