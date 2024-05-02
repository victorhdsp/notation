'use client'
import css from "./tiptap.module.css"
import 'katex/dist/katex.min.css'

import { useEffect } from "react"
import { useEditor, EditorContent } from '@tiptap/react'

import StarterKit from '@tiptap/starter-kit'
import TaskList from '@tiptap/extension-task-list'
import TaskItem from '@tiptap/extension-task-item'
import Highlight from '@tiptap/extension-highlight'
import MathExtension from '@aarkue/tiptap-math-extension'
import Placeholder from '@tiptap/extension-placeholder'

import BubbleMenu from "./components/bubbleMenu"
import FloatingMenu from "./components/floatingMenu"

import useGlobalStore from "../../../../store/globalStore"

import { DocumentState } from "../../../../types/document"
import editorUpdate from "./editorUpdate"

interface TipTapProps {
  document: DocumentState,
  onUpdate: (document:DocumentState, newContent: string) => void,
}

const Tiptap = ({document, ...props}: TipTapProps) => {
  const selectedDocumentId = useGlobalStore(store => store.selectedDocumentId)

  const editor = useEditor({
    extensions: [
      StarterKit,
      TaskList,
      TaskItem.configure({ HTMLAttributes: { class: css["taskItem"] } }),
      Highlight.configure({ HTMLAttributes: { class: css["highlight"] } }),
      MathExtension.configure({ evaluation: true, addInlineMath:true }),
      Placeholder.configure({
        placeholder: 'Digite "/" para ver os comandos disponíveis',
      })
    ],
    content: document.content,
    onUpdate: (editorEventsUpdate) => {
      const { editor } = editorEventsUpdate
      props.onUpdate(document, editor.getHTML())
      editorUpdate(editorEventsUpdate)
    },
    editable: selectedDocumentId !== ""
  })

  useEffect(() => {
    editor?.commands.setContent(document.content)
    editor?.setEditable(selectedDocumentId !== "")
    window.scrollTo({top:0})
  }, [selectedDocumentId]) 

  return (
    <>
      <EditorContent 
        editor={editor} 
        className={css["editor"]}
      />
      { editor && <BubbleMenu editor={editor} /> } 
      { editor && <FloatingMenu editor={editor} /> } 
    </>
  )
}

export default Tiptap