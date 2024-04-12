import css from "./remember.module.css"

import RememberContent from "./content";
import RememberTrigger from "./trigger";
import * as Accordion from '@radix-ui/react-accordion';

import useDocumentStore from "../../../../store/documentStore";
import useGlobalStore from "../../../../store/globalStore";

export default function Remember () {
  const documents = useDocumentStore(store => store.documents)
  const selectedDocumentId = useGlobalStore(store => store.selectedDocumentId)

  const document = documents.find((doc) => doc.id === selectedDocumentId)

  return (<>{
    document && (
      <Accordion.Item 
        className={`${css["remember"]} ${css["actions"]}`} 
        value="remember"
      >
        { document.remember.length !== 0 && 
            <RememberContent remember={document.remember} /> 
        }
        <RememberTrigger remember={document.remember} />
      </Accordion.Item>
    )
  }</>)
}