import React from 'react';
import { Draggable, DraggableProvided, DraggableStateSnapshot } from 'react-beautiful-dnd';
import { DetailWidget, DetailWidgetType } from 'src/types/detail';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, Dispatch } from 'src/models/store';
import Icon from 'src/components/Icon';
import { QRCodeSVG } from 'qrcode.react';
import { Container, DeleteContainer, QrCodeContainer, QrCodeTitle } from './styled';

interface DetailItemProps {
  index: number;
  widget: DetailWidget;
}

const DetailItem: React.FC<DetailItemProps> = ({ index, widget }) => {
  const { customMode, activeDetailWidget } = useSelector((state: RootState) => ({
    customMode: state.app.customMode,
    activeDetailWidget: state.widget.activeDetailWidget,
  }));
  const dispatch = useDispatch<Dispatch>();

  const isActive = activeDetailWidget ? widget.id === activeDetailWidget.id : false;

  return (
    <Draggable draggableId={`detail-widget-${index}`} index={index}>
      {(dragProvided: DraggableProvided, dragSnapshot: DraggableStateSnapshot) => (
        <Container
          {...dragProvided.draggableProps}
          {...dragProvided.dragHandleProps}
          ref={dragProvided.innerRef}
          active={isActive || dragSnapshot.isDragging}
          onClick={() => {
            dispatch.widget.setActiveWidget({ customMode: customMode!, id: widget.id! });
          }}
        >
          {(() => {
            switch (widget.widgetType) {
              case DetailWidgetType.Label:
                return widget.title;
              case DetailWidgetType.QrCode:
                return (
                  <QrCodeContainer>
                    {/* Just an example for dynamically rendering qrcode */}
                    <QRCodeSVG value={widget.appearance?.appearanceKey || ''} />
                    <QrCodeTitle>{widget.title}</QrCodeTitle>
                  </QrCodeContainer>
                );
            }
          })()}
          <DeleteContainer hide={!isActive}>
            <Icon
              glyph="delete"
              color="#fff"
              size={13}
              onClick={() => {
                dispatch.widget.removeWidget({ customMode: customMode!, id: widget.id! });
              }}
            />
          </DeleteContainer>
        </Container>
      )}
    </Draggable>
  );
};

export default DetailItem;
