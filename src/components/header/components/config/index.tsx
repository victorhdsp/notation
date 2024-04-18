import css from "./config.module.css"

import ConfigContent from "./content";
import ConfigTrigger from "./trigger";

import { Root as PopoverRoot } from '@radix-ui/react-popover';

import useDocumentStore from "../../../../store/documentStore";
import useGlobalStore from "../../../../store/globalStore";

export default function Config () {
  const documents = useDocumentStore(store => store.documents)
  const selectedDocumentId = useGlobalStore(store => store.selectedDocumentId)

  const document = documents.find((doc) => doc.id === selectedDocumentId)

  return (<>{
    document && (
      <div className={`${css["config"]} ${css["actions"]}`} >
        <PopoverRoot>
          <ConfigContent /> 
          <ConfigTrigger />
        </PopoverRoot>
      </div>
    )
  }</>)
}