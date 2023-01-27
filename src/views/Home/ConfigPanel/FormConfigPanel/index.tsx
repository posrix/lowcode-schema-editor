import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, Dispatch } from 'src/models/store';
import { FormGlobalConfig } from 'src/types/form';
import { Tabs } from 'antd';
import FormConfigRender from './FormConfigRender';
import GlobalFormConfig from 'src/components/ConfigForm/Form/GlobalFormConfig';
import { Container } from '../styled';

const FormConfigPanel: React.FC = () => {
  const { activeFormWidget, formWidgets, formGlobalConfig } = useSelector((state: RootState) => ({
    activeFormWidget: state.widget.activeFormWidget,
    formWidgets: state.widget.formWidgets,
    formGlobalConfig: state.widget.formGlobalConfig,
  }));
  const dispatch = useDispatch<Dispatch>();

  const handleGlobalConfigChange = useCallback(
    (config: Partial<FormGlobalConfig>) => {
      dispatch.widget.configFormGlobal({ config });
    },
    [dispatch.widget]
  );

  return (
    <Tabs defaultActiveKey="1" centered>
      <Tabs.TabPane tab="控件配置" key="1">
        <Container>
          <FormConfigRender activeFormWidget={activeFormWidget} formWidgets={formWidgets} />
        </Container>
      </Tabs.TabPane>
      <Tabs.TabPane tab="全局配置" key="2">
        <Container>
          <GlobalFormConfig
            widgets={formWidgets}
            globalConfig={formGlobalConfig}
            handleGlobalConfigChange={handleGlobalConfigChange}
          />
        </Container>
      </Tabs.TabPane>
    </Tabs>
  );
};

export default FormConfigPanel;
