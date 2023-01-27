import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Dispatch, RootState } from 'src/models/store';
import { FormWidget, FormWidgetType } from 'src/types/form';
import InputConfig from 'src/components/ConfigForm/Form/InputConfig';
import TextAreaConfig from 'src/components/ConfigForm/Form/TextAreaConfig';
import NumericalConfig from 'src/components/ConfigForm/Form/NumericalConfig';
import RadioConfig from 'src/components/ConfigForm/Form/RadioConfig';
import UploadConfig from 'src/components/ConfigForm/Form/UploadConfig';
import DateConfig from 'src/components/ConfigForm/Form/DateConfig';
import RangeConfig from 'src/components/ConfigForm/Form/RangeConfig';
import CustomConfig from 'src/components/ConfigForm/Form/CustomConfig';
import SelectConfig from 'src/components/ConfigForm/Form/SelectConfig';
import { NoneActiveContainer, NoneActiveTitle } from '../../styled';

export interface FormConfigRenderProps {
  activeFormWidget: FormWidget | null;
  formWidgets: FormWidget[];
}

const FormConfigRender: React.FC<FormConfigRenderProps> = ({ activeFormWidget, formWidgets }) => {
  const customMode = useSelector((state: RootState) => state.app.customMode);
  const dispatch = useDispatch<Dispatch>();

  const handleConfigChange = useCallback(
    (config: Partial<FormWidget>) => {
      if (activeFormWidget) {
        dispatch.widget.configWidget({ customMode: customMode!, id: activeFormWidget.id!, config });
        // Reselect active widget while widget changed
        dispatch.widget.setActiveWidget({ customMode: customMode!, id: activeFormWidget.id! });
      }
    },
    [customMode, dispatch.widget, activeFormWidget]
  );

  switch (activeFormWidget?.widgetType) {
    case FormWidgetType.Input:
    case FormWidgetType.Password:
      return (
        <InputConfig
          handleConfigChange={handleConfigChange}
          activeWidget={activeFormWidget}
          // This can force update component when select same type widget with different id
          key={activeFormWidget.id}
        />
      );
    case FormWidgetType.TextArea:
      return (
        <TextAreaConfig
          handleConfigChange={handleConfigChange}
          activeWidget={activeFormWidget}
          key={activeFormWidget.id}
        />
      );
    case FormWidgetType.Numerical:
      return (
        <NumericalConfig
          handleConfigChange={handleConfigChange}
          activeWidget={activeFormWidget}
          key={activeFormWidget.id}
        />
      );
    case FormWidgetType.Radio:
      return (
        <RadioConfig
          handleConfigChange={handleConfigChange}
          activeWidget={activeFormWidget}
          key={activeFormWidget.id}
        />
      );
    case FormWidgetType.Upload:
      return (
        <UploadConfig
          handleConfigChange={handleConfigChange}
          activeWidget={activeFormWidget}
          key={activeFormWidget.id}
        />
      );
    case FormWidgetType.Date:
      return (
        <DateConfig
          handleConfigChange={handleConfigChange}
          activeWidget={activeFormWidget}
          key={activeFormWidget.id}
        />
      );
    case FormWidgetType.Range:
      return (
        <RangeConfig
          handleConfigChange={handleConfigChange}
          activeWidget={activeFormWidget}
          key={activeFormWidget.id}
        />
      );
    case FormWidgetType.Select:
      return (
        <SelectConfig
          handleConfigChange={handleConfigChange}
          activeWidget={activeFormWidget}
          widgets={formWidgets}
          key={activeFormWidget.id}
        />
      );
    case FormWidgetType.Custom:
      return (
        <CustomConfig
          handleConfigChange={handleConfigChange}
          widgets={formWidgets}
          activeWidget={activeFormWidget}
          key={activeFormWidget.id}
        />
      );
    default:
      return (
        <NoneActiveContainer>
          <NoneActiveTitle>请选中控件</NoneActiveTitle>
        </NoneActiveContainer>
      );
  }
};

export default FormConfigRender;
