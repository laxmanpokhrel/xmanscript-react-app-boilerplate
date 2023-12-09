/* eslint-disable no-unused-vars */
import { AnimatePresence } from 'framer-motion';
import { hasErrorBoundary } from '@xmanscript/has-error-boundary';
import FileCard, { FileCardSkeleton } from '../FileCard';
import { IFileDataObject } from '../@types';

interface IPreviewFilesProps {
  files: IFileDataObject[];
  handleFileDelete?: (x: any) => void;
  previewFiles?: boolean;
  canEditFile?: boolean;
  isLoading?: boolean;
  customDeleteFn?: () => void;
}
function PreviewFiles({
  files,
  handleFileDelete,
  previewFiles = false,
  canEditFile = false,
  isLoading,
  customDeleteFn,
}: IPreviewFilesProps) {
  const handleOverallFileDelete = (receivedFile: IFileDataObject) => {
    if (handleFileDelete) handleFileDelete(receivedFile);
    if (customDeleteFn) customDeleteFn();
  };
  if (isLoading)
    return (
      <div className="naxatw-flex naxatw-flex-col naxatw-gap-1">
        <AnimatePresence>
          {[...Array(2)].map(() => (
            <FileCardSkeleton />
          ))}
        </AnimatePresence>
      </div>
    );
  if (files)
    return (
      <div className="naxatw-flex naxatw-flex-col naxatw-gap-1 naxatw-w-full">
        <AnimatePresence>
          {files.map((file, index) => (
            <FileCard
              canEditFile={canEditFile}
              key={file.id}
              file={file}
              handleFileDelete={handleOverallFileDelete}
              index={index}
              previewFile={previewFiles}
            />
          ))}
        </AnimatePresence>
      </div>
    );
  return <p> No Files Selected</p>;
}
export default hasErrorBoundary(PreviewFiles);
