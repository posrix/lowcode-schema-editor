import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, Dispatch } from 'src/models/store';
import { Tabs } from 'antd';
import { DetailWidget, DetailGlobalConfig, DetailWidgetType } from 'src/types/detail';
import GlobalDetailConfig from 'src/components/ConfigForm/Detail/GlobalDetailConfig';
import LabelConfig from 'src/components/ConfigForm/Detail/LabelConfig';
import QrCodeConfig from 'src/components/ConfigForm/Detail/QrCodeConfig';
import { Container, NoneActiveContainer, NoneActiveTitle } from '../styled';

const DetailConfigPanel: React.FC = () => {
  const { customMode, activeDetailWidget, detailGlobalConfig, detailWidgets } = useSelector(
    (state: RootState) => ({
      customMode: state.app.customMode,
      activeDetailWidget: state.widget.activeDetailWidget,
      detailGlobalConfig: state.widget.detailGlobalConfig,
      detailWidgets: state.widget.detailWidgets,
    })
  );
  const dispatch = useDispatch<Dispatch>();

  const handleConfigChange = useCallback(
    (config: Partial<DetailWidget>) => {
      if (activeDetailWidget) {
        dispatch.widget.configWidget({
          customMode: customMode!,
          id: activeDetailWidget.id!,
          config,
        });
        // Reselect active widget while widget changed
        dispatch.widget.setActiveWidget({ customMode: customMode!, id: activeDetailWidget.id! });
      }
    },
    [customMode, dispatch.widget, activeDetailWidget]
  );

  const handleGlobalConfigChange = useCallback(
    (config: Partial<DetailGlobalConfig>) => {
      dispatch.widget.configDetailGlobal({ config });
    },
    [dispatch.widget]
  );

  return (
    <Tabs defaultActiveKey="1" centered>
      <Tabs.TabPane tab="控件配置" key="1">
        <Container>
          {(() => {
            switch (activeDetailWidget?.widgetType) {
              case DetailWidgetType.Label:
                return (
                  <LabelConfig
                    key={activeDetailWidget.id}
                    activeWidget={activeDetailWidget}
                    handleConfigChange={handleConfigChange}
                  />
                );
              case DetailWidgetType.QrCode:
                return (
                  <QrCodeConfig
                    key={activeDetailWidget.id}
                    activeWidget={activeDetailWidget}
                    handleConfigChange={handleConfigChange}
                  />
                );
              default:
                return (
                  <NoneActiveContainer>
                    <NoneActiveTitle>请选中控件</NoneActiveTitle>
                  </NoneActiveContainer>
                );
            }
          })()}
        </Container>
      </Tabs.TabPane>
      <Tabs.TabPane tab="全局配置" key="2">
        <Container>
          <GlobalDetailConfig
            widgets={detailWidgets}
            globalConfig={detailGlobalConfig}
            handleGlobalConfigChange={handleGlobalConfigChange}
          />
        </Container>
      </Tabs.TabPane>
    </Tabs>
  );
};

export default DetailConfigPanel;
