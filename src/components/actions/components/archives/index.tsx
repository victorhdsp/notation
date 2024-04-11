import css from "./archives.module.css"

import ArchivesContent from "./content";
import ArchivesTrigger from "./trigger";
import * as Accordion from '@radix-ui/react-accordion';

import useDocumentStore from "../../../../store/documentStore";

export default function Archives () {
  const documents = useDocumentStore(store => store.documents)

  return (<>{
    document && (
      <Accordion.Item 
        className={`${css["archives"]} ${css["actions"]}`} 
        value="archives"
      >
        <ArchivesContent documents={documents} /> 
        <ArchivesTrigger files={documents.length} />
      </Accordion.Item>
    )
  }</>)
}