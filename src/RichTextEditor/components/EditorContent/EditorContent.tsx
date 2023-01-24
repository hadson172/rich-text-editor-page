import { forwardRef, ReactNode, useEffect, useRef } from "react";
import "./EditorContent.css";

type Props = {};

const RichTextEditorContent = forwardRef<HTMLDivElement, Props>(
  (props, ref) => {
    return (
      <div
        ref={ref}
        suppressContentEditableWarning={true}
        contentEditable
        className="editor__content"
        onChange={(value) => console.log({ value })}
      ></div>
    );
  }
);

export default RichTextEditorContent;
