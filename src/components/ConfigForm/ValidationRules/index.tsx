import React, { useEffect, useMemo, useCallback, useState } from 'react';
import { Input, Checkbox, Form } from 'antd';
import { FormWidget } from 'src/types/form';
import { CheckboxChangeEvent } from 'antd/lib/checkbox';
import { RuleObject } from 'antd/lib/form';
import produce from 'immer';
import { findIndex } from 'lodash';
import { ConfigFieldContainer, ConfigFieldTitle, ConfigFormItem } from '../styled';
import { CheckboxInnerWrapper } from './styled';

export enum SupportedRuleType {
  Max = 'max',
  Pattern = 'pattern',
}

export interface ValidationRulesProps {
  activeWidget: FormWidget;
  handleConfigChange: (config: Partial<FormWidget>) => void;
}

const ValidationRules: React.FC<ValidationRulesProps> = ({ activeWidget, handleConfigChange }) => {
  const [rules, setRules] = useState<RuleObject[]>(activeWidget.rules || []);
  const [form] = Form.useForm();

  const findRuleIndexByKey = useCallback(
    (key: string) => findIndex(rules, (rule) => rule.hasOwnProperty(key)),
    [rules]
  );

  const { isMaxChecked, isPatternChecked } = useMemo(
    () => ({
      isMaxChecked: findRuleIndexByKey(SupportedRuleType.Max) >= 0,
      isPatternChecked: findRuleIndexByKey(SupportedRuleType.Pattern) >= 0,
    }),
    [findRuleIndexByKey]
  );

  // Remove handleConfigChange dep to avoid infinite re-render
  // https://zhuanlan.zhihu.com/p/450513902
  useEffect(() => {
    handleConfigChange({ rules });
  }, [rules]); // eslint-disable-line react-hooks/exhaustive-deps

  const handleRuleChange = useCallback(
    (e: CheckboxChangeEvent, key: string) => {
      const fieldsValue = form.getFieldsValue();
      let rule;
      switch (key) {
        case SupportedRuleType.Max:
          rule = {
            max: Number(fieldsValue.max),
            message: fieldsValue.maxMessage,
          };
          break;
        case SupportedRuleType.Pattern:
          rule = {
            pattern: fieldsValue.pattern,
            message: fieldsValue.patternMessage,
          };
          break;
        default:
          throw new Error('Invalid key');
      }
      if (e.target.checked) {
        setRules([...rules, rule]);
      } else {
        const index = findIndex(rules, (rule) => rule.hasOwnProperty(key));
        setRules([...rules.slice(0, index), ...rules.slice(index + 1)]);
      }
    },
    [rules, form]
  );

  const initialValues = useMemo(() => {
    const maxRule = rules[findRuleIndexByKey(SupportedRuleType.Max)];
    const patternRule = rules[findRuleIndexByKey(SupportedRuleType.Pattern)];
    return {
      max: maxRule ? Number(maxRule.max) : '',
      maxMessage: maxRule ? (maxRule.message as string) : '',
      pattern: patternRule ? patternRule.pattern : '',
      patternMessage: patternRule ? (patternRule.message as string) : '',
    };
  }, [rules, findRuleIndexByKey]);

  return (
    <Form form={form} name="widget-config" initialValues={initialValues}>
      <ConfigFieldContainer>
        <Checkbox
          checked={isMaxChecked}
          onChange={(e: CheckboxChangeEvent) => {
            handleRuleChange(e, SupportedRuleType.Max);
          }}
        >
          <CheckboxInnerWrapper>
            <ConfigFieldTitle>最大长度</ConfigFieldTitle>
            <ConfigFormItem name="max">
              <Input
                placeholder="最大长度"
                type="number"
                disabled={!isMaxChecked}
                onChange={(e) => {
                  setRules(
                    produce((draft) => {
                      draft[findRuleIndexByKey(SupportedRuleType.Max)].max = Number(e.target.value);
                    })
                  );
                }}
              />
            </ConfigFormItem>
            <ConfigFormItem name="maxMessage">
              <Input
                placeholder="自定义错误提示"
                disabled={!isMaxChecked}
                onChange={(e) => {
                  setRules(
                    produce((draft) => {
                      draft[findRuleIndexByKey(SupportedRuleType.Max)].message = e.target.value;
                    })
                  );
                }}
              />
            </ConfigFormItem>
          </CheckboxInnerWrapper>
        </Checkbox>
      </ConfigFieldContainer>
      <ConfigFieldContainer>
        <Checkbox
          checked={isPatternChecked}
          onChange={(e: CheckboxChangeEvent) => {
            handleRuleChange(e, SupportedRuleType.Pattern);
          }}
        >
          <CheckboxInnerWrapper>
            <ConfigFieldTitle>正则表达式</ConfigFieldTitle>
            <ConfigFormItem name="pattern">
              <Input
                placeholder="填写正则表达式"
                disabled={!isPatternChecked}
                onChange={(e) => {
                  setRules(
                    produce((draft) => {
                      draft[findRuleIndexByKey(SupportedRuleType.Pattern)].pattern = new RegExp(
                        e.target.value
                      );
                    })
                  );
                }}
              />
            </ConfigFormItem>
            <ConfigFormItem name="patternMessage">
              <Input
                placeholder="自定义错误提示"
                disabled={!isPatternChecked}
                onChange={(e) => {
                  setRules(
                    produce((draft) => {
                      draft[findRuleIndexByKey(SupportedRuleType.Pattern)].message = e.target.value;
                    })
                  );
                }}
              />
            </ConfigFormItem>
          </CheckboxInnerWrapper>
        </Checkbox>
      </ConfigFieldContainer>
    </Form>
  );
};

export default ValidationRules;
