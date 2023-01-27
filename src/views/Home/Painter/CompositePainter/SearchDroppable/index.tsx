import React from 'react';
import { DroppableProvided, Droppable, DroppableStateSnapshot } from 'react-beautiful-dnd';
import { Form } from 'antd';
import FormItem from 'src/components/FormItem';
import { RenderOrEmpty } from '..';
import { DropZone } from '../../styled';
import { FormWidget } from 'src/types/form';

interface SearchDroppableProps {
  formWidgets: FormWidget[];
  droppableId: string;
}

const SearchDroppable: React.FC<SearchDroppableProps> = ({ formWidgets, droppableId }) => {
  return (
    <Droppable droppableId={droppableId}>
      {(dropProvided: DroppableProvided, dropSnapshot: DroppableStateSnapshot) => (
        <DropZone
          ref={dropProvided.innerRef}
          {...dropProvided.droppableProps}
          isDraggingOver={dropSnapshot.isDraggingOver}
        >
          <RenderOrEmpty
            condition={!!formWidgets.length}
            dropSnapshot={dropSnapshot}
            emtpyText="请从左侧拖入搜索控件"
            renderComponent={
              <Form>
                {formWidgets.map((widget, index) => (
                  <FormItem key={index} widget={widget} index={index} />
                ))}
              </Form>
            }
          />
          {dropProvided.placeholder}
        </DropZone>
      )}
    </Droppable>
  );
};

export default React.memo(SearchDroppable);
