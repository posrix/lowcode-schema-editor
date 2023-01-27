import React from 'react';
import { DroppableProvided, Droppable } from 'react-beautiful-dnd';
import { useSelector } from 'react-redux';
import { RootState } from 'src/models/store';
import { Form } from 'antd';
import FormItem from 'src/components/FormItem';
import DetailItem from 'src/components/DetailItem';
import { CustomMode } from 'src/types/app';
import Toolbar from '../Toolbar';
import { Wrapper, Container, LayoutContainer } from '../styled';

const RegularPainter: React.FC = () => {
  const { formWidgets, detailWidgets, layoutMode, customMode } = useSelector(
    (state: RootState) => ({
      formWidgets: state.widget.formWidgets,
      detailWidgets: state.widget.detailWidgets,
      layoutMode: state.app.layoutMode,
      customMode: state.app.customMode,
    })
  );

  return (
    <Wrapper>
      <Toolbar />
      <Droppable droppableId="painter">
        {(dropProvided: DroppableProvided) => {
          return (
            <Container ref={dropProvided.innerRef} {...dropProvided.droppableProps}>
              <LayoutContainer layoutMode={layoutMode}>
                {customMode === CustomMode.Detail ? (
                  detailWidgets.map((widget, index) => (
                    <DetailItem key={index} widget={widget} index={index} />
                  ))
                ) : (
                  <Form>
                    {formWidgets.map((widget, index) => (
                      <FormItem key={index} widget={widget} index={index} />
                    ))}
                  </Form>
                )}
                {dropProvided.placeholder}
              </LayoutContainer>
            </Container>
          );
        }}
      </Droppable>
    </Wrapper>
  );
};

export default RegularPainter;
