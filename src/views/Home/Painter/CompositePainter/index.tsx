import React from 'react';
import { DroppableStateSnapshot } from 'react-beautiful-dnd';
import { useSelector } from 'react-redux';
import { RootState } from 'src/models/store';
import Toolbar from '../Toolbar';
import SearchDroppable from './SearchDroppable';
import TableDroppbale from './TableDroppbale';
import { Wrapper, Container, Empty, Column } from '../styled';

interface RenderOrEmptyProps {
  condition: boolean;
  renderComponent: React.ReactElement;
  dropSnapshot: DroppableStateSnapshot;
  emtpyText: string;
}

export const RenderOrEmpty: React.FC<RenderOrEmptyProps> = ({
  condition,
  renderComponent,
  dropSnapshot,
  emtpyText,
}) => (condition ? renderComponent : <Empty hide={dropSnapshot.isDraggingOver}>{emtpyText}</Empty>);

const CompositePainter: React.FC = () => {
  const { formWidgets, tableColumns } = useSelector((state: RootState) => ({
    formWidgets: state.widget.formWidgets,
    tableColumns: state.table.tableColumns,
  }));

  return (
    <Wrapper>
      <Toolbar />
      <Container>
        <Column>
          <SearchDroppable formWidgets={formWidgets} droppableId="painter" />
        </Column>
        <Column>
          <TableDroppbale tableColumns={tableColumns} droppableId="table-painter" />
        </Column>
      </Container>
    </Wrapper>
  );
};

export default CompositePainter;
