import React from 'react';
import { Input } from 'antd';
import { ExportGlobalConfig } from 'src/types/table';
import { Container, ConfigFieldContainer, ConfigFieldTitle } from '../../styled';

export interface ConfigProps {
  globalConfig: ExportGlobalConfig;
  handleGlobalConfigChange: (config: Partial<ExportGlobalConfig>) => void;
}

const GlobalExportConfig: React.FC<ConfigProps> = ({ globalConfig, handleGlobalConfigChange }) => {
  const { uri, file } = globalConfig;

  return (
    <Container>
      <ConfigFieldContainer>
        <ConfigFieldTitle>请求地址</ConfigFieldTitle>
        <Input
          defaultValue={uri}
          onChange={(e) => handleGlobalConfigChange({ uri: e.target.value })}
        />
      </ConfigFieldContainer>
      <ConfigFieldContainer>
        <ConfigFieldTitle> 文件</ConfigFieldTitle>
        <Input
          defaultValue={file}
          onChange={(e) => handleGlobalConfigChange({ file: e.target.value })}
        />
      </ConfigFieldContainer>
    </Container>
  );
};

export default GlobalExportConfig;
