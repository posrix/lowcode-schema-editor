import styled from 'styled-components/macro';
import { Form } from 'antd';

export const Container = styled.div``;

export const ConfigFieldBlockContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const ConfigFieldContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 15px;
  gap: 5px;
`;

export const ConfigEditorContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
  gap: 5px;
  width: 100%;
`;

export const ConfigInnerFieldContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 10px;
  gap: 5px;
`;

export const ConfigFieldTitle = styled.div`
  font-size: 14px;
  font-weight: 400;
  color: #000000;
`;

export const ConfigFormItem = styled(Form.Item)`
  margin: 0 !important;
`;

export const ErrorText = styled.div<{ show: boolean }>`
  color: #ff4d4f;
  font-size: 14px;
  display: ${(props) => (props.show ? 'block' : 'none')};
`;
