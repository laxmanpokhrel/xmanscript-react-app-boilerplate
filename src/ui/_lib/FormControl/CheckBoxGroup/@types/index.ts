import { IRegisterOutputProps } from '@xmanscript/useform';

export interface ICheckBoxData {
  checked: boolean;
  id: string;
  label: string;
  value?: string;
}
export interface IChechBoxGroupProps extends Partial<IRegisterOutputProps> {
  className?: string;
  checkBoxOptions: ICheckBoxData[];
  choose?: string;
  rows?: number;
}
