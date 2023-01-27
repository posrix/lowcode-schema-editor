import styled from 'styled-components/macro';
import { InnerScrollMixin } from 'src/components/theme/layout';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 23px;
  padding: 16px;
  width: 280px;
  background: #fff;
  user-select: none;

  ${InnerScrollMixin}
`;
