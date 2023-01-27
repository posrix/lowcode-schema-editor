import styled, { css } from 'styled-components/macro';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const WidgetTagContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

export const WidetTagHoverMixin = css`
  color: #409eff;
  border: 1px dashed #409eff;
`;

export const WidgetTagNoIconMixin = css`
  align-items: center;
  justify-content: center;
`;

export const WidgetTagHasIconMixin = css`
  align-items: center;
  padding-left: 12px;
`;

export const WidgetTag = styled.div<{ isDragging?: boolean; noIcon?: boolean }>`
  width: 120px;
  height: 38px;
  background: #f2f4fb;
  border-radius: 3px;
  border-radius: 2px;
  font-size: 13px;
  font-weight: 400;
  color: rgba(0, 0, 0, 0.85);
  display: flex;
  gap: 8px;

  ${(props) => (props.noIcon ? WidgetTagNoIconMixin : WidgetTagHasIconMixin)}

  ${(props) => props.isDragging && WidetTagHoverMixin}
  &:hover {
    ${WidetTagHoverMixin}
  }
`;

export const Title = styled.div`
  font-size: 18px;
  font-weight: 500;
  color: rgba(0, 0, 0, 0.85);
  margin-bottom: 13px;
`;

export const IgnorePlaceholder = styled.span`
  display: none;
`;
