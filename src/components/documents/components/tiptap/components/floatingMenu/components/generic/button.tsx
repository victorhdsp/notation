import css from "./generic.module.css"
import { LucideIcon } from "lucide-react"

interface ButtonProps {
  title: string
  subtitle: string
  Icon: LucideIcon
  onClick?: () => void
}

export default function GenericButton ({Icon, ...props}: ButtonProps) {
  return (
    <button className={css["button"]} onClick={props.onClick}>
      <div className="p-3 bg-gray-200/30 rounded-md">
        <Icon size={28} strokeWidth={1} />
      </div>
      <div className="flex flex-col gap-1">
        <span className="text-left text-2xl">{props.title}</span>
        <span className="text-left text-sm">{props.subtitle}</span>
      </div>
    </button>
  )
}