import { X } from "lucide-react";
import css from "./content.module.css"
import { PopoverContent } from '@radix-ui/react-popover';

interface RememberContentProps {
  remember: string[]
}

export default function RememberContent ({remember}:RememberContentProps) {

  return (
    <PopoverContent className="w-full">
      <div className={css["content"]}>
        {remember.map((text) => (
          <div
            className={css["item"]} 
            key={text}
          >
            <p>{ text }</p>
          </div>
        ))}
      </div>
    </PopoverContent>
  )
}