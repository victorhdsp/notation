import css from "./content.module.css"

import { PopoverContent } from '@radix-ui/react-popover';
import { Root as AccordionRoot } from '@radix-ui/react-accordion';
import { Plus } from "lucide-react";

import FilesContentFolders from "./components/folders";

import useDocumentStore from "../../../../../store/documentStore";
import { DocumentState } from "../../../../../types/document";

export default function ArchivesContent () {
  const documents = useDocumentStore(store => store.documents)
  const createNewDocument = useDocumentStore(store => store.createNewDocument)

  const splitedDocuments:{[key: string]: DocumentState[]} = {}

  documents.forEach((document) => {
    const folder = document?.folder || 'root'

    splitedDocuments[folder] ? 
      splitedDocuments[folder].push(document) : 
      splitedDocuments[folder] = [document]
  })
  
  return (
    <PopoverContent className="w-full">
      <div className={css["content"]}>
        <AccordionRoot type="multiple">
          {Object.values(splitedDocuments).map((documents, index) => (
            <FilesContentFolders 
              title={Object.keys(splitedDocuments)[index]} 
              key={`folders_${index}`} 
              folder={documents} 
            />
          ))}
        </AccordionRoot>

        <button className={css["item"]} onClick={createNewDocument}>
          <Plus size={18} strokeWidth={1} />
          <p className="pointer-events-none">Novo documento</p>
        </button>
      </div>
    </PopoverContent>
  )
}