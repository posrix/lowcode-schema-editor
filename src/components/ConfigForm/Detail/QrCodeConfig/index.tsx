import React from 'react';
import { Button } from 'antd';
import { DetailQrCodetWidget } from 'src/types/detail';
import { useDispatch } from 'react-redux';
import { Dispatch } from 'src/models/store';
import DetailCommonConfig from '../DetailCommonConfig';
import { pick } from 'lodash';
import { Container, ConfigFieldTitle, ConfigEditorContainer } from '../../styled';

export interface ConfigProps {
  activeWidget: DetailQrCodetWidget;
  handleConfigChange: (config: Partial<DetailQrCodetWidget>) => void;
}

const QrCodeConfig: React.FC<ConfigProps> = ({ activeWidget, handleConfigChange }) => {
  const { appearance } = activeWidget;

  const dispatch = useDispatch<Dispatch>();

  return (
    <Container>
      <DetailCommonConfig
        commonProps={pick(activeWidget, ['name', 'title', 'hidden'])}
        handleConfigChange={handleConfigChange}
      />
      <ConfigEditorContainer>
        <ConfigFieldTitle>外观</ConfigFieldTitle>
        <Button
          onClick={() =>
            dispatch.app.activeEditorModal({
              title: '外观',
              jsonObject: appearance,
              handleChangeCallback: (parsedJsonObject) =>
                handleConfigChange({ appearance: parsedJsonObject }),
            })
          }
        >
          编辑
        </Button>
      </ConfigEditorContainer>
    </Container>
  );
};

export default QrCodeConfig;
