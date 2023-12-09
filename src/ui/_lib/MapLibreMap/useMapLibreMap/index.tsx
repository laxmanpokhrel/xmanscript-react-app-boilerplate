import { useEffect, useRef, useState } from 'react';
import maplibreGl from 'maplibre-gl';
import { IUseMapLibreMapProps, IUseMapLibreReturnProps } from './@types';

/**
 * This is a TypeScript function that creates a map using the MapLibre library and adds various
 * controls to it based on the provided options.
 * @param {IUseMapLibreMapProps}  - - `options`: an object containing additional options to be passed
 * to the map instance
 * @returns an object with three properties: `map`, `mapLoaded`, and `mapContainerRef`.
 */
export default function useMapLibreMap({
  options,
  controls,
  controlLocation,
  baseLayer,
}: IUseMapLibreMapProps): IUseMapLibreReturnProps {
  const [map, setMap] = useState<maplibregl.Map | null>(null);
  const [mapLoaded, setMapLoaded] = useState(false);
  const mapContainerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const mapInstance = new maplibreGl.Map({
      container: mapContainerRef.current!,
      style: {
        version: 8,
        sources: baseLayer.baseLayer,
        layers: [
          {
            id: baseLayer.selectedLayer.id,
            type: baseLayer.selectedLayer.type,
            source: baseLayer.selectedLayer.source,
          },
        ],
      },
      center: [84.57394902560065, 28.415681762024647],
      zoom: 7,
      ...options,
    });

    if (controls?.navigation) mapInstance.addControl(new maplibreGl.NavigationControl(), controlLocation);

    if (controls?.geoLocate)
      mapInstance.addControl(
        new maplibreGl.GeolocateControl({
          positionOptions: {
            enableHighAccuracy: true,
          },
          trackUserLocation: true,
        }),
        controlLocation,
      );

    if (controls?.scale) mapInstance.addControl(new maplibreGl.ScaleControl({ maxWidth: 60, unit: 'metric' }));

    if (controls?.fullScreen) mapInstance.addControl(new maplibreGl.FullscreenControl(), controlLocation);

    mapInstance.on('load', () => {
      setMapLoaded(true);
    });

    (window as any).mapp = mapInstance;
    setMap(mapInstance);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [baseLayer.selectedLayer]);

  return { map, mapLoaded, mapContainerRef };
}
