import styled from 'styled-components/macro';

export const Wrapper = styled.div`
  width: 280px;
  background: #fff;
  display: flex;
  flex-direction: column;
`;

export const Container = styled.div`
  padding: 15px 15px 8px 15px;
`;

export const NoneActiveContainer = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

export const NoneActiveTitle = styled.div`
  color: #ccc;
  font-size: 20px;
`;
