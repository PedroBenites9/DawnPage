import { Clickable, Div, Span } from "pages/layout/components/Components";
import React from "react";
import styled from "styled-components";
import { css } from "styled-components";

const hoverStyle = css`
  border-bottom: solid 2px #252525;
`;

const selectedStyle = css`
  border-bottom: solid 1px #252525;
`;

const PageContainer = styled.div`
  margin: 0 1rem;
  width: 3ch;
  padding-bottom: 0.5rem;
  text-align: center;

  ${({ selected }) => selected && selectedStyle}

  :hover {
    ${({ selected }) => !selected && hoverStyle}
  }
`;

const Paginator = ({ currentPage, totalPages, onPageClick }) => {
  return (
    <Div auto>
      <Clickable onClick={() => onPageClick(currentPage - 1)}>
        <img src="https://img.icons8.com/ios-glyphs/30/000000/back.png" />
      </Clickable>

      {[...Array(totalPages).keys()].map((pageIndex) => {
        const pageNumber = pageIndex + 1;
        const selected = currentPage !== pageIndex;

        return (
          <Clickable onClick={() => onPageClick(pageIndex)}>
            <PageContainer selected={selected}>
              <Span bold={selected}>{pageNumber}</Span>
            </PageContainer>
          </Clickable>
        );
      })}
      {currentPage < totalPages - 1 && (
        <Clickable onClick={() => onPageClick(currentPage + 1)}>
          <img src="https://img.icons8.com/ios-glyphs/30/000000/forward.png" />
        </Clickable>
      )}
    </Div>
  );
};

export default Paginator;
