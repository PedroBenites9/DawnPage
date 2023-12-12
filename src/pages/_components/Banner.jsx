import { Div, Span } from "pages/layout/components/Components";
import React from "react";
import { useHistory } from "react-router";
import { ROUTES } from "routes/ApplicationRoutes";
import styled from "styled-components";

const StyledBanner = styled.section`
  ::before {
    background: url("https://www.dooney.com/on/demandware.static/-/Sites-dooney_us-Library/default/dw8779fbfc/images/homepage/carousel/HomeSlide_FanFavorites_Desktop_8L1076_10992.jpg");
    height: 100%;
    width: 100%;
    background-repeat: no-repeat;
    background-size: cover;
    position: absolute;
    top: 0;
    left: 0;
    content: " ";
    filter: brightness(0.6);
  }
  position: relative;
  height: 80vh;
  width: 100%;
  display: grid;
  justify-content: center;
  align-content: center;
`;

const BannerContent = styled(Div)`
  max-width: 30rem;
`;

const ShopButton = styled.button`
  background: transparent;
  border: 2px solid white;
  padding: 1rem 2rem;
  cursor: pointer;

  :hover {
    transform: scale(1.1);
  }

  transition: all .25s;
`;

const Banner = () => {
  let history = useHistory();
  return (
    <StyledBanner>
      <BannerContent col center>
        <Span white size={3.5} light center marB1>
          Industrial design meets fashion.
        </Span>
        <ShopButton onClick={() => history.push(ROUTES.shop)}>
          <Span white light>
            Shop
          </Span>
        </ShopButton>
      </BannerContent>
    </StyledBanner>
  );
};

export default Banner;
