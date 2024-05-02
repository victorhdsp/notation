import css from "../generic/generic.module.css"
import { Editor } from "@tiptap/react"
import * as NavigationMenu from '@radix-ui/react-navigation-menu';

import { ChevronDown, List, ListChecks, ListOrdered } from "lucide-react";

import GenericTrigger from "../generic/trigger";
import GenericButton from "../generic/button";

interface MarksItemProps {
  editor: Editor
}

type TypeList = "ordered" | "unordered" | "checks"

export default function MarksItem (props:MarksItemProps) {
  const handleList = (typeList:TypeList) => {
    const { $from } = props.editor.state.selection
    props.editor.commands.deleteRange({from: $from.start(), to: $from.end()})
    
    if (typeList === "ordered") {
      props.editor.chain().focus().toggleOrderedList().run()
    } else if (typeList === "unordered") {
      props.editor.chain().focus().toggleBulletList().run()
    } else if (typeList === "checks") {
      props.editor.chain().focus().toggleTaskList().run()
    }
  }

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
            onClick={() => handleList("ordered")}
          />
          <GenericButton
            Icon={List}
            title="Lista não ordenada"
            subtitle="* <Texto>"
            onClick={() => handleList("unordered")}
          />
          <GenericButton
            Icon={ListChecks}
            title="Checklist"
            subtitle="[] <Texto>"
            onClick={() => handleList("checks")}
          />
        </ul>
      </NavigationMenu.Content>
    </NavigationMenu.Item>
  )
}