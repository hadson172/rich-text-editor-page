import ActionButton from "./components/ActionButton/ActionButton";
import "./EditorHeader.css";
import { FaBold } from "react-icons/fa";
import { FaItalic } from "react-icons/fa";
import { FaUnderline } from "react-icons/fa";

const RichTextEditorHeader = () => {
  return (
    <div className="editor__header">
      <ActionButton
        icon={<FaBold />}
        onClick={() => surroundSelectionWithNewElement("strong")}
      />
      <ActionButton
        icon={<FaItalic />}
        onClick={() => surroundSelectionWithNewElement("i")}
      />
      <ActionButton
        icon={<FaUnderline />}
        onClick={() => surroundSelectionWithNewElement("u")}
      />
    </div>
  );
};

export default RichTextEditorHeader;

const surroundSelectionWithNewElement = (
  elementName: keyof HTMLElementTagNameMap
) => {
  const element = document.createElement(elementName);
  surroundSelection(element);
};

function surroundSelection(element: HTMLElement) {
  if (window.getSelection) {
    var sel = window.getSelection();
    if (sel && sel.rangeCount) {
      var range = sel.getRangeAt(0).cloneRange();
      range.surroundContents(element);
      sel.removeAllRanges();
      sel.addRange(range);
    }
  }
}
