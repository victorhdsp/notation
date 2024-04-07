import css from "./tabs.module.css"

import useGlobalStore from "../../../../store/globalStore"
import useDocumentStore from "../../../../store/documentStore";

import cheerio from "cheerio"
import { Plus, X } from "lucide-react";

export default function Tabs () {
  const {documents, createNewDocument, deleteDocument} = useDocumentStore()
  const {selectDocument, selectedDocumentId} = useGlobalStore()

  return (
    <div className={css["tabList"]}>
      {documents.map((document) => {
        const $ = cheerio.load(document.content);
        return (
          <div 
            className={css["tab"]}
            key={`header_${document.id}`}
            data-state={selectedDocumentId === document.id}
            >
            <span 
              className={css["text"]}
              onClick={() => selectDocument(document.id)}
            >
              { document.title || $("h1").first().text() || "Novo documento" }
            </span>
            <button onClick={() => deleteDocument(document.id)}>
              <X size={18} strokeWidth={1} />
            </button>
          </div> 
        )
      })}
      <button className={css["new-tab"]} onClick={createNewDocument}>
        <Plus size={18} strokeWidth={1} />
      </button>
    </div>
  )
}