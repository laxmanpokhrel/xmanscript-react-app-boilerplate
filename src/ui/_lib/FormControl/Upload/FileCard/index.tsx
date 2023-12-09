/* eslint-disable react/no-unused-prop-types */
/* eslint-disable no-unused-vars */
// import { removeComponentAnimation } from '@Animations/index';
import { HTMLAttributes, useState } from 'react';
import format from 'date-fns/format';
import { motion } from 'framer-motion';
import { SyncLoader } from 'react-spinners';
import Skeleton from '../../_lib/Skeleton';
import DeleteConfirmationOverlay from '../../_lib/Portal/DeleteConfirmationOverlay';
import { Button } from '../../_lib/Button';
import Portal from '../../_lib/Portal';
import { cn } from '@/utils';
import { IFileDataObject } from '../@types';

interface IFileCardProps extends HTMLAttributes<HTMLDivElement> {
  file: IFileDataObject;
  handleFileDelete?: (x: any) => void;
  index?: number;
  previewFile?: boolean;
  canEditFile?: boolean;
  deleteDocument?: (props?: any) => any;
  deleteFileStatus?: Record<string, any>;
}

export default function FileCard({
  file,
  className,
  handleFileDelete,
  index = 0,
  //   previewFile = false,
  //   canEditFile = false,
  deleteDocument,
  deleteFileStatus,
}: IFileCardProps) {
  //   const [viewPreview, setViewPreview] = useState<boolean>(false);
  const [confirmDelete, setConfirmDetele] = useState<boolean>(false);

  return (
    <>
      <div className="naxatw-overflow-hidden naxatw-rounded-lg naxatw-transition-all naxatw-duration-500">
        <motion.div
          initial={{ opacity: 0, transform: 'translateX(-50%)' }}
          animate={{ opacity: 1, transform: 'translateX(0%)' }}
          exit={{
            opacity: 1,
            transform: 'translateX(-100%)',
            background: '#EFBDBD',
            transition: { delay: 0 },
          }}
          transition={{ duration: 0.2, ease: 'easeOut', delay: index * 0.1 }}
          className={cn(
            'naxatw-flex naxatw-bg-white naxatw-justify-between naxatw-items-center naxatw-border naxatw-border-gray-300 naxatw-px-3 naxatw-py-2 naxatw-rounded-lg naxatw-w-full',
            className,
          )}
        >
          <div className="info naxatw-flex naxatw-gap-3 naxatw-flex-1 naxatw-items-center">
            <i
              className="
                material-symbols-outlined naxatw-cursor-pointer naxatw-text-2xl naxatw-px-1 group-hover:naxatw-bg-teal-green-50 naxatw-rounded-full naxatw-p-2 naxatw-text-blue-500 naxatw-bg-teal-green-50 naxatw-border naxatw-border-gray-300 naxatw-items-center naxatw-justify-center naxatw-text-center naxatw-max-h-[40px] naxatw-max-w-[40px]
                "
            >
              description
            </i>
            <div className="description naxatw-flex naxatw-flex-col naxatw-justify-center naxatw-items-start">
              {!file.fileObject ? (
                <p className="naxatw-body-md naxatw-text-gray-800">{file.name}</p>
              ) : (
                <p className="naxatw-body-md naxatw-text-gray-800">{file.name}</p>
              )}
              {!file.fileObject ? (
                <div className="meta naxatw-flex naxatw-gap-1">
                  <p className="naxatw-tooltip naxatw-text-blue-500">A02</p>
                  <p className="naxatw-body-sm naxatw-text-gray-600">
                    Uploaded on {file.date_created ? format(new Date(file.date_created), 'dd/MM/yyyy') : '-'}
                  </p>
                </div>
              ) : null}
            </div>
          </div>
          <div className="actions naxatw-flex naxatw-justify-center naxatw-items-center naxatw-gap-3">
            {/* {!file.fileObject ? (
              <Button
                type="button"
                variant="link"
                className="naxatw-font-bold !naxatw-px-0"
                onClick={() => {
                  if (previewFile) setViewPreview(true);
                }}
              >
                View&nbsp;Document
              </Button>
            ) : null} */}
            {!file.fileObject ? (
              <a href={file.document} download>
                <Button type="button" variant="icon-primary" size="sm-icon">
                  <i
                    className="
                      material-symbols-outlined naxatw-cursor-pointer naxatw-text-2xl naxatw-px-1 group-hover:naxatw-bg-teal-green-50 naxatw-p-0 naxatw-m-0 naxatw-text-gray-600"
                  >
                    download
                  </i>
                </Button>
              </a>
            ) : null}

            <Button
              type="button"
              variant="icon-primary"
              size="sm-icon"
              onClick={() => {
                setConfirmDetele(true);
                // deleteDocument();
                // if (handleFileDelete) handleFileDelete(file);
              }}
            >
              {deleteFileStatus?.isLoading ? (
                <SyncLoader color="#484848" speedMultiplier={2} size={5} margin={2} />
              ) : (
                <i
                  className="
                  material-symbols-outlined naxatw-cursor-pointer naxatw-text-2xl naxatw-px-1 group-hover:naxatw-bg-teal-green-50 naxatw-p-0 naxatw-m-0 naxatw-text-other-red"
                >
                  delete
                </i>
              )}
            </Button>
          </div>
        </motion.div>
      </div>
      {/* {viewPreview && (
        <PortalTemplate>
          <DocumentPreviewOverlay
            canEditFile={canEditFile}
            onClose={() => {
              setViewPreview(false);
            }}
            file={file || {}}
          />
        </PortalTemplate>
      )} */}
      {confirmDelete && (
        <Portal>
          <DeleteConfirmationOverlay
            onClose={() => {
              setConfirmDetele(false);
            }}
            onDelete={() => {
              if (!file.fileObject && deleteDocument) deleteDocument();
              if (handleFileDelete) handleFileDelete(file);
            }}
          />
        </Portal>
      )}
    </>
  );
}

export function FileCardSkeleton() {
  return (
    <div className="naxatw-overflow-hidden naxatw-rounded-lg naxatw-transition-all naxatw-duration-500">
      <motion.div
        // {...removeComponentAnimation}
        initial={{ opacity: 0, transform: 'translateY(-50%)' }}
        animate={{ opacity: 1, transform: 'translateY(0%)' }}
        exit={{
          opacity: 1,
          transform: 'translateY(-100%)',
          background: '#EFBDBD',
          transition: { delay: 0 },
        }}
        transition={{ duration: 0.2, ease: 'easeOut' }}
        className={cn(
          'naxatw-flex naxatw-bg-white naxatw-justify-between naxatw-items-center naxatw-border naxatw-border-gray-300 naxatw-px-3 naxatw-py-2 naxatw-rounded-lg naxatw-w-full',
        )}
      >
        <div className="info naxatw-flex naxatw-gap-3 naxatw-items-center naxatw-w-3/5">
          <Skeleton className="naxatw-rounded-full naxatw-p-2 naxatw-border naxatw-items-center naxatw-justify-center naxatw-text-center naxatw-h-[25px] naxatw-w-[25px]" />
          <div className="description naxatw-flex naxatw-gap-1 naxatw-flex-col naxatw-justify-center naxatw-items-start naxatw-w-2/3">
            <Skeleton className="naxatw-body-md naxatw-text-gray-800 naxatw-bg-gray-300 naxatw-w-full" />
            <div className="meta naxatw-flex naxatw-gap-1 naxatw-w-full">
              <Skeleton className="naxatw-h-2 naxatw-w-1/5" />
              <Skeleton className="naxatw-h-2 naxatw-w-4/5" />
            </div>
          </div>
        </div>
        <div className="actions naxatw-flex naxatw-justify-center naxatw-items-center naxatw-gap-3 naxatw-w-2/5 ">
          <Skeleton className="naxatw-p-2 naxatw-border  naxatw-text-center naxatw-w-3/5" />
          <Skeleton className="naxatw-p-2 naxatw-border  naxatw-text-center naxatw-w-1/5" />
          <Skeleton className="naxatw-p-2 naxatw-border  naxatw-text-center naxatw-w-1/5" />
        </div>
      </motion.div>
    </div>
  );
}
