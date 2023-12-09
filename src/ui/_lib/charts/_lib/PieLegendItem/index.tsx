/* eslint-disable no-unused-vars */
import { useState } from 'react';
import { IPieLegendItemProps } from '../../@types';

export default function PieLegendItem({ color, name, value, percentage, onLegendClick }: IPieLegendItemProps) {
  const [legendIsDisabled, setLegendIsDisabled] = useState(false);
  return (
    <button
      type="button"
      onClick={() => {
        setLegendIsDisabled((prev) => !prev);
        onLegendClick(name);
      }}
      className="naxatw-flex naxatw-gap-16  naxatw-justify-between naxatw-items-center"
    >
      <div className="legend-box-name naxatw-flex naxatw-justify-items-start naxatw-items-center naxatw-gap-2 naxatw-flex-1">
        <div
          className="naxatw-w-[16px] naxatw-h-[16px] naxatw-rounded"
          style={{
            backgroundColor: legendIsDisabled ? '#D7D7D7' : color,
            border: legendIsDisabled ? '1px solid #D7D7D7' : '',
          }}
        />
        <div className={`name naxatw-text-sm ${legendIsDisabled ? 'naxatw-text-gray-300' : ''}`}>{name}</div>
      </div>
      <div className="value-percentage naxatw-flex naxatw-gap-2  naxatw-justify-end naxatw-items-center naxatw-min-w-[2rem] naxatw-flex-1">
        <div className={`naxatw-text-sm ${legendIsDisabled ? 'naxatw-text-gray-300' : ''}`}>{value}</div>
        <div className={`naxatw-text-sm ${legendIsDisabled ? 'naxatw-text-gray-300' : ''}`}>{percentage} %</div>
      </div>
    </button>
  );
}
