import { useCallback, useEffect } from 'react';
// import { ModalInner, ModalWrapper } from './index.styles';
import styled, { css } from 'styled-components';

const ModalWrapper = styled.div`
  transition: opacity 300ms ease;
  ${(props) =>
    !props.isOpen
      ? css`
          opacity: 0;
          pointer-events: none;
        `
      : css`
          opacity: 1;
        `}
  width: 100%;
  height: auto;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(3px);
  transition: all 0.3s ease-in-out;
  z-index: 11;
`;

const ModalInner = styled.div`
  transition: transform 300ms ease;
  ${(props) =>
    !props.isOpen
      ? css`
          transform: scale(0.8);
          /* transform: rotate(1080deg); */
        `
      : css`
          transform: scale(1);
          /* transform: rotate(0deg); */
        `}

  width: calc(100% - 2rem);
  height: calc(100% - 2rem);
  max-width: 35rem;
  max-height: 35rem;
  object-fit: contain;
  overflow: auto;
  background: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;
function Modal({ children, isOpen, onClickModal, onPressEsc }) {
  const keyDown = useCallback(
    (e) => {
      if (e.key === 'Escape') {
        onPressEsc();
      }
    },
    [onPressEsc]
  );

  useEffect(() => {
    document.addEventListener('keydown', keyDown);
    return () => document.removeEventListener('keydown', keyDown);
  }, [keyDown]);

  const onClick = (/** @type {MouseEvent} */ e) => {
    if (e.target === e.currentTarget) {
      onClickModal();
    }
  };

  return (
    <ModalWrapper onClick={onClick} isOpen={isOpen}>
      <ModalInner isOpen={isOpen}>{children}</ModalInner>
    </ModalWrapper>
  );
}

export default Modal;
