import css from "./documents.module.css"

import Tiptap from "./components/tiptap";

import { DocumentState } from "../../types/document";
import useDocumentStore from "../../store/documentStore";
import useGlobalStore from "../../store/globalStore";
import Tags from "./components/tags";

const defautlDocument: DocumentState = {
  id: "1",
  title: "None",
  content: "<h2>Nenhum documento selecionado</h2>",
  remember: [],
  folders: []
} 

export default function Documents () {
  const {documents, updateContent} = useDocumentStore()
  const selectedDocumentId = useGlobalStore(store => store.selectedDocumentId)

  const document = documents.find((doc) => doc.id === selectedDocumentId)

  const handleUpdate = (document:DocumentState, newContent: string) => {
    updateContent({...document, content: newContent})
  }

  return (
    <main className={css["main"]}>
      { document && (<Tags />) }
      <Tiptap 
        document={document || defautlDocument}
        onUpdate={handleUpdate}
      />
    </main> 
  )
}