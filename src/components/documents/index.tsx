import css from "./documents.module.css"

import Tiptap from "./components/tiptap";
import { DocumentState } from "../../types/document";
import useDocumentStore from "../../store/documentStore";
import useGlobalStore from "../../store/globalStore";

export default function Documents () {
  const {documents, updateContent} = useDocumentStore()
  const selectedDocumentId = useGlobalStore(store => store.selectedDocumentId)

  const document = documents.find((doc) => doc.id === selectedDocumentId)

  const handleUpdate = (document:DocumentState, newContent: string) => {
    updateContent({...document, content: newContent})
  }

  return (
    <main className={css["main"]}>
      {
        document ? (
          <Tiptap 
            document={document}
            onUpdate={handleUpdate}
          />
        ) :
        "Você não tem documentos"
      }
    </main> 
  )
}