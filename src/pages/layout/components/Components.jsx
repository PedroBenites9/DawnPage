// @ts-nocheck
import styled, { css } from "styled-components";
import { FONTS } from "./styles";

const size = {
  mobileS: "320px",
  mobileM: "375px",
  mobileL: "425px",
  tablet: "768px",
  laptop: "1024px",
  laptopL: "1440px",
  desktop: "2560px",
};

export const device = {
  mobileS: `(min-width: ${size.mobileS})`,
  mobileM: `(min-width: ${size.mobileM})`,
  mobileL: `(min-width: ${size.mobileL})`,
  tablet: `(min-width: ${size.tablet})`,
  laptop: `(min-width: ${size.laptop})`,
  laptopL: `(min-width: ${size.laptopL})`,
  desktop: `(min-width: ${size.desktop})`,
  desktopL: `(min-width: ${size.desktop})`,
};

const fontWeight = ({ bold, light }) => {
  return (bold && FONTS.BOLD) || (light && FONTS.LIGHT) || FONTS.REGULAR;
};

const flexDirection = ({ row }) => {
  return (row && "row") || "column";
};

const justifyContent = ({ center, end, spaceBetween, spaceAround }) => {
  return (
    (center && "center") ||
    (end && "flex-end") ||
    (spaceBetween && "space-between") ||
    (spaceAround && "space-around") ||
    "flex-start"
  );
};

export function marginHandler({
  mar0,
  mar1,
  mar,
  marH1,
  marH0,
  marH,
  marV1,
  marV0,
  marV,
  marL0,
  marL1,
  marL,
  marR0,
  marR1,
  marR,
  marT0,
  marT1,
  marT,
  marB0,
  marB1,
  marB,
}) {
  let result = "";
  result +=
    (mar0 && "margin: 0;") ||
    (mar1 && "margin: 1rem;") ||
    (mar && `margin: ${mar}rem;`) ||
    "margin: 0rem;";
  if (marH0 || marH1 || marH) {
    const marginQuantity =
      (marH0 && "0") || (marH1 && "1rem;") || `${marH}rem;`;
    result += `
            margin-left: ${marginQuantity};
            margin-right: ${marginQuantity};
        `;
  }
  if (marV0 || marV1 || marV) {
    const marginQuantity =
      (marV0 && "0") || (marV1 && "1rem;") || `${marV}rem;`;
    result += `
            margin-top: ${marginQuantity};
            margin-bottom: ${marginQuantity};
        `;
  }
  result +=
    (marL0 && `margin-left: 0;`) ||
    (marL1 && `margin-left: 1rem;`) ||
    (marL && `margin-left: ${marL}rem;`) ||
    "";
  result +=
    (marR0 && `margin-right: 0;`) ||
    (marR1 && `margin-right: 1rem;`) ||
    (marR && `margin-right: ${marR}rem;`) ||
    "";
  result +=
    (marT0 && `margin-top: 0;`) ||
    (marT1 && `margin-top: 1rem;`) ||
    (marT && `margin-top: ${marT}rem;`) ||
    "";
  result +=
    (marB0 && `margin-bottom: 0;`) ||
    (marB1 && `margin-bottom: 1rem;`) ||
    (marB && `margin-bottom: ${marB}rem;`) ||
    "";

  return result;
}

export function paddingHandler({
  pad0,
  pad1,
  pad,
  padH1,
  padH0,
  padH,
  padV1,
  padV0,
  padV,
  padL0,
  padL1,
  padL,
  padR0,
  padR1,
  padR,
  padT0,
  padT1,
  padT,
  padB0,
  padB1,
  padB,
}) {
  let result = "";
  result +=
    (pad0 && "padding: 0;") ||
    (pad1 && "padding: 1rem;") ||
    (pad && `padding: ${pad}rem;`) ||
    "";
  if (padH0 || padH1 || padH) {
    const paddingQuantity =
      (padH0 && "0") || (padH1 && "1rem;") || `${padH}rem;`;
    result += `
            padding-left: ${paddingQuantity};
            padding-right: ${paddingQuantity};
        `;
  }
  if (padV0 || padV1 || padV) {
    const paddingQuantity =
      (padV0 && "0") || (padV1 && "1rem;") || `${padV}rem;`;
    result += `
            padding-top: ${paddingQuantity};
            padding-bottom: ${paddingQuantity};
        `;
  }
  result +=
    (padL0 && `padding-left: 0;`) ||
    (padL1 && `padding-left: 1rem;`) ||
    (padL && `padding-left: ${padL}rem;`) ||
    "";
  result +=
    (padR0 && `padding-right: 0;`) ||
    (padR1 && `padding-right: 1rem;`) ||
    (padR && `padding-right: ${padR}rem;`) ||
    "";
  result +=
    (padT0 && `padding-top: 0;`) ||
    (padT1 && `padding-top: 1rem;`) ||
    (padT && `padding-top: ${padT}rem;`) ||
    "";
  result +=
    (padB0 && `padding-bottom: 0;`) ||
    (padB1 && `padding-bottom: 1rem;`) ||
    (padB && `padding-bottom: ${padB}rem;`) ||
    "";

  return result;
}

export const FlexContainer = styled.div`
  display: flex;
  flex-direction: ${flexDirection};
  justify-content: ${justifyContent} ${marginHandler};
`;

function textTransformHandler({ upper }) {
  return (upper && "uppercase") || "initial";
}

function fontStyleHandler({ italic }) {
  return (italic && "italic") || "initial";
}

export function whitespaceHandler({
  whiteSpaceNormal,
  whiteSpaceNoWrap,
  whiteSpacePreLine,
  whiteSpacePreWrap,
}) {
  return (
    (whiteSpaceNormal && "white-space: normal;") ||
    (whiteSpaceNoWrap && "white-space: nowrap;") ||
    (whiteSpacePreLine && "white-space: pre-line;") ||
    (whiteSpacePreWrap && "white-space: pre-wrap;")
  );
}

export function colorHandler({
  gray,
  accent,
  white,
  accentDark,
  green,
  black,
  theme,
}) {
  return (
    (gray && "#767676") ||
    (accent && theme.primaryColor) ||
    (white && "white") ||
    (accentDark && theme.primaryColorDark) ||
    (green && theme.greenColor) ||
    (black && theme.blackColor) ||
    "#252525"
  );
}

export function textAlignmentHandler({ center, right }) {
  return (center && "center") || (right && "right") || "left";
}

function fontFamilyHandler({ light, bold, boldTwo, thin, medium, theme }) {
  return (
    (light && theme.fontFamilyLight) ||
    (bold && theme.fontFamilyBold) ||
    (boldTwo && theme.fontFamilyBoldTwo) ||
    (thin && theme.fontFamilyThin) ||
    (medium && theme.fontFamilyMedium) ||
    theme.fontFamilyRegular
  );
}

function borderBottomHandler({ borderBottom, theme }) {
  return borderBottom && `border-bottom: 2px solid ${theme.fontColor};`;
}

export function fontSizeHandler({
  small,
  xsmall,
  xxsmall,
  xmedium,
  large,
  table,
  size,
}) {
  return (
    (small && 0.875) ||
    (xsmall && 0.75) ||
    (xxsmall && 0.625) ||
    (xmedium && 1.2) ||
    (table && 0.8125) ||
    (large && 1.25) ||
    size ||
    1
  );
}

function wordBreakHandler({ breakWord, breakAll, breakNormal }) {
  return (
    (breakWord && "word-break: break-word;") ||
    (breakAll && "word-break: break-all;") ||
    (breakNormal && "word-break: normal;")
  );
}

export function lineHeightHandler({ lineHeight1, lineHeight }) {
  return (
    (lineHeight1 && "line-height: 1;") ||
    (lineHeight && `line-height: ${lineHeight};`)
  );
}

function ellipsisHandler({ ellipsis }) {
  return (
    ellipsis &&
    `
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        max-width: 220px;
        `
  );
}

function textDecorationHandler({ underline }) {
  return underline && "text-decoration: underline;";
}

const Text = css`
  font-family: ${fontWeight};
  color: ${colorHandler};
  text-align: ${textAlignmentHandler};
  text-transform: ${textTransformHandler};
  font-size: ${(props) =>
    `${props.sizeInherit ? "inherit" : fontSizeHandler(props)}rem`};
  ${marginHandler}
  ${paddingHandler}
    ${wordBreakHandler}
    ${whitespaceHandler}
    ${lineHeightHandler}
    ${textDecorationHandler}
`;

export const P = styled.p`
  ${Text}
  font-style: ${fontStyleHandler};
  ${borderBottomHandler}
  ${ellipsisHandler}
    display: block;
`;

export const Span = styled.span`
  ${Text}
  display: inline;
`;

export const Label = styled.label`
  ${Text}
  display: inline;
`;

export const H1 = styled.h1`
  ${Text}
  font-size: ${({ theme }) => `${theme.fontReferenceSize * 1.5}rem`};
`;

export const H2 = styled.h2`
  font-size: ${({ theme }) => `${theme.fontReferenceSize * 1.25}rem`};
  ${Text}
`;

export function justifyContentHandler({
  contentType,
  justifyCenter,
  justifyStart,
  justifyEnd,
  justifyBetween,
}) {
  const justify =
    (justifyCenter && "center") ||
    (justifyStart && "flex-start") ||
    (justifyEnd && "flex-end") ||
    (justifyBetween && "space-between") ||
    (contentType && `${contentType}`) ||
    "normal";
  return `justify-content: ${justify};`;
}

function alignItemsDivHandler({ center, bottom, baseLine, alignStart }) {
  return (
    (center && "align-items: center;") ||
    (bottom && "align-items: flex-end;") ||
    (baseLine && "align-items: baseline;") ||
    (alignStart && "align-items: flex-start;")
  );
}

function flexDirectionHandler({ col, flexCol, row, flexRow }) {
  return (
    ((col || flexCol) && "flex-direction: column;") ||
    ((row || flexRow) && "flex-direction: row;")
  );
}

function widthDivHandler({ auto, fitContent, minContent }) {
  return (
    (auto && "width: auto;") ||
    (fitContent && "width: fit-content;") ||
    (minContent && "width: min-content;") ||
    "width: 100%;"
  );
}

function backgroundHandler({ grayBg, whiteBg, grayDarkBg, theme }) {
  return (
    (grayBg && `background: ${theme.grayColorLight};`) ||
    (whiteBg && `background: ${theme.whiteColor};`) ||
    (grayDarkBg && `background: ${theme.grayColor};`) ||
    ""
  );
}

export function flexGrowHandler({ grow }) {
  return grow && `flex-grow: ${grow};`;
}

function heightDivHandler({ h100 }) {
  return h100 && "height: 100%;";
}

export const Div = styled.div.attrs(({ onClick, tabIndex }) => ({
  tabIndex: tabIndex || (onClick ? 0 : -1),
}))`
  ${justifyContentHandler};
  ${paddingHandler}
  ${marginHandler}
    ${flexDirectionHandler}
    ${alignItemsDivHandler}
    ${widthDivHandler}
    ${backgroundHandler}
    ${lineHeightHandler}
    ${flexGrowHandler}
    ${heightDivHandler}
    position: relative;
  display: flex;
`;

export const Layout = styled.main`
  height: calc(100vh - 8.625rem);
  width: 100%;
  position: relative;
  padding-top: 8.625rem;
  display: flex;
  flex-direction: column;
`;

export const Content = styled.div`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
`;

export const Footer = styled.footer`
  border-top: 1px solid rgb(18, 18, 18, 0.08);
  padding-top: 2rem;
  padding-bottom: 1rem;
  margin-top: 3rem;
`;

export const Clickable = styled.button`
  background: transparent;
  padding: 0;
  border: none;
  width: inherit;
  heigth: inherit;
  ${({ w100, auto, fitContent }) =>
    (w100 && "width: 100%;") ||
    (auto && "width: auto;") ||
    (fitContent && "width: fit-content;")}
  ${heightDivHandler}
  ${marginHandler}
`;
