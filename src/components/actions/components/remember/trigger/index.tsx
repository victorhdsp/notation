import css from "./trigger.module.css"
import { TextSearch } from "lucide-react"
import { PopoverTrigger } from '@radix-ui/react-popover';

interface RememberProps {
  remember: string[]
}

export default function RememberTrigger ({remember}: RememberProps) {
  return (
    <PopoverTrigger>
      <div 
        className={css["button"]} 
        data-remember={remember.length}
      >
        <TextSearch size={22} strokeWidth={1} />
      </div>
    </PopoverTrigger>
  )
}