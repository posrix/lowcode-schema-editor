import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Dispatch, RootState } from 'src/models/store';
import { Modal, Tag } from 'antd';
import JsonEditor, { JsonEditorProps } from 'src/components/JsonEditor';
import { EditorHelperTags } from './styled';

export interface EditorModalProps extends Partial<JsonEditorProps> {
  instanceId?: string;
  title?: string;
  width?: number;
  helperTags?: string[];
}

const EditorModal: React.FC<EditorModalProps> = ({
  instanceId,
  title = '',
  width = 800,
  jsonObject = {},
  handleChangeCallback,
  height = 500,
  readOnly,
  helperTags = [],
}) => {
  const editorModalVisible = useSelector((state: RootState) => state.app.editorModalVisible);
  const dispatch = useDispatch<Dispatch>();

  const handleCancel = useCallback(() => {
    dispatch.app.setEditorModalVisible(false);
  }, [dispatch.app]);

  return (
    <Modal
      title={title}
      open={editorModalVisible}
      width={width}
      footer={null}
      onCancel={handleCancel}
    >
      {!!helperTags.length && (
        <EditorHelperTags>
          {helperTags.map((tag) => (
            <Tag>{tag}</Tag>
          ))}
        </EditorHelperTags>
      )}
      <JsonEditor
        // Force re-render to reset tempValue for different instance
        key={instanceId}
        jsonObject={jsonObject}
        height={height}
        readOnly={readOnly}
        handleChangeCallback={(parsedJsonObject) => {
          dispatch.app.setEditorModalPropsJsonOject(parsedJsonObject);
          handleChangeCallback && handleChangeCallback(parsedJsonObject);
        }}
      />
    </Modal>
  );
};

export default EditorModal;
