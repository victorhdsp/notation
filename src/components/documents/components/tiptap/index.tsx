'use client'
import css from "./tiptap.module.css"

import { useEditor, EditorContent } from '@tiptap/react'

import StarterKit from '@tiptap/starter-kit'
import TaskList from '@tiptap/extension-task-list'
import TaskItem from '@tiptap/extension-task-item'
import Highlight from '@tiptap/extension-highlight'

import BubbleMenu from "./components/bubbleMenu"
import { DocumentState } from "../../../../types/document"
import { useEffect } from "react"

interface TipTapProps {
  document: DocumentState,
  onUpdate: (document:DocumentState, newContent: string) => void
}

const Tiptap = ({document, ...props}: TipTapProps) => {
  const editor = useEditor({
    extensions: [
      StarterKit,
      TaskList,
      TaskItem.configure({
        HTMLAttributes: { class: css["taskItem"] }
      }),
      Highlight.configure({
        HTMLAttributes: { class: css["highlight"] }
      })
    ],
    content: document.content,
    onUpdate: ({ editor }) => {
      props.onUpdate(document, editor.getHTML())
    }
  })

  useEffect(() => {
    editor?.commands.setContent(document.content)
    window.scrollTo({top:0})
  }, [document]) 

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