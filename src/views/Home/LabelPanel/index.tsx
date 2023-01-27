import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'src/models/store';
import { CustomMode } from 'src/types/app';
import { presetFormWidgets, presetDetailWidgets, presetTableWidgets } from 'src/config/preset';
import WidgetTagDragZone from 'src/components/WidgetTagDragZone';
import { Container } from './styled';
import { Radio, RadioChangeEvent } from 'antd';
import { useHistory } from 'react-router-dom';

const WidgetLabelPanel: React.FC = () => {
  const customMode = useSelector((state: RootState) => state.app.customMode);
  const history = useHistory();

  return (
    <Container>
      <Radio.Group
        optionType="button"
        size="middle"
        value={customMode}
        onChange={({ target: { value } }: RadioChangeEvent) => {
          history.replace(`?customMode=${value}`);
        }}
      >
        <Radio.Button value={CustomMode.Form}>表单</Radio.Button>
        <Radio.Button value={CustomMode.Table}>表格</Radio.Button>
        <Radio.Button value={CustomMode.Detail}>详情</Radio.Button>
      </Radio.Group>
      {(() => {
        switch (customMode) {
          case CustomMode.Form:
            return <WidgetTagDragZone persetWidgets={presetFormWidgets} title="表单控件" />;
          case CustomMode.Detail:
            return <WidgetTagDragZone persetWidgets={presetDetailWidgets} title="详情控件" />;
          case CustomMode.Table:
            return (
              <>
                <WidgetTagDragZone persetWidgets={presetFormWidgets} title="搜索控件" />
                <WidgetTagDragZone
                  persetWidgets={presetTableWidgets}
                  title="表格控件"
                  droppableId="table-tag"
                />
              </>
            );
        }
      })()}
    </Container>
  );
};

export default WidgetLabelPanel;
