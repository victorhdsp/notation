import css from "./archive.module.css"

import { File } from "lucide-react";
import cheerio from "cheerio"

import FileContext from "../../../../../../context/file";

import useGlobalStore from "../../../../../../../store/globalStore";

import { DocumentState } from "../../../../../../../types/document";

interface FilesContentArchiveProps {
  document: DocumentState
}

export default function FilesContentArchive ({document}:FilesContentArchiveProps) {
  const $ = cheerio.load(document.content);
  const addDocumentToTab = useGlobalStore(store => store.addDocumentToTab)
  
  return (
    <FileContext document={document}>
      <span
        className={css["archive"]}
        onClick={() => addDocumentToTab(document.id)}
      >
        <File size={16} strokeWidth={1} />
        <p className="pointer-events-none">
          { document.title || $("h1").first().text() || "Novo documento" }
        </p>
      </span>
    </FileContext>
  )
}