import ConfigItem from "./components/config";

import { PopoverArrow, PopoverContent } from "@radix-ui/react-popover";

export default function MenuContent () {

  return (
    <PopoverContent side="bottom" align="end" className="z-50">
      <ConfigItem />
      <PopoverArrow />
    </PopoverContent>
  )
}