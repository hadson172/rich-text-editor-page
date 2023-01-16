import { useState } from "react";
import RichTextEditorContent from "./components/EditorContent/EditorContent";
import RichTextEditorHeader from "./components/EditorHeader/EditorHeader";

import "./RichTextEditor.css";

type Props = {};

const RichTextEditor = (props: Props) => { 
  return (
    <div className="editor">
      <RichTextEditorHeader />
      <RichTextEditorContent />
    </div>
  );
};

export default RichTextEditor;
