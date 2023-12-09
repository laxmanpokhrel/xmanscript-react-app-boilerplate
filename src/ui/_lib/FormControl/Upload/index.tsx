/* eslint-disable no-unused-vars */
import { IRegisterOutputProps } from '@xmanscript/useform';
import { ChangeEvent, useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import PreviewFiles from './PreviewFiles';
import { cn } from '@/utils';
import { IFileDataObject } from './@types';

interface IUploadProps extends Partial<IRegisterOutputProps> {
  customFn: () => void;
  uniquename: string;
  multiple?: boolean;
  className?: string;
}

export default function Upload({ uniquename, onChange, className, multiple = false, value, customFn }: IUploadProps) {
  const [files, setFiles] = useState<IFileDataObject[]>([]);
  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const uploadedFiles: IFileDataObject[] = [];

    if (e.target.files)
      // eslint-disable-next-line no-restricted-syntax
      for (const file of e.target.files) {
        uploadedFiles.push({ id: uuidv4(), name: file.name, fileObject: file });
      }
    setFiles(uploadedFiles);
    if (onChange) onChange(uploadedFiles);
  };

  const handleFileDelete = (fileToDelete: File) => {
    if (files) {
      const updatedFiles = Array.from(files).filter((file: any) => file !== fileToDelete);
      setFiles(updatedFiles);
    }
  };

  useEffect(() => {
    setFiles(value);
  }, [value]);

  return (
    <div
      className={cn(
        'naxatw-w-full naxatw-flex naxatw-flex-col naxatw-transition-all naxatw-duration-100 naxatw-ease-in-out ',
        className,
      )}
    >
      <label
        htmlFor={uniquename}
        className="naxatw-text-teal-green-400 naxatw-flex naxatw-gap-1 naxatw-font-bold naxatw-cursor-pointer naxatw-p-2"
        // className={`${
        //   files?.length ? 'naxatw-text-teal-green-400 ' : 'naxatw-text-gray-400 '
        // } naxatw-flex naxatw-gap-1 naxatw-font-bold naxatw-cursor-pointer naxatw-p-2`}
      >
        <i className="material-symbols-outlined naxatw-cursor-pointer naxatw-text-2xl naxatw-px-1 group-hover:naxatw-bg-teal-green-50">
          upload
        </i>
        <p>Upload</p>
        <input
          key={uuidv4()}
          type="file"
          id={uniquename}
          className="naxatw-hidden"
          name={uniquename}
          onChange={handleFileChange}
          multiple={multiple}
        />
      </label>
      {files ? PreviewFiles({ files, handleFileDelete, customDeleteFn: customFn }) : null}
    </div>
  );
}
