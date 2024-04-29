import { FormEvent, useState } from "react"
import useDocumentStore from "../../../../../store/documentStore"
import useGlobalStore from "../../../../../store/globalStore"

export default function EditFileContentFolder () {
  const {documents, addFolder} = useDocumentStore()
  const selectedDocumentId = useGlobalStore(store => store.selectedDocumentId)
  const [text, setText] = useState("")

  const folders: string[] = []

  documents.forEach((doc) => {
    doc.folders?.forEach((folder) => {
      if (!folders.includes(folder)) { folders.push(folder) }
    })
  })

  const handleInput = (event:FormEvent<HTMLInputElement>) => {
    setText(event.currentTarget.value)
  }
  const handleFolderChange = (event:FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    addFolder(selectedDocumentId, text)
  }

  return (
    <form 
      onSubmit={handleFolderChange}
      className="flex items-center gap-1 h-min w-full max-w-[150px]"
    >
      <datalist id="folders">
        {folders.map((folder) => <option key={folder} value={folder} />)}
      </datalist>
      <input 
        type="text"
        className="w-full h-full text-xl py-1 px-2 rounded-md"
        id="folder" 
        name="folder" 
        onChange={handleInput}
        list="folders"
      />
      <button type="submit" className="bg-blue-200 p-1 rounded-md">
        Salvar
      </button>
    </form>
  )
}
