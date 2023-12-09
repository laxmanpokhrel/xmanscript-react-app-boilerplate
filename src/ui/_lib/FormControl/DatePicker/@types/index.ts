import { IRegisterOutputProps } from '@xmanscript/useform';

export interface IDatePickerProps extends Partial<IRegisterOutputProps> {
  canType?: boolean;
  mode?: string;
  placeholder?: string;
}
