import { css } from 'styled-components';

export const InnerScrollMixin = css`
  overflow-y: overlay;
  overflow-x: hidden;
  position: relative;

  &::-webkit-scrollbar {
    width: 12px;
    height: 12px;
    bottom: 0;
    left: 0;
    position: absolute;
    top: 0;
    right: 0;
  }
  &::-webkit-scrollbar-button {
    display: none;
    height: 0;
    width: 0;
  }
  &::-webkit-scrollbar-thumb {
    background-color: hsla(0, 0%, 0%, 0.2);
    background-clip: padding-box;
    border: 2px solid rgba(0, 0, 0, 0);
    border-radius: 6px;
    min-height: 15px;
  }
  &::-webkit-scrollbar-thumb:hover {
    background-color: hsla(0, 0%, 0%, 0.35);
  }
`;
