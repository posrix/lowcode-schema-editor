import React, { useMemo } from 'react';
import { Draggable, DraggableProvided, DraggableStateSnapshot } from 'react-beautiful-dnd';
import { Form, Input, Radio, Select, DatePicker, InputNumber, Upload, Button } from 'antd';
import { FormWidget } from 'src/types/form';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, Dispatch } from 'src/models/store';
import Icon from 'src/components/Icon';
import { normalizingFileUpload } from 'src/utils/app';
import { Rule } from 'antd/lib/form';
import { Container, CustomWidget, DeleteContainer } from './styled';

interface FormItemProps {
  index: number;
  widget: FormWidget;
}

const FormItem: React.FC<FormItemProps> = ({ index, widget }) => {
  const { customMode, activeFormWidget } = useSelector((state: RootState) => ({
    customMode: state.app.customMode,
    activeFormWidget: state.widget.activeFormWidget,
  }));
  const dispatch = useDispatch<Dispatch>();

  const isActive = activeFormWidget ? widget.id === activeFormWidget.id : false;

  const rulesProps = useMemo(() => {
    return {
      rules: [
        {
          required: widget.hasOwnProperty('required') ? widget.required : false,
          message: '不能为空',
        },
        ...(widget.rules ? widget.rules : []),
      ] as Rule[],
    };
  }, [widget]);

  return (
    <Draggable draggableId={`form-widget-${index}`} index={index}>
      {(dragProvided: DraggableProvided, dragSnapshot: DraggableStateSnapshot) => (
        <Container
          {...dragProvided.draggableProps}
          {...dragProvided.dragHandleProps}
          ref={dragProvided.innerRef}
          active={isActive || dragSnapshot.isDragging}
          onClick={() =>
            dispatch.widget.setActiveWidget({ customMode: customMode!, id: widget.id! })
          }
        >
          {(() => {
            switch (widget.widgetType) {
              case 'input':
                return (
                  <Form.Item label={widget.title} name={widget.name} {...rulesProps}>
                    <Input placeholder={widget.description} value={widget.defaultValue} />
                  </Form.Item>
                );
              case 'textarea':
                return (
                  <Form.Item label={widget.title} name={widget.name} {...rulesProps}>
                    {/* antd still remain autoSize change not re-render issue 
                    https://github.com/react-component/textarea/pull/13 */}
                    <Input.TextArea
                      rows={widget.componentProps.rows}
                      autoSize={widget.componentProps.autoSize}
                      placeholder={widget.description}
                      value={widget.defaultValue}
                    />
                  </Form.Item>
                );
              case 'numerical':
                return (
                  <Form.Item label={widget.title} name={widget.name} {...rulesProps}>
                    <InputNumber
                      min={widget.componentProps.min}
                      max={widget.componentProps.max}
                      placeholder={widget.description}
                      value={widget.defaultValue}
                    />
                  </Form.Item>
                );
              case 'password':
                return (
                  <Form.Item label={widget.title} name={widget.name} {...rulesProps}>
                    <Input.Password placeholder={widget.description} value={widget.defaultValue} />
                  </Form.Item>
                );
              case 'radio':
                return (
                  <Form.Item
                    label={widget.title}
                    name={widget.name}
                    rules={[
                      {
                        required: widget.required,
                        message: '不能为空',
                      },
                    ]}
                  >
                    <Radio.Group value={widget.defaultValue}>
                      <Radio value={true}>是</Radio>
                      <Radio value={false}>否</Radio>
                    </Radio.Group>
                  </Form.Item>
                );
              case 'upload':
                return (
                  <Form.Item
                    label={widget.title}
                    name={widget.name}
                    valuePropName="fileList"
                    getValueFromEvent={normalizingFileUpload}
                    rules={[
                      {
                        required: widget.required,
                        message: '不能为空',
                      },
                    ]}
                  >
                    <Upload
                      listType={widget.componentProps.contentType}
                      maxCount={widget.componentProps.maxCount}
                    >
                      <Button>{widget.componentProps.uploadText}</Button>
                    </Upload>
                  </Form.Item>
                );
              case 'select':
                return (
                  <Form.Item label={widget.title} name={widget.name} {...rulesProps}>
                    <Select
                      value={widget.defaultValue}
                      mode={widget.componentProps.mode}
                      placeholder={widget.description}
                    >
                      {Object.entries(widget.staticDataSource).map(([key, value]) => (
                        <Select.Option value={key} key={key}>
                          {value}
                        </Select.Option>
                      ))}
                    </Select>
                  </Form.Item>
                );
              case 'date':
                return (
                  <Form.Item label={widget.title} name={widget.name} {...rulesProps}>
                    <DatePicker
                      showTime={widget.componentProps.showTime}
                      showNow={widget.componentProps.showNow}
                      format={widget.componentProps.format}
                    />
                  </Form.Item>
                );
              case 'range':
                return (
                  <Form.Item label={widget.title} name={widget.name} {...rulesProps}>
                    <DatePicker.RangePicker
                      showTime={widget.componentProps.showTime}
                      format={widget.componentProps.format}
                    />
                  </Form.Item>
                );
              case 'custom':
                return (
                  <Form.Item label={widget.title} name={widget.name} {...rulesProps}>
                    <CustomWidget>{widget.appCustomComponent}</CustomWidget>
                  </Form.Item>
                );
              default:
                break;
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

export default React.memo(FormItem);
