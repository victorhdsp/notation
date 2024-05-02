import { EditorEvents } from "@tiptap/react";

type EditorUpdate = (props: EditorEvents["update"]) => void

const editorUpdate:EditorUpdate = ({editor}) => {
  const {$from} = editor.state.selection
  const currentLineText = $from.nodeBefore?.textContent
  
  const clearLine = () => 
    editor.commands.deleteRange({from: $from.start(), to: $from.end()})

  switch (currentLineText) {
    case "- ": clearLine(); editor.chain().focus().toggleBulletList().run(); break;
    case "1. ": clearLine(); editor.chain().focus().toggleOrderedList().run(); break;
    case "[] ": clearLine(); editor.chain().focus().toggleTaskList().run(); break;
    case "# ": clearLine(); editor.chain().focus().setHeading({ level: 1 }).run(); break;
    case "## ": clearLine(); editor.chain().focus().setHeading({ level: 2 }).run(); break;
    case "### ": clearLine(); editor.chain().focus().setHeading({ level: 3 }).run(); break;
  }
}

export default editorUpdate