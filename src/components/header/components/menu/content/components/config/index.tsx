import {Root as HoverCardRoot, HoverCardPortal} from '@radix-ui/react-hover-card';
import ConfigItemTrigger from "./trigger";
import ConfigItemContent from "./content";

export default function ConfigItem () {

  return (
    <HoverCardRoot>
      <ConfigItemTrigger />
      <HoverCardPortal>
        <ConfigItemContent />
      </HoverCardPortal>
    </HoverCardRoot>
  )
}