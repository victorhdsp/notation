import css from "./remember.module.css"

import RememberContent from "./content";
import RememberTrigger from "./trigger";

import { Root as PopoverRoot } from '@radix-ui/react-popover';

import useDocumentStore from "../../../../store/documentStore";
import useGlobalStore from "../../../../store/globalStore";

export default function Remember () {
  const documents = useDocumentStore(store => store.documents)
  const selectedDocumentId = useGlobalStore(store => store.selectedDocumentId)

  const document = documents.find((doc) => doc.id === selectedDocumentId)

  return (<>{
    document && (
      <div className={`${css["remember"]} ${css["actions"]}`}>
        <PopoverRoot>
          { document.remember.length !== 0 && 
              <RememberContent remember={document.remember} /> 
          }
          <RememberTrigger remember={document.remember} />
        </PopoverRoot>
      </div>
    )
  }</>)
}