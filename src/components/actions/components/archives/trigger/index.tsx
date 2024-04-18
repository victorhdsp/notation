import css from "./trigger.module.css"
import { Folders } from "lucide-react"

import { PopoverTrigger } from '@radix-ui/react-popover';

import useDocumentStore from "../../../../../store/documentStore";

export default function RememberTrigger () {
  const files = useDocumentStore(store => store.documents.length)

  return (
    <PopoverTrigger
      className={css["button"]} 
      data-archives={files}
    >
      <Folders size={22} strokeWidth={1} />
    </PopoverTrigger>
  )
}