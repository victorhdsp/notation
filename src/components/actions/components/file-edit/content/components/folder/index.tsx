import { FormEvent } from "react"
import useDocumentStore from "../../../../../../../store/documentStore"
import useGlobalStore from "../../../../../../../store/globalStore"

export default function EditFileContentFolder () {
  const {documents, changeFolder} = useDocumentStore()
  const selectedDocumentId = useGlobalStore(store => store.selectedDocumentId)

  const document = documents.find((doc) => doc.id === selectedDocumentId)

  const folders = documents.map((doc) => ({folder: doc.folder})).filter((doc, index, self) =>
    index === self.findIndex((t) => (
      t.folder === doc.folder
    ))
  )

  const handleFolderChange = (event:FormEvent<HTMLInputElement>) => {
    changeFolder(selectedDocumentId, event.currentTarget.value)
  }

  return (
    <span className="flex items-center gap-3 h-min w-full">
      <label htmlFor="folder" className="text-xl font-bold">
        Pasta: 
      </label>
      <datalist id="folders">
        {folders.map((doc) => (
          <option key={doc.folder} value={doc.folder} />
        ))}
      </datalist>
      <input 
        type="text"
        className="w-full h-full text-xl py-1 px-2 rounded-sm"
        id="folder" 
        name="folder" 
        defaultValue={document?.folder}
        onInput={handleFolderChange}
        list="folders"
      />
    </span>
  )
}