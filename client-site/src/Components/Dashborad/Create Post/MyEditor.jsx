import React from 'react';
import JoditEditor from 'jodit-react';


function RichTextEditor({editor}) {
  

  return (

    <JoditEditor
			ref={editor.editor}
			value={editor.content}
			onChange={newContent => editor.setContent(newContent)}
		/>
  
  
  );
}

export default RichTextEditor;