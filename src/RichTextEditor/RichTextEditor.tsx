import { ReactNode, useRef, useState } from "react";
import RichTextEditorContent from "./components/EditorContent/EditorContent";
import RichTextEditorHeader from "./components/EditorHeader/EditorHeader";

import "./RichTextEditor.css";

const RichTextEditor = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [debuggerState, setDebuggerState] = useState<string | null>(null);

  return (
    <div className="editor__wrapper">
      <div className="editor">
        <RichTextEditorHeader />
        <RichTextEditorContent ref={ref} />
      </div>
      <button
        onClick={() => setDebuggerState(ref.current?.innerHTML ?? null)}
      >
        Show
      </button>
      <div className="editor__debugger">
        <h2>Debugger:</h2>
        <div className="debugger__content">{debuggerState}</div>
      </div>
    </div>
  );
};

export default RichTextEditor;
