import css from "./trigger.module.css"
import { FileCog } from "lucide-react"
import { PopoverTrigger } from '@radix-ui/react-popover';

export default function FileEditTrigger () {
  return (
    <PopoverTrigger>
      <div className={css["button"]}>
        <FileCog size={22} strokeWidth={1} />
      </div>
    </PopoverTrigger>
  )
}