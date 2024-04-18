import css from "./archives.module.css"

import ArchivesContent from "./content";
import ArchivesTrigger from "./trigger";

import { Root as PopoverRoot } from '@radix-ui/react-popover';

export default function Archives () {
  return (<>{
    document && (
      <div className={`${css["archives"]} ${css["actions"]}`}>
        <PopoverRoot>
          <ArchivesContent /> 
          <ArchivesTrigger />
        </PopoverRoot>
      </div>
    )
  }</>)
}