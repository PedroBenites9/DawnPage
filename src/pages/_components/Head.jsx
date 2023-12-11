import { productCategories } from "data";
import { Div, Span, Clickable } from "pages/layout/components/Components";
import React from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";
import { selectors } from "reducer/cart";
import { ROUTES } from "routes/ApplicationRoutes";
import styled from "styled-components";

const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background: white;
  border-bottom: 1px solid rgb(18, 18, 18, 0.08);
  z-index: 1;
`;

const StyledShippingDiv = styled(Div)`
  border-bottom: 1px solid rgb(18, 18, 18, 0.08);
`;

const StyledItemSpan = styled(Span)`
  :hover {
    color: #252525;
    transform: scale(1.05);
    text-decoration: underline;
  }
  transition: all 0.15s;
`;

const StyledCartCountSpan = styled(Span)`
  background-color: black;
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: 0;
  top: 0;
`;

const MenuItem = ({ onClick, label }) => {
  return (
    <Clickable onClick={onClick}>
      <Div marH1>
        <StyledItemSpan small gray>
          {label}
        </StyledItemSpan>
      </Div>
    </Clickable>
  );
};

const Logo = styled.img.attrs({
  src: "https://cdn.shopify.com/s/files/1/0551/7626/5784/files/DAWN-logo_90x.png?v=1628776866",
})`
  margin-right: 1rem;
`;

const Head = () => {
  const history = useHistory();
  const cartCount = useSelector(selectors.getCartCount);

  return (
    <StyledHeader>
      <Div col auto>
        <StyledShippingDiv justifyCenter padH={2} padV1>
          <Span light center small>
            Free shipping available on all orders!.
          </Span>
        </StyledShippingDiv>
        <Div pad={2} justifyBetween auto>
          <Div auto center>
            <Logo />
            <MenuItem
              label="bags"
              onClick={() =>
                history.push(ROUTES.shop, { category: productCategories.bags })
              }
            />
            <MenuItem
              label="shoes"
              onClick={() =>
                history.push(ROUTES.shop, { category: productCategories.bags })
              }
            />
            <MenuItem label="lookbook" />
          </Div>
          <Clickable onClick={() => history.push(ROUTES.cart)}>
            <Div pad={0.5}>
              <img src="https://img.icons8.com/material-outlined/24/000000/shopping-cart--v1.png" />
              <StyledCartCountSpan white center xxsmall>
                {cartCount}
              </StyledCartCountSpan>
            </Div>
          </Clickable>
          {/*<img src="https://img.icons8.com/material-outlined/24/000000/buy.png"/>*/}
        </Div>
      </Div>
    </StyledHeader>
  );
};

export default Head;
