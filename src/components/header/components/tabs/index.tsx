import css from "./tabs.module.css"

import useGlobalStore from "../../../../store/globalStore"
import useDocumentStore from "../../../../store/documentStore";

import cheerio from "cheerio"
import { Plus, X } from "lucide-react";

export default function Tabs () {
  const {documents: RootDocs} = useDocumentStore()
  const {selectDocument, selectedDocumentId, documentsInTab, removeDocumentFromTab} = useGlobalStore()

  const documents = RootDocs.filter((doc) => documentsInTab.includes(doc.id))

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
            <button onClick={() => removeDocumentFromTab(document.id)}>
              <X size={18} strokeWidth={1} />
            </button>
          </div> 
        )
      })}
    </div>
  )
}