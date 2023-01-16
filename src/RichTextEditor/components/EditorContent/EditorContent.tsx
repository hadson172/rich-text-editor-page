import "./EditorContent.css";

const RichTextEditorContent = () => {
  return (
    <div
      suppressContentEditableWarning={true}
      contentEditable
      className="editor__content"
    ></div>
  );
};

export default RichTextEditorContent;
