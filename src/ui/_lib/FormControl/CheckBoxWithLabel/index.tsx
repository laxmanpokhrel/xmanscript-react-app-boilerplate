import { hasErrorBoundary } from '@xmanscript/has-error-boundary';
import Checkbox from '../CheckBox';
import { ICheckBocWithLabelProps } from './@types';

function CheckBoxWithLabel({ id, checkBoxLabel, onChange }: ICheckBocWithLabelProps) {
  return (
    <div className="box naxatw-flex naxatw-gap-2 naxatw-items-center naxatw-justify-end naxatw-w-full  naxatw-pt-7">
      <Checkbox
        id={id}
        onCheckedChange={(e: any) => {
          if (onChange) onChange(e);
        }}
      />
      <label htmlFor={id} className="naxatw-text-sm naxatw-cursor-pointer  naxatw-inline-block">
        {checkBoxLabel}
      </label>
    </div>
  );
}
export default hasErrorBoundary(CheckBoxWithLabel);
