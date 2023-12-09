import { CKEditor } from '@ckeditor/ckeditor5-react';
import { ClassicEditor } from '@ckeditor/ckeditor5-editor-classic';
import { Essentials } from '@ckeditor/ckeditor5-essentials';
import { Paragraph } from '@ckeditor/ckeditor5-paragraph';
import { Bold, Italic } from '@ckeditor/ckeditor5-basic-styles';
import { Autoformat } from '@ckeditor/ckeditor5-autoformat';
import { BlockQuote } from '@ckeditor/ckeditor5-block-quote';
import { Heading } from '@ckeditor/ckeditor5-heading';
import { Link } from '@ckeditor/ckeditor5-link';
import { List } from '@ckeditor/ckeditor5-list';
import { useEffect, useState } from 'react';
import { IRegisterOutputProps } from '@xmanscript/useform';
import { IEditorProps } from './@types';
import './editor.css';

const editorConfiguration = {
  plugins: [Essentials, Autoformat, Bold, Italic, BlockQuote, Heading, Link, List, Paragraph],
  toolbar: ['heading', '|', 'bold', 'italic', 'link', 'bulletedList', 'numberedList', 'blockQuote', 'undo', 'redo'],
};

export default function Editor({
  value = '<p>Hello from CKEditor 5!</p>',
  onChange,
  editorHeight = '400px',
}: Partial<IRegisterOutputProps> & IEditorProps) {
  const [editorValue, setEditorValue] = useState<string>(value);

  // set editor value after bind value is updated
  useEffect(() => {
    setEditorValue(value);
  }, [value]);

  return (
    <CKEditor
      editor={ClassicEditor}
      config={editorConfiguration}
      data={editorValue}
      onChange={(_event, editor) => {
        const data = editor.getData();
        if (onChange) onChange(data);
        setEditorValue(data);
      }}
      onReady={(editor) => {
        editor.editing.view.change((writer) => {
          // @ts-ignore
          writer.setStyle(
            'height',
            `${editorHeight}`,
            // @ts-ignore
            editor.editing.view.document.getRoot(),
          );
        });
      }}
    />
  );
}
