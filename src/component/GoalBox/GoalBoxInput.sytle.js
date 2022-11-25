import styled, { css } from 'styled-components';


export const Div = styled.div`
  display: flex;
  width: 6rem;
  height: 6rem;
  justify-content: center;
  background-color: white;
  align-items: center;
  cursor: text;

  span {
    width: 100%;
    max-height: 100%;

    text-align: center;
    text-orientation: center;
    cursor: text;
    font-size: 1rem;
    /* opacity: 0.7; */
    overflow: hidden;
    vertical-align: top; /* color: var(--placeholder); */

    cursor: ${({ filter }) => (filter.isMidTermTwin ? "default" : "text")};

    //수정 중일때 폰트 size & color
    color: ${({ filter }) =>
      filter.isFinal
        ? "red"
        : filter.isMidTerm || filter.isMidTermTwin
        ? css`var(--purple)`
        : filter.isShortTerm && "black"};

    font-size: ${({ filter }) =>
      filter.isFinal
        ? css`1.3rem`
        : filter.isMidTerm || filter.isMidTermTwin
        ? css`1.2rem`
        : filter.isShortTerm && css`1rem`};
    &:focus {
      outline: none;
    }

    &[contentEditable] {
      overflow-wrap: break-word;
    }

    &.placeholder[contentEditable]:empty::before {
      content: attr(data-placeholder);
      color: var(--placeholder);
      font-size: 1.125rem;
      opacity: 0.7;
    }
    //데이터 출력할때 폰트 size & color
    &.goal[contentEditable]:empty::before {
      /* content: attr(data-title); */
      color: ${({ filter }) =>
        filter.isFinal
          ? "red"
          : filter.isMidTerm || filter.isMidTermTwin
          ? css`var(--purple)`
          : filter.isShortTerm && "black"};
      font-size: ${({ filter }) =>
        filter.isFinal
          ? css`1.3rem`
          : filter.isMidTerm || filter.isMidTermTwin
          ? css`1.2rem`
          : filter.isShortTerm && css`1.1rem`};
      opacity: 1;
    }
  }
`;