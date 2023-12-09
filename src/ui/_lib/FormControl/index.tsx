import { hasErrorBoundary } from '@xmanscript/has-error-boundary';
import Editor from './Editor';
import Checkbox from './CheckBox';
import ComboBox from './ComboBox';
import { FormControlTypes } from './@types';
import Input from './Input';
import DatePicker from './DatePicker';
import Dropdown from './Dropdown';
import Textarea from './TextArea';
import { cn } from '@/utils';

import CheckBoxGroup from './CheckBoxGroup';
import CheckBoxWithLabel from './CheckBoxWithLabel';
import ErrorLabel from './_lib/ErrorLabel';
import InputLabel, { IInputLabelProps } from './_lib/InputLabel';
import RadioButton from './RadioButton';
import { IComboBoxProps } from './ComboBox/@types';
import { IChechBoxGroupProps } from './CheckBoxGroup/@types';
import { IDatePickerProps } from './DatePicker/@types';
import { IEditorProps } from './Editor/@types';
import { IRadioDataProps } from './RadioButton/@types';
import { ICheckBocWithLabelProps } from './CheckBoxWithLabel/@types';
import Upload from './Upload';

interface IFormControlProps
  extends Partial<IComboBoxProps>,
    Partial<IInputLabelProps>,
    Partial<Omit<IInputLabelProps, 'astric'>>,
    Partial<IChechBoxGroupProps>,
    Partial<IDatePickerProps>,
    Partial<IEditorProps>,
    Omit<Partial<IRadioDataProps>, 'choose'>,
    Partial<ICheckBocWithLabelProps> {
  controlType: FormControlTypes;
  disabled?: boolean;
  requiredControl?: boolean;
  controlsize?: string;
  customFn?: () => void;
}

function FormControl({
  controlType,
  label = '',
  error,
  tooltipMessage,
  className,
  disabled,
  requiredControl = false,
  ...props
}: IFormControlProps) {
  const controlElements: Record<string, any> = {
    input: Input,
    textArea: Textarea,
    checkBox: Checkbox,
    comboBox: ComboBox,
    dropDown: Dropdown,
    upload: Upload,
    radio: RadioButton,
    checkboxGroup: CheckBoxGroup,
    datePicker: DatePicker,
    checkBoxWithLabel: CheckBoxWithLabel,
    editor: Editor,
  };
  const ControlElement = controlElements[controlType];
  return (
    <div className={cn('form-control flex flex-col gap-[0.5rem] naxatw-bg-gray-900', className)}>
      {label && (
        <InputLabel label={label} tooltipMessage={tooltipMessage} astric={requiredControl} disabled={disabled} />
      )}
      <ControlElement {...props} error={error} disabled={disabled} />

      {error ? <ErrorLabel message={error} disabled={disabled} /> : null}
    </div>
  );
}
export default hasErrorBoundary(FormControl);
