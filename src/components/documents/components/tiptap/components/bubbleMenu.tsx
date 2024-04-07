import css from "./bubbleMenu.module.css"
import { BubbleMenu as _BubbleMenu, BubbleMenuProps } from "@tiptap/react"
import { Bold, Bookmark, LucideIcon } from "lucide-react"


interface ButtonProps {
  Icon: LucideIcon
  onClick?: () => void
}

const Button = ({Icon, ...props}:ButtonProps) => (
  <button className={css["button"]} onClick={props.onClick}>
    <Icon size={18} strokeWidth={1} />
  </button>
)

export default function BubbleMenu (props: Partial<BubbleMenuProps>) {
  const handleBold = () => props.editor?.commands.toggleBold()
  const handleBookmark = () => props.editor?.commands.toggleHighlight()
  
  return (
    <_BubbleMenu 
      className={css["bubble_menu"]}
      {...props}
    >
      <Button Icon={Bold} onClick={handleBold}/>
      <div className={css["hr"]} />
      <Button Icon={Bookmark} onClick={handleBookmark} />
    </_BubbleMenu>
  )
}

