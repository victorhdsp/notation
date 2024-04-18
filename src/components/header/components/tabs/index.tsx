import css from "./tabs.module.css"

import useGlobalStore from "../../../../store/globalStore"
import useDocumentStore from "../../../../store/documentStore";

import cheerio from "cheerio"

import { X } from "lucide-react";
import FileContext from "../../../context/file";

export default function Tabs () {
  const {documents: RootDocs} = useDocumentStore()
  const {selectDocument, selectedDocumentId, documentsInTab, removeDocumentFromTab} = useGlobalStore()

  const documents = RootDocs.filter((doc) => documentsInTab.includes(doc.id))

  return (
    <div className={css["tabList"]}>
      {documents.map((document) => {
        const $ = cheerio.load(document.content);
        return (
          <FileContext document={document} key={`header_${document.id}`}>
            <div 
              className={css["tab"]}
              data-state={selectedDocumentId === document.id}
            >
              <p 
                className={css["text"]}
                onClick={() => selectDocument(document.id)}
              >
                <span className="pointer-events-none">
                  { document.title || $("h1").first().text() || "Novo documento" }
                </span>
              </p>
              <button onClick={() => removeDocumentFromTab(document.id)}>
                <X size={18} strokeWidth={1} />
              </button>
            </div> 
          </FileContext>
        )
      })}
    </div>
  )
}