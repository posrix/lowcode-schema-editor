import styled from 'styled-components/macro';
import { darken } from 'polished';
import { LayoutMode, LayoutModeType } from 'src/types/app';

export const Wrapper = styled.div`
  // flex: 1 1 auto will cause issue when table scroll is overflow
  // Compat micro app env, consider parent app sidebar width which is 208px right now
  width: ${() => (window.__POWERED_BY_QIANKUN__ ? 'calc(100vw - 788px)' : 'calc(100vw - 588px)')};
  height: 100%;
  display: flex;
  flex-direction: column;
  border-left: 1px solid #e0e0e0;
  border-right: 1px solid #e0e0e0;
`;

export const Container = styled.div`
  padding: 22px;
  flex: 1 1 auto;
  background: #fafafa;
  overflow: auto;
`;

export const DropZone = styled.div<{ isDraggingOver?: boolean }>`
  background: #fbfbfb;
  border: 1px dashed #d9d9d9;
  min-height: 200px;
  background-color: ${({ isDraggingOver }) =>
    isDraggingOver ? darken(0.05, '#fbfbfb') : '#fbfbfb'};
  display: flex;
  flex-direction: column;
`;

export const LayoutContainer = styled.div<{ layoutMode: LayoutMode }>`
  width: ${(props) => (props.layoutMode === LayoutModeType.Pc ? 'auto' : '375px')};
  margin: 0 auto;
  box-shadow: 0 4px 12px #ebedf0;
`;

export const Column = styled.div`
  margin: 0 0 40px 0;
`;

export const Empty = styled.div<{ hide?: boolean }>`
  display: ${(props) => (props.hide ? 'none' : 'flex')};
  flex: 1 1 auto;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  color: #ccc;
`;
