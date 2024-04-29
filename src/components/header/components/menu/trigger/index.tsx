import css from "./trigger.module.css"
import { Menu } from "lucide-react"

import { PopoverTrigger } from "@radix-ui/react-popover";

export default function MenuTrigger () {
  return (
    <PopoverTrigger className={css["button"]}>
      <Menu size={18} strokeWidth={1} />
    </PopoverTrigger>
  )
}