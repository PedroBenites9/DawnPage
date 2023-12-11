import styled, { createGlobalStyle, css } from "styled-components";
import { marginHandler, paddingHandler, flexGrowHandler } from "./Components";

const size = {
  xs: "768px",
  md: "768px",
  lg: "1440px",
};

export const device = {
  xs: `(max-width: ${size.xs})`,
  md: `(min-width: ${size.md})`,
  lg: `(min-width: ${size.lg})`,
};

export const FONTS = {
  REGULAR: "Muli-Regular",
  LIGHT: "Muli-Light",
  BOLD: "Tajawal-Bold",
  BLACK: "Tajawal-Black",
  EXTRABOLD: "Tajawal-ExtraBold",
  EXTRALIGHT: "Tajawal-ExtraLight",
  MEDIUM: "Tajawal-Medium",
};

export const GlobalStyle = createGlobalStyle`
    html {
        font-size: 16px;
    }

    body {
        font-family: '${FONTS.REGULAR}';
        font-weight: normal;
        margin: 0;
        color: rgb(18, 18, 18);
    }    
`;

export const Row = styled.div`
  width: auto;
  display: grid;
  grid-template-rows: ${({ gridTemplateRows }) =>
    gridTemplateRows || "max-content"};
  grid-template-columns: repeat(${({ cols }) => cols || "12"}, 1fr);
  grid-auto-flow: dense;
  column-gap: ${({ columnGap }) => (columnGap ? `${columnGap}px` : "12px")};
  row-gap: ${({ rowGap }) => rowGap};
  ${paddingHandler}
  ${marginHandler}
  ${flexGrowHandler}
`;

export const Col = styled.div`
  grid-column-end: span ${({ col }) => col || "12"};
  ${({ colStart }) => colStart && `grid-column-start: ${colStart};`}
  ${({ order }) => order && `order: ${order};`}
    ${({
    xs,
    md,
    lg,
    xl,
    xsColStart,
    mdColStart,
    lgColStart,
    xlColStart,
  }) => css`
    ${xs && `@media ${device.xs} { grid-column-end: span ${xs}; }`}
    ${md && `@media ${device.md} { grid-column-end: span ${md}; }`} 
        ${lg && `@media ${device.lg} { grid-column-end: span ${lg}; }`} 
        ${xl && `@media ${device.xl} { grid-column-end: span ${xl}; }`} 
        ${xsColStart &&
    `@media ${device.xs} { grid-column-start: ${xsColStart}; }`} 
        ${mdColStart &&
    `@media ${device.md} { grid-column-start: ${mdColStart}; }`} 
        ${lgColStart &&
    `@media ${device.lg} { grid-column-start: ${lgColStart}; }`} 
        ${xlColStart &&
    `@media ${device.xl} { grid-column-start: ${xlColStart}; }`}
  `}
    ${({ flex }) => flex && "display: flex;"}
`;
