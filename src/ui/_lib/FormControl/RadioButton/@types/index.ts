import { IRegisterOutputProps } from '@xmanscript/useform';

import { IDropOption } from '../../ComboBox/@types';

export interface IRadioDataProps extends Partial<IRegisterOutputProps> {
  options: IDropOption[];
  buttonSize?: string;
  choose?: keyof IDropOption;
  disabled?: boolean;
  className?: string;
}

export interface IRadioData {
  label: string;
  value: string | boolean;
  id?: string | number;
  code?: string;
}
