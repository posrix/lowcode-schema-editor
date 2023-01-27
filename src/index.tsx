import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { getPersistor } from '@rematch/persist';
import { PersistGate } from 'redux-persist/es/integration/react';
import { store } from 'src/models/store';
import { Provider } from 'react-redux';
import { StyleSheetManager } from 'styled-components';
import { QiankunBootProps } from 'src/types/app';

declare global {
  interface Window {
    __POWERED_BY_QIANKUN__: any;
  }
}

if (window.__POWERED_BY_QIANKUN__) {
  // @ts-ignore
  __webpack_public_path__ = window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__;
}

// Qiankun global hook method
export async function bootstrap() {
  console.log('react app bootstraped');
}

// Qiankun global hook method
export async function mount(props: QiankunBootProps) {
  render(props);
}

// Qiankun global hook method
export async function unmount(props: QiankunBootProps) {
  ReactDOM.unmountComponentAtNode(
    props.container
      ? props.container.querySelector('#lowcode-schema-editor-root')
      : document.getElementById('lowcode-schema-editor-root')
  );
}

function render(props: QiankunBootProps) {
  const MOUNT_NODE = props.container
    ? props.container.querySelector('#lowcode-schema-editor-root')
    : (document.getElementById('lowcode-schema-editor-root') as HTMLElement);

  ReactDOM.render(
    <Provider store={store}>
      <PersistGate persistor={getPersistor()}>
        <StyleSheetManager disableCSSOMInjection>
          <App {...props} />
        </StyleSheetManager>
      </PersistGate>
    </Provider>,
    MOUNT_NODE
  );
}

// render without qiankun
if (!window.__POWERED_BY_QIANKUN__) {
  render({});
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
