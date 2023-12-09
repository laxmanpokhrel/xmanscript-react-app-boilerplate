import { Button } from '../Button';
import { IOverlayComponentProps } from './@types';

export default function DeleteConfirmationOverlay({ onClose, onDelete }: IOverlayComponentProps) {
  return (
    <div
      id="file-editor"
      className="naxatw-absolute naxatw-top-1/2 naxatw-left-1/2 min-w-[29rem] min-h-[6.625rem] -naxatw-translate-x-1/2 -naxatw-translate-y-1/2 naxatw-flex naxatw-flex-col naxatw-p-6 naxatw-bg-white naxatw-border naxatw-border-gray-300"
    >
      <div className="content naxatw-flex naxatw-flex-col naxatw-gap-4">
        <div className="head naxatw-flex naxatw-flex-col naxatw-gap-2">
          <h5>Delete</h5>
          <p className="naxatw-body-md">Are you sure want to delete?</p>
        </div>
        <div className="actions naxatw-w-full naxatw-flex naxatw-gap-1 naxatw-items-center naxatw-justify-end">
          <Button
            variant="link"
            onClick={() => {
              // onDelete();
              onClose();
            }}
          >
            Cancel
          </Button>
          <Button
            variant="primary"
            className="naxatw-bg-other-red naxatw-flex naxatw-gap-2 hover:naxatw-bg-red-700"
            onClick={() => {
              if (onDelete) onDelete();
              onClose();
            }}
          >
            <i className="material-symbols-outlined laxu-cursor-pointer laxu-text-2xl laxu-px-1 group-hover:laxu-bg-teal-green-50">
              delete
            </i>
            <p className="naxatw-button">Delete</p>
          </Button>
        </div>
      </div>
    </div>
  );
}
