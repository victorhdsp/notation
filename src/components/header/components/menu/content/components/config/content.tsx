import { View } from "lucide-react";
import css from "./slider.module.css"

import OpacitySlider from "./opacitySlider";

import { HoverCardArrow, HoverCardContent } from "@radix-ui/react-hover-card";

export default function ConfigItemContent () {

  return (
    <HoverCardContent
      side="left"
      align="center"
      className={css["navigation-content"]}
    >
      <div className={css["content-config"]}>
        <h3 className="text-xl font-bold">Sistema</h3>

        <span className={css["opacity-slider-item"]}>
          <View size="18" strokeWidth={1} />
          <OpacitySlider />
        </span>
      </div>
      <HoverCardArrow />
    </HoverCardContent>
  )
}