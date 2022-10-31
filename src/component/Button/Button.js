import styled, { css } from "styled-components";
const ButtonWrapper = styled.button`
  width: 10rem;
  height: 2.5rem;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid var(--gray);
  font-weight: 500;
  color: var(--orange);
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }

  &:not(:first-child) {
    margin-left: ${({ row }) => (row ? css`1rem` : css``)};
    margin-top: ${({ row }) => (row ? css`` : css`1rem`)};
  }
`;
const Button = ({ onClick, children, row }) => {
  return (
    <ButtonWrapper onClick={onClick} row={row}>
      {children}
    </ButtonWrapper>
  );
};

export default Button;
