import React from 'react';
import Icon from 'src/components/Icon';
import {
  Draggable,
  DraggableProvided,
  Droppable,
  DroppableProvided,
  DraggableStateSnapshot,
  DraggingStyle,
  NotDraggingStyle,
} from 'react-beautiful-dnd';
import { Widgets } from 'src/types/app';
import { Container, WidgetTagContainer, WidgetTag, Title, IgnorePlaceholder } from './styled';

function getStyle(
  style: DraggingStyle | NotDraggingStyle | undefined,
  snapshot: DraggableStateSnapshot
) {
  return {
    ...style,
    transform: snapshot.isDragging ? style?.transform : 'translate(0px, 0px)',
  };
}

export interface LabelPanelProps {
  droppableId?: string;
  title: string;
  persetWidgets: Widgets;
}

const WidgetTagDragZone: React.FC<LabelPanelProps> = ({
  title,
  droppableId = 'tag',
  persetWidgets,
}) => {
  return (
    <Container>
      <Title>{title}</Title>
      <Droppable droppableId={droppableId} direction="horizontal" isDropDisabled>
        {(dropProvided: DroppableProvided) => (
          <WidgetTagContainer ref={dropProvided.innerRef} {...dropProvided.droppableProps}>
            {persetWidgets.map((widget, index) => (
              <Draggable draggableId={`${droppableId}-draggableId-${index}`} index={index} key={index}>
                {(dragProvided: DraggableProvided, dragSnapshot: DraggableStateSnapshot) => (
                  <>
                    <WidgetTag
                      {...dragProvided.draggableProps}
                      {...dragProvided.dragHandleProps}
                      noIcon={!!!widget.icon}
                      ref={dragProvided.innerRef}
                      style={getStyle(dragProvided.draggableProps.style, dragSnapshot)}
                      isDragging={dragSnapshot.isDragging}
                    >
                      {widget.icon && <Icon glyph={widget.icon} />}
                      {widget.tag}
                    </WidgetTag>
                    {/* Add a clone while dragging to keep the original list*/}
                    {dragSnapshot.isDragging && (
                      <WidgetTag noIcon={!!!widget.icon} isDragging={dragSnapshot.isDragging}>
                        {widget.icon && <Icon glyph={widget.icon} />}
                        {widget.tag}
                      </WidgetTag>
                    )}
                  </>
                )}
              </Draggable>
            ))}
            <IgnorePlaceholder>{dropProvided.placeholder}</IgnorePlaceholder>
          </WidgetTagContainer>
        )}
      </Droppable>
    </Container>
  );
};

export default WidgetTagDragZone;
