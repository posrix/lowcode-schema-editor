import React, { useRef } from 'react';
import AceEditor from 'react-ace';

import 'ace-builds';
import 'ace-builds/webpack-resolver';
import 'brace/mode/json';
import 'brace/theme/monokai';
import 'brace/ext/language_tools';
import 'brace/ext/searchbox'

export interface JsonEditorProps {
  jsonObject: any;
  indent?: number;
  height?: number;
  readOnly?: boolean;
  handleChangeCallback?: (parsedJsonObject: any) => void;
}

const JsonEditor: React.FC<JsonEditorProps> = ({
  jsonObject,
  indent = 2,
  height = 200,
  readOnly = false,
  handleChangeCallback,
}) => {
  const tempValue = useRef<string>('');
  return (
    <AceEditor
      readOnly={readOnly}
      mode="json"
      theme="monokai"
      width="auto"
      height={`${height}px`}
      onChange={(value) => {
        tempValue.current = value;
      }}
      onBlur={() => {
        try {
          handleChangeCallback && handleChangeCallback(JSON.parse(tempValue.current));
        } catch (e) {}
      }}
      editorProps={{ $blockScrolling: true }}
      enableBasicAutocompletion={true}
      enableLiveAutocompletion={true}
      enableSnippets={true}
      fontSize={14}
      showPrintMargin={true}
      showGutter={true}
      highlightActiveLine={true}
      value={JSON.stringify(jsonObject, null, indent)}
    />
  );
};

export default JsonEditor;
