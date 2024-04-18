'use client'
import css from "./tiptap.module.css"
import 'katex/dist/katex.min.css'

import { useEditor, EditorContent } from '@tiptap/react'

import StarterKit from '@tiptap/starter-kit'
import TaskList from '@tiptap/extension-task-list'
import TaskItem from '@tiptap/extension-task-item'
import Highlight from '@tiptap/extension-highlight'
import MathExtension from '@aarkue/tiptap-math-extension'

import BubbleMenu from "./components/bubbleMenu"
import { DocumentState } from "../../../../types/document"
import { useEffect } from "react"
import useGlobalStore from "../../../../store/globalStore"

interface TipTapProps {
  document: DocumentState,
  onUpdate: (document:DocumentState, newContent: string) => void
}

const Tiptap = ({document, ...props}: TipTapProps) => {
  const selectedDocumentId = useGlobalStore(store => store.selectedDocumentId)
  const editor = useEditor({
    extensions: [
      StarterKit,
      TaskList,
      TaskItem.configure({
        HTMLAttributes: { class: css["taskItem"] }
      }),
      Highlight.configure({
        HTMLAttributes: { class: css["highlight"] }
      }),
      MathExtension.configure({ evaluation: true, addInlineMath:true })
    ],
    content: document.content,
    onUpdate: ({ editor }) => {
      props.onUpdate(document, editor.getHTML())
    }
  })

  useEffect(() => {
    editor?.commands.setContent(document.content)
    window.scrollTo({top:0})
  }, [selectedDocumentId]) 

  return (
    <>
      <EditorContent 
        editor={editor} 
        className={css["editor"]}
      />
      { editor && <BubbleMenu editor={editor} /> } 
    </>
  )
}

export default Tiptap