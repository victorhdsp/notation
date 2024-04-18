import css from "./trigger.module.css"
import { Cog } from "lucide-react"

import { PopoverTrigger } from '@radix-ui/react-popover';

export default function RememberTrigger () {
  return (
    <PopoverTrigger className={css["button"]}>
      <Cog size={18} strokeWidth={1} />
    </PopoverTrigger>
  )
}