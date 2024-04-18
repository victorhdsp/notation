import css from "./fileEdit.module.css"

import FileEditContent from "./content";
import FileEditTrigger from "./trigger";

import { Root as PopoverRoot } from '@radix-ui/react-popover';

import useDocumentStore from "../../../../store/documentStore";
import useGlobalStore from "../../../../store/globalStore";

export default function FileEdit () {
  const documents = useDocumentStore(store => store.documents)
  const selectedDocumentId = useGlobalStore(store => store.selectedDocumentId)

  const document = documents.find((doc) => doc.id === selectedDocumentId)

  return (<>{
    document && (
      <div className={`${css["fileEdit"]} ${css["actions"]}`}>
        <PopoverRoot>
          <FileEditContent /> 
          <FileEditTrigger />
        </PopoverRoot>
      </div>
    )
  }</>)
}