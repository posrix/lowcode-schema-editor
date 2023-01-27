import styled, { css } from 'styled-components/macro';

const FormItemActiveMixin = css`
  outline: 2px solid #409eff;
  border: 1px solid #409eff;
  outline-offset: 0;
`;

export const Container = styled.div<{ active?: boolean }>`
  border-radius: 2px;
  padding: 8px;
  transition: background-color 0.2s ease;
  border: 1px dashed hsla(0, 0%, 66.7%, 0.5);
  background-color: rgba(236, 245, 255, 0.3);
  position: relative;

  &:hover {
    background: #ecf5ff;
    outline: 1px solid #409eff;
    outline-offset: 0;
  }

  ${(props) => props.active && FormItemActiveMixin}
`;

export const CustomWidget = styled.div``;

export const DeleteContainer = styled.div<{ hide?: boolean }>`
  display: ${(props) => (props.hide ? 'none' : 'block')};
  position: absolute;
  right: 0;
  bottom: 0;
  background: #4394f7;
  padding: 2px 5px;
  border-top-left-radius: 3px;
  cursor: pointer;
`;
