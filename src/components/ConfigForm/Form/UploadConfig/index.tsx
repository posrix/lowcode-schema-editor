import React from 'react';
import { Input, InputNumber, Select } from 'antd';
import { FormWidget, FormUploadWidget } from 'src/types/form';
import { FormSchemaType } from 'src/types/app';
import FormCommonConfig from '../FormCommonConfig';
import { pick } from 'lodash';
import { Container, ConfigFieldContainer, ConfigFieldTitle } from '../../styled';

export interface ConfigProps {
  activeWidget: FormUploadWidget;
  handleConfigChange: (config: Partial<FormWidget>) => void;
}

const UploadConfig: React.FC<ConfigProps> = ({ activeWidget, handleConfigChange }) => {
  const { componentProps, type } = activeWidget;

  return (
    <Container>
      <FormCommonConfig
        commonProps={pick(activeWidget, [
          'name',
          'title',
          'description',
          'required',
          'userCreated',
          'hidden',
          'useInteractive',
          'query',
        ])}
        handleConfigChange={handleConfigChange}
      />
      <ConfigFieldContainer>
        <ConfigFieldTitle>上传文案</ConfigFieldTitle>
        <Input
          defaultValue={componentProps.uploadText}
          onChange={(e) =>
            handleConfigChange({
              componentProps: { ...componentProps, uploadText: e.target.value },
            })
          }
        />
      </ConfigFieldContainer>
      <ConfigFieldContainer>
        <ConfigFieldTitle>最大上传数量</ConfigFieldTitle>
        <InputNumber
          defaultValue={componentProps.maxCount}
          onChange={(value) =>
            handleConfigChange({
              componentProps: { ...componentProps, maxCount: value },
            })
          }
        />
      </ConfigFieldContainer>
      <ConfigFieldContainer>
        <ConfigFieldTitle>上传类型</ConfigFieldTitle>
        <Select
          style={{ width: 220 }}
          defaultValue={type}
          onChange={(value) =>
            handleConfigChange({
              type: value,
            })
          }
        >
          <Select.Option value={FormSchemaType.ImageList}>图片</Select.Option>
          <Select.Option value={FormSchemaType.VideoList}>视频</Select.Option>
          <Select.Option value={FormSchemaType.DocumentList}>文档</Select.Option>
        </Select>
      </ConfigFieldContainer>
      <ConfigFieldContainer>
        <ConfigFieldTitle>上传样式</ConfigFieldTitle>
        <Select
          style={{ width: 220 }}
          defaultValue={componentProps.contentType}
          onChange={(value) =>
            handleConfigChange({
              componentProps: { ...componentProps, contentType: value },
            })
          }
        >
          <Select.Option value="text">text</Select.Option>
          <Select.Option value="picture">picture</Select.Option>
          <Select.Option value="picture-card">picture-card</Select.Option>
        </Select>
      </ConfigFieldContainer>
    </Container>
  );
};

export default UploadConfig;
