import "./EditorContent.css";

type Props = {};

const RichTextEditorContent = (props: Props) => {
  return (
    <div
      suppressContentEditableWarning={true}
      contentEditable
      className="editor__content"
      placeholder="Type your text here..."
    ></div>
  );
};

export default RichTextEditorContent;
