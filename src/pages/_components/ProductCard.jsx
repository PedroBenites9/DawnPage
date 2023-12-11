import Amount from "pages/layout/components/Amount";
import { Clickable, Div, Span } from "pages/layout/components/Components";
import { Col } from "pages/layout/components/styles";
import React from "react";
import { useHistory } from "react-router";
import { calculateRouteParams, ROUTES } from "routes/ApplicationRoutes";
import styled from "styled-components";
import { css } from "styled-components";

const ProductImage = styled.div`
  height: 23rem;
  width: 100%;
  background-image: url(${({ img }) => img});
  background-color: rgb(243, 243, 243);

  background-repeat: no-repeat;
  background-position: center;

  position: relative;
  `;

export const saleContainerGeneralStyle = css`
  background: #33b453;
  padding: 0.25rem 1rem;
  border-radius: 2rem;
`;

const SaleContainer = styled.div`
  position: absolute;
  top: 0.5rem;
  left: 0.5rem;
  ${saleContainerGeneralStyle}
`;

export const OldPrice = styled(Span)`
  text-decoration: line-through;
`;

const ProductCard = ({ name, price, offerPrice, img, hoverImg, id, cols }) => {
  const history = useHistory();
  const inOffer = offerPrice && offerPrice < price;
  return (
    <Col col={cols || 3}>
      <Clickable
        onClick={() =>
          history.push(calculateRouteParams(ROUTES.detail, { id }))
        }
        w100
      >
        <Div col>
          <ProductImage img={img} hoverImg={hoverImg}>
            {" "}
            {!inOffer && (
              <SaleContainer>
                <Span white xsmall>
                  Sale
                </Span>
              </SaleContainer>
            )}
          </ProductImage>
          <Span small marT1 gray>
            {name}
          </Span>
          {inOffer ? (
            <Div center>
              <OldPrice>
                <Amount value={offerPrice} />
              </OldPrice>
              <Span marL={0.25} light>
                <Amount value={price} />
              </Span>
            </Div>
          ) : (
            <Span light>
              <Amount value={price} />
            </Span>
          )}
        </Div>
      </Clickable>
    </Col>
  );
};

export default ProductCard;
