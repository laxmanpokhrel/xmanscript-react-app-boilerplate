import { MutableRefObject } from 'react';

interface Controls {
  navigation?: boolean;
  geoLocate?: boolean;
  scale?: boolean;
  fullScreen?: boolean;
}

export type MapControlLocation = 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left';

export interface IUseMapLibreMapProps {
  options: Record<string, any>;
  controls: Controls;
  controlLocation: MapControlLocation;
  baseLayer?: any;
}

export interface IUseMapLibreReturnProps {
  map: any;
  mapLoaded: boolean;
  // !this might cause error on future
  mapContainerRef: MutableRefObject<HTMLDivElement | null>;
}
