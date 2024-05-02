import css from "../generic/generic.module.css"
import { Editor } from "@tiptap/react"
import * as NavigationMenu from '@radix-ui/react-navigation-menu';

import { ChevronDown, Heading1, Heading2, Heading3 } from "lucide-react";

import GenericTrigger from "../generic/trigger";
import GenericButton from "../generic/button";

interface HeadingsItemProps {
  editor: Editor
}

export default function HeadingsItem (props:HeadingsItemProps) {
  const handleHeading = (level:number=1) => {
    const { $from } = props.editor.state.selection
    props.editor.commands.deleteRange({from: $from.start(), to: $from.end()})
    props.editor.chain().focus().setHeading({ level: (level as any)}).run()
  }

  return (
    <NavigationMenu.Item>
      <GenericTrigger Icon={ChevronDown} title="Textos" />
      <NavigationMenu.Content className={css["content"]}>
        <ul className={css["content_list"]}>
          <GenericButton
            Icon={Heading1}
            title="Nome da página"
            subtitle="# <Nome da página>"
            onClick={() => handleHeading(1)}
          />
          <GenericButton
            Icon={Heading2}
            title="Titulo"
            subtitle="## <Titulo da seção>"
            onClick={() => handleHeading(2)}
          />
          <GenericButton
            Icon={Heading3}
            title="Subtitulo"
            subtitle="### <Subtitulo da seção>"
            onClick={() => handleHeading(3)}
          />
        </ul>
      </NavigationMenu.Content>
    </NavigationMenu.Item>
  )
}