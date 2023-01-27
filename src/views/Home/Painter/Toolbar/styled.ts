import styled from 'styled-components/macro';

export const Container = styled.div`
  padding: 6px 22px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #fff;
  border-bottom: 1px solid #e4e7ed;
`;

export const ActionButtonContainer = styled.div`
  display: flex;
  gap: 5px;
`;

export const LayoutButtonContainer = styled.div`
  display: flex;
  gap: 5px;
`;

export const LayoutButton = styled.div<{ active: boolean }>`
  background: ${(props) => (props.active ? '#e4e7ed' : '#fff')};
  padding: 2px 5px;
  border-radius: 3px;
  cursor: pointer;
`;
