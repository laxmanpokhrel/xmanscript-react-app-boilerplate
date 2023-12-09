import { ClipLoader } from 'react-spinners';
import PortalTemplate from '@/ui/_lib/templates/PortalTemplate';

export default function Fallback() {
  return (
    <PortalTemplate>
      <div className="naxatw-flex naxatw-justify-center naxatw-items-center naxatw-flex-col naxatw-gap-2 naxatw-absolute naxatw-top-1/2 naxatw-left-1/2 -naxatw-translate-x-1/2 -naxatw-translate-y-1/2">
        <ClipLoader color="#000000" speedMultiplier={2} size={70} />
        <h4 className="naxatw-text-2xl naxatw-text-black naxatw-font-extrabold">Loading...</h4>
      </div>
    </PortalTemplate>
  );
}