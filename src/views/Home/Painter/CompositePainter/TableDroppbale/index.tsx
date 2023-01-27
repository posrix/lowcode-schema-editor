import React, { useState } from 'react';
import { DroppableProvided, Droppable, DroppableStateSnapshot } from 'react-beautiful-dnd';
import { SortableContainer, SortableElement, SortableHandle } from 'react-sortable-hoc';
import { useDispatch } from 'react-redux';
import { Dispatch } from 'src/models/store';
import { Button, Space } from 'antd';
import type { ProColumns } from '@ant-design/pro-table';
import { EditableProTable } from '@ant-design/pro-table';
import { TableColumn } from 'src/types/table';
import { presetTableColumn } from 'src/config/preset';
import { cloneDeep, omit } from 'lodash';
import { arrayMoveImmutable } from 'src/utils/app';
import { MenuOutlined } from '@ant-design/icons';
import { RenderOrEmpty } from '..';
import { DropZone } from '../../styled';

const DragHandle = SortableHandle(() => <MenuOutlined style={{ cursor: 'grab', color: '#999' }} />);

type DataSourceType = Pick<
  TableColumn,
  | 'id'
  | 'name'
  | 'title'
  | 'description'
  | 'sorter'
  | 'width'
  | 'appearance'
  | 'staticDataSource'
  | 'addExport'
  | 'export'
>;

interface TableDroppbaleProps {
  tableColumns: TableColumn[];
  droppableId: string;
}

const TableDroppbale: React.FC<TableDroppbaleProps> = ({ tableColumns, droppableId }) => {
  const dispatch = useDispatch<Dispatch>();

  const [editableKeys, setEditableRowKeys] = useState<React.Key[]>([]);

  const columns: ProColumns<DataSourceType>[] = [
    {
      title: '排序',
      dataIndex: 'sort',
      width: 60,
      className: 'drag-visible',
      render: () => <DragHandle />,
      renderFormItem: () => <DragHandle />,
    },
    {
      title: '标题',
      dataIndex: 'title',
      width: 190,
    },
    {
      title: '标识',
      dataIndex: 'name',
      width: 190,
    },
    {
      title: '描述',
      dataIndex: 'description',
      width: 190,
    },
    {
      title: '列宽',
      key: 'width',
      dataIndex: 'width',
      valueType: 'digit',
      width: 110,
    },
    {
      title: '排序',
      key: 'sorter',
      dataIndex: 'sorter',
      valueType: 'switch',
      width: 88,
    },
    {
      title: '外观',
      key: 'appearance',
      dataIndex: 'appearance',
      width: 88,
      renderFormItem: (schema) => (
        <Button
          onClick={() => {
            dispatch.app.activeEditorModal({
              title: '外观',
              jsonObject: tableColumns[schema.index!].appearance,
              handleChangeCallback: (parsedJsonObject) =>
                dispatch.table.configColumn({
                  index: schema.index!,
                  config: { appearance: parsedJsonObject },
                }),
            });
          }}
        >
          编辑
        </Button>
      ),
      render: (_, record) => (
        <Button
          onClick={() => {
            dispatch.app.activeEditorModal({
              title: '外观',
              readOnly: true,
              jsonObject: tableColumns[record.id!].appearance,
              handleChangeCallback: (parsedJsonObject) =>
                dispatch.table.configColumn({
                  index: record.id!,
                  config: { appearance: parsedJsonObject },
                }),
            });
          }}
        >
          查看
        </Button>
      ),
    },
    {
      title: '静态数据源',
      key: 'staticDataSource',
      dataIndex: 'staticDataSource',
      width: 88,
      renderFormItem: (schema) => (
        <Button
          onClick={() => {
            dispatch.app.activeEditorModal({
              title: '静态数据源',
              jsonObject: tableColumns[schema.index!].staticDataSource,
              handleChangeCallback: (parsedJsonObject) =>
                dispatch.table.configColumn({
                  index: schema.index!,
                  config: { staticDataSource: parsedJsonObject },
                }),
            });
          }}
        >
          编辑
        </Button>
      ),
      render: (_, record) => (
        <Button
          onClick={() => {
            dispatch.app.activeEditorModal({
              title: '静态数据源',
              readOnly: true,
              jsonObject: tableColumns[record.id!].staticDataSource,
              handleChangeCallback: (parsedJsonObject) =>
                dispatch.table.configColumn({
                  index: record.id!,
                  config: { staticDataSource: parsedJsonObject },
                }),
            });
          }}
        >
          查看
        </Button>
      ),
    },
    {
      title: '启用导出',
      key: 'addExport',
      dataIndex: 'addExport',
      valueType: 'switch',
      width: 88,
    },
    {
      title: '导出设置',
      key: 'export',
      dataIndex: 'export',
      width: 88,
      renderFormItem: (schema, config) => (
        <Button
          onClick={() => {
            const exportConfig = cloneDeep(tableColumns[schema.index!].export);
            if (!exportConfig.name || !exportConfig.key) {
              // Auto set export value
              // Only set once for initialization
              if (!exportConfig.name) {
                exportConfig.name = config.record!.title ? config.record!.title : '';
              }
              if (!exportConfig.key) {
                exportConfig.key = config.record!.name ? config.record!.name : '';
              }
              dispatch.table.configColumn({
                index: schema.index!,
                config: { export: exportConfig },
              });
            }
            dispatch.app.activeEditorModal({
              title: '导出设置',
              jsonObject: exportConfig,
              handleChangeCallback: (parsedJsonObject) =>
                dispatch.table.configColumn({
                  index: schema.index!,
                  config: { export: parsedJsonObject },
                }),
            });
          }}
        >
          编辑
        </Button>
      ),
      render: (_, record) => (
        <Button
          onClick={() => {
            dispatch.app.activeEditorModal({
              title: '导出设置',
              readOnly: true,
              jsonObject: tableColumns[record.id!].export,
              handleChangeCallback: (parsedJsonObject) =>
                dispatch.table.configColumn({
                  index: record.id!,
                  config: { export: parsedJsonObject },
                }),
            });
          }}
        >
          查看
        </Button>
      ),
    },
    {
      title: '操作',
      valueType: 'option',
      fixed: 'right',
      render: (text, record, _, action) => [
        <Space key={record.id}>
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <a
            onClick={() => {
              action?.startEditable?.(record.id!);
            }}
          >
            编辑
          </a>
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <a
            onClick={() => {
              dispatch.table.removeColumn(record.id!);
            }}
          >
            删除
          </a>
        </Space>,
      ],
    },
  ];

  const SortableItem = SortableElement((props: any) => <tr {...props} />);
  const SortContainer = SortableContainer((props: any) => <tbody {...props} />);

  const onSortEnd = ({ oldIndex, newIndex }: { oldIndex: number; newIndex: number }) => {
    if (oldIndex !== newIndex) {
      dispatch.table.setColumns([
        ...arrayMoveImmutable([...tableColumns], oldIndex, newIndex).filter((el) => !!el),
      ]);
    }
  };

  const DraggableContainer = (props: any) => (
    <SortContainer
      useDragHandle
      disableAutoscroll
      helperClass="row-dragging"
      helperContainer={document.getElementById('lowcode-schema-editor-root')}
      onSortEnd={onSortEnd}
      {...props}
    />
  );

  const DraggableBodyRow = (props: any) => {
    const { className, style, ...restProps } = props;
    // function findIndex base on Table rowKey props and should always be a right array index
    const index = tableColumns.findIndex((x) => x.id === restProps['data-row-key']);
    return <SortableItem index={index} {...restProps} />;
  };

  return (
    <Droppable droppableId={droppableId}>
      {(dropProvided: DroppableProvided, dropSnapshot: DroppableStateSnapshot) => (
        <DropZone
          ref={dropProvided.innerRef}
          {...dropProvided.droppableProps}
          isDraggingOver={dropSnapshot.isDraggingOver}
        >
          <RenderOrEmpty
            condition={!!tableColumns.length}
            dropSnapshot={dropSnapshot}
            emtpyText="请从左侧拖入表格控件"
            renderComponent={
              <EditableProTable<DataSourceType>
                columns={columns}
                rowKey="id"
                scroll={{ x: 'max-content' }}
                value={tableColumns}
                onChange={(value) => {
                  // Create mode
                  if (value.length > tableColumns.length) {
                    dispatch.table.setColumns(value);
                  } else {
                    // Alter mode (Don't use value, it couldn't get latest value of object type)
                    dispatch.table.setColumns(tableColumns);
                  }
                }}
                recordCreatorProps={{
                  newRecordType: 'dataSource',
                  record: (index) => ({
                    id: index,
                    ...presetTableColumn,
                  }),
                }}
                components={{
                  body: {
                    wrapper: DraggableContainer,
                    row: DraggableBodyRow,
                  },
                }}
                editable={{
                  type: 'multiple',
                  editableKeys,
                  actionRender: (row, config, defaultDoms) => {
                    return [defaultDoms.save, defaultDoms.delete];
                  },
                  onSave: async (key, row) => {
                    dispatch.table.configColumn({
                      index: row.index!,
                      config: omit(row, ['export', 'staticDataSource', 'appearance']),
                    });
                  },
                  onChange: setEditableRowKeys,
                }}
              />
            }
          />

          {dropProvided.placeholder}
        </DropZone>
      )}
    </Droppable>
  );
};

export default React.memo(TableDroppbale);
