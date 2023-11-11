import { useEffect, useState } from 'react';
import { MOBILE_WIDTH, TABLET_WIDTH } from '../constants';
import { PlatformTypes } from './types';


export const usePlatform = () => {
  const [clientWidth, setClientWidth] = useState(document.body.clientWidth);

  useEffect(() => {
    const clientWidthHandler = () => setClientWidth(document.body.clientWidth);
    window.addEventListener('resize', clientWidthHandler);

    return () => {
      window.removeEventListener('resize', clientWidthHandler);
    };
  }, []);

  if (clientWidth <= MOBILE_WIDTH) {
    return PlatformTypes.Mobile;
  }

  if (clientWidth <= TABLET_WIDTH) {
    return PlatformTypes.Tablet;
  }

  return PlatformTypes.Desktop;
};
