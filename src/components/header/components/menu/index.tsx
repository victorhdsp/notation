import css from "./config.module.css"

import MenuContent from "./content";
import MenuTrigger from "./trigger";

import {PopoverPortal, Root as PopoverRoot} from '@radix-ui/react-popover';

export default function Menu () {
  return (<>{
    <div className={`${css["config"]} ${css["actions"]}`} >
      <PopoverRoot>
        <MenuTrigger />
        <PopoverPortal>
          <MenuContent />
        </PopoverPortal>
      </PopoverRoot>
    </div>
  }</>)
}