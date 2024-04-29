import css from "../generic/generic.module.css"
import { Editor } from "@tiptap/react"
import * as NavigationMenu from '@radix-ui/react-navigation-menu';

import { ChevronDown, List, ListChecks, ListOrdered } from "lucide-react";

import GenericTrigger from "../generic/trigger";
import GenericButton from "../generic/button";

interface MarksItemProps {
  editor: Editor
}

export default function MarksItem (props:MarksItemProps) {
  const handleListOrdered = () => props.editor.chain().focus().toggleOrderedList().run()
  const handleList = () => props.editor.chain().focus().toggleBulletList().run()
  const handleListChecks = () => props.editor.chain().focus().toggleTaskList().run()

  return (
    <NavigationMenu.Item>
      <GenericTrigger 
        Icon={ChevronDown} 
        title="Listas" 
      />
      <NavigationMenu.Content className={css["content"]}>
        <ul className={css["content_list"]}>
          <GenericButton
            Icon={ListOrdered}
            title="Lista ordenada"
            subtitle="1. <Texto>"
            onClick={handleListOrdered}
          />
          <GenericButton
            Icon={List}
            title="Lista não ordenada"
            subtitle="* <Texto>"
            onClick={handleList}
          />
          <GenericButton
            Icon={ListChecks}
            title="Checklist"
            subtitle="[] <Texto>"
            onClick={handleListChecks}
          />
        </ul>
      </NavigationMenu.Content>
    </NavigationMenu.Item>
  )
}