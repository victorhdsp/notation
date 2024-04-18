import EditFileContentFolder from "./components/folder";
import css from "./content.module.css"
import { PopoverContent } from '@radix-ui/react-popover';

export default function FileEditContent () {

  return (
    <PopoverContent className="w-full">
      <div className={css["content"]}>
        <EditFileContentFolder />
      </div>
    </PopoverContent>
  )
}