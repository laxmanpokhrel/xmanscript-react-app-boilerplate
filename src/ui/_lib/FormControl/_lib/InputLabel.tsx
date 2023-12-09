import ToolTip from './ToolTip';

export interface IInputLabelProps {
  label: string;
  tooltipMessage?: string;
  astric?: boolean;
  id?: string;
  disabled?: boolean;
}

export default function InputLabel({ label, tooltipMessage, astric, id, disabled }: IInputLabelProps) {
  return (
    <div className={`label naxatw-flex naxatw-h-5 naxatw-items-center  ${disabled ? 'naxatw-text-gray-600' : ''}`}>
      <p id={id} className="naxatw-body-sm">
        {label}
      </p>
      {astric ? <span className="naxatw-text-red-600">&nbsp;*</span> : null}
      <div className="tooltip naxatw-ml-1  ">
        {tooltipMessage ? <ToolTip iconName="info" message={tooltipMessage || 'tooltip'} /> : null}
      </div>
    </div>
  );
}
