import { View } from "lucide-react";
import css from "./content.module.css"

import { PopoverContent } from '@radix-ui/react-popover';
import OpacitySlider from "./components/opacitySlider";

export default function RememberContent () {

  return (
    <PopoverContent className="w-full">
      <div className={css["content"]}>
        <h3 className="text-xl font-bold">
          Sistema
        </h3>
        <span className={css["opacity-slider"]}>
          <View size="18" strokeWidth={1} />
          <OpacitySlider />
        </span>
      </div>
    </PopoverContent>
  )
}