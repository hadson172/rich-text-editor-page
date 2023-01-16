import RichTextEditorContent from "./components/EditorContent/EditorContent";
import RichTextEditorHeader from "./components/EditorHeader/EditorHeader";

import "./RichTextEditor.css";

const RichTextEditor = () => {
  return (
    <div className="editor">
      <RichTextEditorHeader />
      <RichTextEditorContent />
    </div>
  );
};

export default RichTextEditor;
