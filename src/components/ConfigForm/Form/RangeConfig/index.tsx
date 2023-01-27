import React from 'react';
import { Input, Switch } from 'antd';
import { FormRangeWidget } from 'src/types/form';
import FormCommonConfig from '../FormCommonConfig';
import { pick } from 'lodash';
// import produce from 'immer';
// import moment from 'moment';
import { Container, ConfigFieldContainer, ConfigFieldTitle } from '../../styled';

export interface ConfigProps {
  activeWidget: FormRangeWidget;
  handleConfigChange: (config: Partial<FormRangeWidget>) => void;
}

const RangeConfig: React.FC<ConfigProps> = ({ activeWidget, handleConfigChange }) => {
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
          defaultValue={moment(componentProps.showTime.defaultValue[0], 'HH:mm:ss')}
          onChange={(time) =>
            time &&
            handleConfigChange({
              componentProps: produce(componentProps, (draftState) => {
                draftState.showTime.defaultValue[0] = time;
              }),
            })
          }
        />
        <TimePicker
          defaultValue={moment(componentProps.showTime.defaultValue[1], 'HH:mm:ss')}
          onChange={(time) =>
            time &&
            handleConfigChange({
              componentProps: produce(componentProps, (draftState) => {
                draftState.showTime.defaultValue[1] = time;
              }),
            })
          }
        />
      </ConfigFieldContainer> */}
    </Container>
  );
};

export default RangeConfig;
