import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Dispatch } from 'src/models/store';
import { QiankunBootProps } from 'src/types/app';
import { FormGlobalConfig, FormWidget } from './types/form';
import { DetailGlobalConfig, DetailWidget } from './types/detail';
import { CustomMode } from 'src/types/app';
import Home from 'src/views/Home';
import { isEmpty } from 'lodash';

export interface PostMessageEventData {
  globalConfig: FormGlobalConfig | DetailGlobalConfig;
  widgets: FormWidget[] | DetailWidget[];
  type: CustomMode;
}

function App(props: QiankunBootProps) {
  const dispatch = useDispatch<Dispatch>();

  useEffect(() => {
    dispatch.app.initQiankun(props);

    if (props.onGlobalStateChange) {
      // prev represent data before change
      props.onGlobalStateChange((state: any, prev: any) => {
        // This payload should implement in qiankun's parent application, 
        // so child application can initialize itself.
        const {
          customMode,
          apiContext,
          widgets,
          columns,
          externalConfig,
          globalConfig,
        } = state.payload;

        if (!isEmpty(customMode) && !isEmpty(apiContext) && !isEmpty(externalConfig)) {
          dispatch.app.initApp({ customMode, apiContext, externalConfig });
        }

        if (state.action === 'initEditor' || state.action === 'initSchema') {
          switch (customMode) {
            case CustomMode.Detail:
              dispatch.widget.initDetailApp({ widgets, globalConfig });
              break;
            case CustomMode.Form:
              dispatch.widget.initFormApp({ widgets, globalConfig });
              break;
            case CustomMode.Table:
              dispatch.widget.initFormApp({ widgets, globalConfig: globalConfig.search });
              dispatch.table.initTableApp({
                tableColumns: columns,
                exportGlobalConfig: globalConfig.export,
                importGlobalConfig: globalConfig.import,
                actionGlobalConfig: globalConfig.action,
                tableGlobalConfig: globalConfig.table,
              });
              break;
          }
        }

        if (state.action === 'clearSchema') {
          // Reset app state, may be implemented in the future
        }
      }, true);
    }
  }, [dispatch.widget, dispatch.app, dispatch.table, props]);

  return (
    <BrowserRouter basename={window.__POWERED_BY_QIANKUN__ ? '/home' : '/'}>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/custom-schema" component={Home} />
        <Route path="/custom-schema/tenant/:id" component={Home} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
