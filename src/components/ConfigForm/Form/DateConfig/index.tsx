import React from 'react';
import { Input, Switch, Tooltip } from 'antd';
import FormCommonConfig from '../FormCommonConfig';
import { pick } from 'lodash';
import { FormDateWidget } from 'src/types/form';
// import moment from 'moment';
import { Container, ConfigFieldContainer, ConfigFieldTitle } from '../../styled';

export interface ConfigProps {
  activeWidget: FormDateWidget;
  handleConfigChange: (config: Partial<FormDateWidget>) => void;
}

const DateConfig: React.FC<ConfigProps> = ({ activeWidget, handleConfigChange }) => {
  const { componentProps } = activeWidget;
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
        <ConfigFieldTitle>时间格式</ConfigFieldTitle>
        <Input
          defaultValue={componentProps.format}
          onChange={(e) =>
            handleConfigChange({
              componentProps: { ...componentProps, format: e.target.value },
            })
          }
        />
      </ConfigFieldContainer>
      <ConfigFieldContainer>
        <ConfigFieldTitle>
          <Tooltip title="使用自定义提交格式数据，为空则采用默认的格式化字符串">提交格式</Tooltip>
        </ConfigFieldTitle>
        <Input
          defaultValue={componentProps.submitFormat}
          onChange={(e) =>
            handleConfigChange({
              componentProps: { ...componentProps, submitFormat: e.target.value },
            })
          }
        />
      </ConfigFieldContainer>
      <ConfigFieldContainer>
        <ConfigFieldTitle>日期时间格式(APP专用)</ConfigFieldTitle>
        <Input
          defaultValue={componentProps.dateFormat}
          onChange={(e) =>
            handleConfigChange({
              componentProps: { ...componentProps, dateFormat: e.target.value },
            })
          }
        />
      </ConfigFieldContainer>
      <ConfigFieldContainer>
        <ConfigFieldTitle>时间格式(APP专用)</ConfigFieldTitle>
        <Input
          defaultValue={componentProps.timeFormat}
          onChange={(e) =>
            handleConfigChange({
              componentProps: { ...componentProps, timeFormat: e.target.value },
            })
          }
        />
      </ConfigFieldContainer>
      <ConfigFieldContainer>
        <ConfigFieldTitle>是否显示时间</ConfigFieldTitle>
        <Switch
          defaultChecked={componentProps.showTime}
          onChange={(checked) =>
            handleConfigChange({
              componentProps: { ...componentProps, showTime: checked },
            })
          }
        />
      </ConfigFieldContainer>
      {/* <ConfigFieldContainer>
        <ConfigFieldTitle>显示时间</ConfigFieldTitle>
        <TimePicker
          defaultValue={moment(componentProps.showTime.defaultValue, 'HH:mm:ss')}
          onChange={(time) =>
            time &&
            handleConfigChange({
              componentProps: { ...componentProps, showTime: { defaultValue: time } },
            })
          }
        />
      </ConfigFieldContainer>
      <ConfigFieldContainer>
        <ConfigFieldTitle>显示现在</ConfigFieldTitle>
        <Switch
          defaultChecked={componentProps.showNow}
          onChange={(checked) =>
            handleConfigChange({
              componentProps: { ...componentProps, showNow: checked },
            })
          }
        />
      </ConfigFieldContainer> */}
    </Container>
  );
};

export default DateConfig;
