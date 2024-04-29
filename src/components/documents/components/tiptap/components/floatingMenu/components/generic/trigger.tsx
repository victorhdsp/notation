import { LucideIcon } from "lucide-react";
import css from "./generic.module.css"
import { NavigationMenuTrigger } from "@radix-ui/react-navigation-menu";

interface TriggerProps {
  title: string
  Icon: LucideIcon
}

export default function GenericTrigger ({Icon, title}:TriggerProps) {
  return (
    <NavigationMenuTrigger className={css["trigger"]}>
      <span className="">{title}</span>
      <span className=""><Icon size={16} strokeWidth={1} /></span>
    </NavigationMenuTrigger>
  )
}