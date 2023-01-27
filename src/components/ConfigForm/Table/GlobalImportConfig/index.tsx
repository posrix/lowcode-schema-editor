import React from 'react';
import { Input } from 'antd';
import { ImportGlobalConfig } from 'src/types/table';
import { Container, ConfigFieldContainer, ConfigFieldTitle } from '../../styled';

export interface ConfigProps {
  globalConfig: ImportGlobalConfig;
  handleGlobalConfigChange: (config: Partial<ImportGlobalConfig>) => void;
}

const GlobalImportConfig: React.FC<ConfigProps> = ({ globalConfig, handleGlobalConfigChange }) => {
  const { uriDownload, uriImport, file, errorFile } = globalConfig;

  return (
    <Container>
      <ConfigFieldContainer>
        <ConfigFieldTitle>下载地址</ConfigFieldTitle>
        <Input
          defaultValue={uriDownload}
          onChange={(e) => handleGlobalConfigChange({ uriDownload: e.target.value })}
        />
      </ConfigFieldContainer>
      <ConfigFieldContainer>
        <ConfigFieldTitle>导入地址</ConfigFieldTitle>
        <Input
          defaultValue={uriImport}
          onChange={(e) => handleGlobalConfigChange({ uriImport: e.target.value })}
        />
      </ConfigFieldContainer>
      <ConfigFieldContainer>
        <ConfigFieldTitle>文件名</ConfigFieldTitle>
        <Input
          defaultValue={file}
          onChange={(e) => handleGlobalConfigChange({ file: e.target.value })}
        />
      </ConfigFieldContainer>
      <ConfigFieldContainer>
        <ConfigFieldTitle>错误文件名</ConfigFieldTitle>
        <Input
          defaultValue={errorFile}
          onChange={(e) => handleGlobalConfigChange({ errorFile: e.target.value })}
        />
      </ConfigFieldContainer>
    </Container>
  );
};

export default GlobalImportConfig;
