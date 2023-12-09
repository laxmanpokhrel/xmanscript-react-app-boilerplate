/* eslint-disable no-unused-vars */
import { ButtonHTMLAttributes, HTMLAttributes, InputHTMLAttributes } from 'react';

export interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}
export interface IDivProps extends HTMLAttributes<HTMLDivElement> {}
export interface IInputTagProps extends InputHTMLAttributes<HTMLInputElement> {}

export interface IFormFieldProps {
  name: string;
  placeholder: string;
  required: boolean;
  type:
    | 'button'
    | 'checkbox'
    | 'color'
    | 'date'
    | 'datetime-local'
    | 'email'
    | 'file'
    | 'hidden'
    | 'image'
    | 'month'
    | 'number'
    | 'password'
    | 'radio'
    | 'range'
    | 'reset'
    | 'search'
    | 'submit'
    | 'tel'
    | 'text'
    | 'time'
    | 'url'
    | 'week';
}

export interface IOverlayComponentProps {
  onClose: () => any;
  text?: string;
}

export interface IBudget {
  id: number;
  budgetIcon: string;
  budgetName: string;
  amount: number;
}

export interface IDropDownData {
  label: string;
  value: string;
  id?: string | number;
  code?: string;
}

export interface IRegisterProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange' | 'onFocus'> {
  bindvalue: any;
  onFocus: (e?: any) => void;
  onChange: (e: any) => void;
  touched: boolean;
  error: string;
}

export interface IComboBoxProps extends Partial<IRegisterProps> {
  options: IDropDownData[];
  choose?: keyof IDropDownData;
  multiple?: boolean;
}

export interface IInputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange' | 'onFocus'> {
  onChange?: (e: any) => void;
  onFocus?: (e?: any) => void;
  hasIcon?: boolean;
  iconName?: string;
  varientSize?: 'sm' | 'lg';
  iconStyle?: string;
}
export interface IInputLabelProps {
  label: string;
  tooltipMessage?: string;
  astric?: boolean;
  id?: string;
}
