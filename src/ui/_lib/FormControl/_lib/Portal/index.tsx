import { createPortal } from 'react-dom';
import { HTMLAttributes, useEffect, useLayoutEffect } from 'react';
import { motion } from 'framer-motion';
import { hasErrorBoundary } from '@xmanscript/has-error-boundary';

/**
 * This is a functional component called `PortalTemplate` that takes in a prop called `children` of
 * type `IDivProps`. It creates two variables `backdropNode` and `portalNode` by getting the elements
 * with ids `backdrop-root` and `overlay-root` respectively.
 * */

function Portal({ children }: HTMLAttributes<HTMLDivElement>) {
  const backdropNode = document.getElementById('backdrop-root');
  const portalNode = document.getElementById('overlay-root');
  useLayoutEffect(() => {});

  useEffect(() => {
    const { body } = document;
    body.style.overflow = 'hidden';
    body.style.paddingRight = '17px';

    return () => {
      document.body.style.overflow = 'auto';
      body.style.paddingRight = '0px';
    };
  }, []);

  return (
    <>
      {backdropNode
        ? createPortal(
            <motion.div
              initial={{ opacity: 0.3 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.2, ease: 'easeIn', delay: 0 }}
              className="naxatw-w-screen naxatw-h-screen naxatw-bg-black naxatw-bg-opacity-50  naxatw-fixed naxatw-top-0 naxatw-left-0 naxatw-z-50"
            />,
            backdropNode,
          )
        : null}
      {portalNode
        ? createPortal(
            <div className="naxatw-fixed naxatw-top-0 naxatw-left-0 naxatw-w-screen naxatw-h-screen naxatw-bg-opacity-0 naxatw-z-50">
              <div className="overlay-container naxatw-relative naxatw-w-full naxatw-h-full ">{children}</div>
            </div>,
            portalNode,
          )
        : null}
    </>
  );
}
export default hasErrorBoundary(Portal);
