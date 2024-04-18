import css from "./folder.module.css"

import { AccordionContent, AccordionHeader, AccordionItem, AccordionTrigger } from "@radix-ui/react-accordion";
import { Folder } from "lucide-react";

import { DocumentState } from "../../../../../../../types/document";

import FilesContentArchive from "../archive";

interface FilesContentFoldersProps {
  folder: DocumentState[],
  title: string
}

export default function FilesContentFolders ({folder, title}:FilesContentFoldersProps) {
  
  return (<>{
    title !== 'root' ? (
      <AccordionItem className={css["folder"]} value={title}>
        <AccordionHeader>
          <AccordionTrigger className={css["header"]}>
            <Folder size={16} strokeWidth={1} />
            <p className="pointer-events-none">
              { title }
            </p>
          </AccordionTrigger>
        </AccordionHeader>
        <AccordionContent className={`${css["content"]} px-2`}>
          {folder.map((document) => (
            <FilesContentArchive document={document} key={document.id} />
          ))}
        </AccordionContent>
      </AccordionItem>
    ) : (
      <div className={css["folder"]}>
        <div className={css["content"]}>
          {folder.map((document) => (
            <FilesContentArchive document={document} key={document.id} />
          ))}
        </div>
      </div>
    )
  }</>)
}