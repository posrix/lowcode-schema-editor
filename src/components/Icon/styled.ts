import styled from 'styled-components/macro';
import { darken } from 'polished';
import { IconProps } from './';

export const DEFAULT_ICON_COLOR = '#333333';
export const DARKEN_RATIO = 0.05;

export const InlineSvg = styled.svg<Pick<IconProps, 'color'>>`
  position: absolute;
  inset: 0;
  height: 100%;
  width: 100%;
  color: ${(props) => (props.color ? props.color : DEFAULT_ICON_COLOR)};
  fill: currentColor;

  &:hover {
    color: ${(props) =>
      props.color ? darken(DARKEN_RATIO, props.color) : darken(DARKEN_RATIO, DEFAULT_ICON_COLOR)};
  }
`;

export const SvgWrapper = styled.div<Pick<IconProps, 'height' | 'width'>>`
  display: inline-block;
  vertical-align: middle;
  width: ${(props) => (props.width ? `${props.width}px` : '30px')};
  height: ${(props) => (props.height ? `${props.height}px` : '30px')};
  position: relative;
  cursor: pointer;
`;
