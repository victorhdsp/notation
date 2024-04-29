import { Cog } from "lucide-react";
import css from "./slider.module.css"

import { HoverCardTrigger } from "@radix-ui/react-hover-card";

export default function ConfigItemTrigger () {

  return (
    <HoverCardTrigger className={css["navigation-trigger"]}>
      <Cog size={18} strokeWidth={1} />
      <span>Configurações</span>
    </HoverCardTrigger>
  )
}