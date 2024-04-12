import css from "./content.module.css"
import * as Accordion from '@radix-ui/react-accordion';

import { DocumentState } from "../../../../../types/document";

import cheerio from "cheerio"
import { File, Plus } from "lucide-react";
import useGlobalStore from "../../../../../store/globalStore";
import useDocumentStore from "../../../../../store/documentStore";
import FileContext from "../../../../context/file";

interface ArchivesContentProps {
  documents: DocumentState[]
}
export default function ArchivesContent ({documents}:ArchivesContentProps) {
  const addDocumentToTab = useGlobalStore(store => store.addDocumentToTab)
  const createNewDocument = useDocumentStore(store => store.createNewDocument)
  
  return (
    <Accordion.Content className="w-full">
      <div className={css["content"]}>
        {documents.map((document) => {
          const $ = cheerio.load(document.content);

          return (
            <FileContext document={document} key={document.id}>
              <span
                className={css["item"]}
                onClick={() => addDocumentToTab(document.id)}
              >
                <File size={16} strokeWidth={1} />
                <p className="pointer-events-none">
                  { document.title || $("h1").first().text() || "Novo documento" }
                </p>
              </span>
            </FileContext>
          )
        })}
        <button className={css["item"]} onClick={createNewDocument}>
          <Plus size={18} strokeWidth={1} />
          <p className="pointer-events-none">Novo documento</p>
        </button>
      </div>
    </Accordion.Content>
  )
}