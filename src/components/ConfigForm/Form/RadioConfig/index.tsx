import React from 'react';
import { FormWidget, FormRadioWidget } from 'src/types/form';
import FormCommonConfig from '../FormCommonConfig';
import { pick } from 'lodash';
import { Container } from '../../styled';

export interface ConfigProps {
  activeWidget: FormRadioWidget;
  handleConfigChange: (config: Partial<FormWidget>) => void;
}

const RadioConfig: React.FC<ConfigProps> = ({ activeWidget, handleConfigChange }) => {
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
    </Container>
  );
};

export default RadioConfig;
