import css from "./floatingMenu.module.css"

import { FloatingMenu as _FloatingMenu, Editor } from "@tiptap/react"
import * as NavigationMenu from '@radix-ui/react-navigation-menu';

import HeadingsItem from "./components/headings";
import MarksItem from "./components/marks";

interface FloatingMenuProps {
  editor: Editor
}

export default function FloatingMenu (props: FloatingMenuProps) {
  const shouldShow = ({state}:any) => {
    const {$from} = state.selection
    const currentLineText = $from.nodeBefore?.textContent
    return currentLineText === "/"
  }
  
  return (
    <_FloatingMenu 
      {...props} 
      className={css["floating_menu"]} 
      shouldShow={shouldShow}
    >
      <NavigationMenu.Root className={css["navigation_menu_root"]}>
        <NavigationMenu.List className={css["navigation_menu_list"]}>
          <HeadingsItem editor={props.editor} />
          <MarksItem editor={props.editor} />
        </NavigationMenu.List>
      </NavigationMenu.Root>
    </_FloatingMenu>
  )
}

