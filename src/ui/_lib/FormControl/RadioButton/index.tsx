import { Tabs } from '@radix-ui/react-tabs';
import { TabsList, TabsTrigger } from '../_lib/ClickableTab';
import { IRadioData, IRadioDataProps } from './@types';

function getTabSize(size: string) {
  switch (size) {
    case 'xs':
      return '!naxatw-h-8';
    case 'sm':
      return 'naxatw-h-9';
    case 'lg':
      return 'naxatw-h-10';
    case 'cols-2':
      return 'naxatw-h-10 !naxatw-grid !naxatw-grid-cols-3';
    default:
      return 'naxatw-h-10';
  }
}

function getTriggerSize(size: string) {
  switch (size) {
    case 'xs':
      return '!naxatw-py-0.5 !naxatw-h-fit !naxatw-px-1';
    default:
      return '';
  }
}

export default function RadioButton({
  id = 'input-form-control',
  className,
  value,
  options = [],
  choose = 'id',
  onChange,
  buttonSize = 'lg',
}: IRadioDataProps) {
  const handleClick = (val: string) => {
    if (onChange) {
      onChange(val);
    }
  };

  return (
    <Tabs
      id={id}
      defaultValue={String(value)}
      className={`naxatw-w-fit ${
        buttonSize === 'cols-2' ? 'naxatw-h-[80px] naxatw-bg-gray-200 naxatw-rounded-lg' : ''
      } ${className}`}
    >
      <TabsList className={`${getTabSize(buttonSize)}`}>
        {options?.map((itm: IRadioData) => (
          <TabsTrigger
            key={itm?.label}
            value={String(itm[choose])}
            onClick={() => handleClick(String(itm[choose]))}
            className={`${getTriggerSize(buttonSize)}`}
          >
            {itm?.label}
          </TabsTrigger>
        ))}
      </TabsList>
    </Tabs>
  );
}
