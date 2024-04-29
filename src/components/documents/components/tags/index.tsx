import css from "./tags.module.css"

import * as Popover from '@radix-ui/react-popover';
import { Plus, X } from "lucide-react"

import useDocumentStore from "../../../../store/documentStore"
import useGlobalStore from "../../../../store/globalStore"
import EditFileContentFolder from "./components/input";


export default function Tags () {
  const {documents, removeFolder} = useDocumentStore()
  const selectedDocumentId = useGlobalStore(store => store.selectedDocumentId)
  
  const document = documents.find((doc) => doc.id === selectedDocumentId)

  return (
    <div className={css["tags"]}>
      <Popover.Root>
        <Popover.Trigger className={css["new-tag"]}>
          <Plus size={14} strokeWidth={1} />
        </Popover.Trigger>
        <Popover.Content className={css["new-tag-content"]} side="right">
          <EditFileContentFolder />
          <Popover.Arrow />
        </Popover.Content>
      </Popover.Root>
 
      {document?.folders?.map((name) => (
        <span 
          className={css["tag"]}
          key={document.id + name}
        >
          <p>{name}</p>
          <button onClick={() => removeFolder(document.id, name)}>
            <X size={14} strokeWidth={1} />
          </button>
        </span>
      ))}
    </div>
  )
}