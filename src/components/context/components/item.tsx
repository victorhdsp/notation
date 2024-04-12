import css from "../context.module.css"

import { ContextMenuItem } from '@radix-ui/react-context-menu';

interface FileContextProps {
  title: string
  children?: React.ReactNode
  onClick: () => void
}

export default function ContextItem (props:FileContextProps) {
  return (
    <ContextMenuItem 
      className={css["item"]} 
      onClick={props.onClick}
    >
      { props.children }
      <p>{ props.title }</p>
    </ContextMenuItem>
  )
}