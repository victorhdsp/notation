import css from "./tabs.module.css"

import useGlobalStore from "../../../../store/globalStore"
import useDocumentStore from "../../../../store/documentStore";

import cheerio from "cheerio"

export default function Tabs () {
  const documents = useDocumentStore(store => store.documents)
  const {selectDocument, selectedDocumentId} = useGlobalStore()

  return (
    <div className={css["tabList"]}>
      {documents.map((document) => {
        const $ = cheerio.load(document.content);
        return (
          <div 
            className={css["tab"]}
            key={`header_${document.id}`}
            onClick={() => selectDocument(document.id)}
            data-state={selectedDocumentId === document.id}
          >
            <span className={css["text"]}>
              { document.title || $("h1").first().text() || "Novo documento" }
            </span>
          </div> 
        )
      })}
    </div>
  )
}