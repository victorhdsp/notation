import css from "./trigger.module.css"
import { TextSearch } from "lucide-react"
import * as Accordion from '@radix-ui/react-accordion';

interface RememberProps {
  remember: string[]
}

export default function RememberTrigger ({remember}: RememberProps) {
  return (
    <Accordion.Header>
      <Accordion.Trigger>
        <div 
          className={css["button"]} 
          data-remember={remember.length}
        >
          <TextSearch size={22} strokeWidth={1} />
        </div>
      </Accordion.Trigger>
    </Accordion.Header>
  )
}