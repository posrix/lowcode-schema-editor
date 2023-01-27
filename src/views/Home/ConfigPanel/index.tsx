import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'src/models/store';
import DetailConfigPanel from './DetailConfigPanel';
import FormConfigPanel from './FormConfigPanel';
import { CustomMode } from 'src/types/app';
import TableConfigPanel from './TableConfigPanel';
import { Wrapper } from './styled';

const ConfigPanel: React.FC = () => {
  const customMode = useSelector((state: RootState) => state.app.customMode);

  return (
    <Wrapper>
      {(() => {
        switch (customMode) {
          case CustomMode.Detail:
            return <DetailConfigPanel />;
          case CustomMode.Form:
            return <FormConfigPanel />;
          case CustomMode.Table:
            return <TableConfigPanel />;
        }
      })()}
    </Wrapper>
  );
};

export default ConfigPanel;
