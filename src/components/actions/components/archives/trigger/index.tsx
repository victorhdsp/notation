import css from "./trigger.module.css"
import { Folder } from "lucide-react"
import * as Accordion from '@radix-ui/react-accordion';

interface ArchivesTriggerProps {
  files: number
}

export default function RememberTrigger ({files}: ArchivesTriggerProps) {
  return (
    <Accordion.Header>
      <Accordion.Trigger>
        <div 
          className={css["button"]} 
          data-archives={files}
        >
          <Folder size={22} strokeWidth={1} />
        </div>
      </Accordion.Trigger>
    </Accordion.Header>
  )
}