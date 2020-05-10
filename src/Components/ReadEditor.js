import React, { useState, useEffect } from "react";
import { EditorState, convertFromRaw } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import "../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { editorStyle } from "../Utils";

export default ({ record }) => {
  console.log(record);
  const [editorState, setEditorState] = useState(
    record
      ? EditorState.createWithContent(
          convertFromRaw(JSON.parse(record.content))
        )
      : EditorState.createEmpty()
  );
  return (
    <Editor
      toolbarHidden
      editorState={editorState}
      readOnly={true}
      editorStyle={editorStyle}
    />
  );
};
