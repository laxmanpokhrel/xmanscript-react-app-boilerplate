/* eslint-disable import/prefer-default-export */
import { object, string, number, array } from 'yup';

export const TestFormValidation = object({
  combobox_one: string().required('Combobox one must be selected.'),
  drop_one: string().required('Combobox one must be selected.'),
  text_field: string().required('Name is Required.'),
  combobox_two: array()
    .of(number().typeError('Invalid number'))
    .min(1, 'At least one number is required')
    .required('Combobox one must be selected'),
  drop_two: array()
    .of(number().typeError('Invalid number'))
    .min(1, 'At least one number is required')
    .required('Combobox one must be selected'),
});
