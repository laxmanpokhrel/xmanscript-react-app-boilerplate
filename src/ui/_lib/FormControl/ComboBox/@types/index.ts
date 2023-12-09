import { IRegisterOutputProps } from '@xmanscript/useform';

export interface IDropOption {
  label: string;
  value: string | boolean;
  id?: string | number;
  code?: string;
}

export interface IComboBoxProps extends Partial<IRegisterOutputProps> {
  options: IDropOption[];
  choose?: string;
  multiple?: boolean;
  disabled?: boolean;
  isLoading?: boolean;
  dropDownSize?: 'lg' | 'sm' | 'lg-icon' | 'sm-icon' | 'drop-lg' | 'drop-sm' | 'drop-md';
  placeholderClassName?: string;
  placeholder: string;
}
