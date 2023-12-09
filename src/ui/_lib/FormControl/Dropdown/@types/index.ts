import { IRegisterOutputProps } from '@xmanscript/useform';
import { IDropOption } from '../../ComboBox/@types';

export interface IDropDownProps extends Partial<IRegisterOutputProps> {
  options: IDropOption[];
  choose?: string;
  multiple?: boolean;
  disabled?: boolean;
  isLoading?: boolean;
  dropDownSize?: 'lg' | 'sm' | 'lg-icon' | 'sm-icon' | 'drop-lg' | 'drop-sm' | 'drop-md';
  placeholderClassName?: string;
  placeholder: string;
  className: string;
}
