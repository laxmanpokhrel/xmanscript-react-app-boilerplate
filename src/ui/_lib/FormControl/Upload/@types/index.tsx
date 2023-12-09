export interface IFileDataObject {
  id: string | number;
  name: string;
  uploadedAt?: string;
  fileObject?: File;
  document?: string;
  date_created?: Date;
  rich_file?: string;
}
