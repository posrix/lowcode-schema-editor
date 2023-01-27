import React, { useEffect, useMemo } from 'react';
import LabelPanel from './LabelPanel';
import Painter from './Painter';
import ConfigPanel from './ConfigPanel';
import { DragDropContext, DropResult, DragStart } from 'react-beautiful-dnd';
import { RootState, Dispatch } from 'src/models/store';
import { useSelector, useDispatch } from 'react-redux';
import { presetFormWidgets, presetDetailWidgets, presetTableColumn } from 'src/config/preset';
import { useLocation } from 'react-router-dom';
import { CustomMode } from 'src/types/app';
import { isCustomMode } from 'src/utils/type';
import EditorModal from 'src/components/EditorModal';
import { nanoid } from 'nanoid';
import { cloneDeep } from 'lodash';
import { Container } from './styled';

const Home: React.FC = () => {
  const { formWidgets, detailWidgets, tableColumns, customMode, editorModalProps } = useSelector(
    (state: RootState) => ({
      formWidgets: state.widget.formWidgets,
      detailWidgets: state.widget.detailWidgets,
      tableColumns: state.table.tableColumns,
      customMode: state.app.customMode,
      editorModalProps: state.app.editorModalProps,
    })
  );
  const dispatch = useDispatch<Dispatch>();

  const { search } = useLocation();
  const searchParams = useMemo(() => new URLSearchParams(search), [search]);
  const CustomModeParam = searchParams.get('customMode');

  useEffect(() => {
    // Detect if not inside parent app iframe, use url to determine the custom mode
    if (window.location === window.parent.location) {
      if (isCustomMode(CustomModeParam)) {
        dispatch.app.setCustomMode(CustomModeParam);
      } else {
        dispatch.app.setCustomMode(CustomMode.Form);
      }
    }
  }, [CustomModeParam, dispatch.app]);

  const onDragEnd = (result: DropResult) => {
    const { destination, source } = result;
    const from = source.index;
    const to = destination ? destination?.index : 0;
    const isDetailCustomMode = customMode === CustomMode.Detail;

    if (source.droppableId === 'table-tag' && destination?.droppableId === 'table-painter') {
      if (tableColumns.length) {
        return;
      }
      const insertColumn = {
        id: 0,
        ...presetTableColumn,
      };
      dispatch.table.insertColumn({ insertColumn, insertIndex: 0 });
    } else if (source.droppableId === 'tag' && destination?.droppableId === 'painter') {
      // Insert widget to specific index
      const insertWidget = cloneDeep(
        isDetailCustomMode ? presetDetailWidgets[from] : presetFormWidgets[from]
      );
      insertWidget.id = nanoid(5);
      insertWidget.name = `${insertWidget.widgetType}_${insertWidget.id}`;
      dispatch.widget.insertWidget({ customMode: customMode!, insertWidget, insertIndex: to });
      dispatch.widget.setActiveWidget({ customMode: customMode!, id: insertWidget.id });
    } else if (source.droppableId === 'painter' && destination?.droppableId === 'painter') {
      // Swap widget index if drag from same location
      dispatch.widget.swapWidgets({ customMode: customMode!, from, to });
    }
  };

  const onBeforeDragStart = (start: DragStart) => {
    const { source } = start;

    // Change active widget while dragging in painter area
    if (source.droppableId === 'painter') {
      dispatch.widget.setActiveWidget({
        customMode: customMode!,
        id:
          customMode === CustomMode.Detail
            ? detailWidgets[source.index].id!
            : formWidgets[source.index].id!,
      });
    }
  };

  // Avoid twinkle
  if (!customMode) {
    return null;
  }

  return (
    <DragDropContext onDragEnd={onDragEnd} onBeforeDragStart={onBeforeDragStart}>
      <Container>
        <LabelPanel />
        <Painter />
        <ConfigPanel />
        <EditorModal {...editorModalProps} />
      </Container>
    </DragDropContext>
  );
};

export default Home;
