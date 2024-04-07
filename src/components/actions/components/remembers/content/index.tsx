import css from "./content.module.css"
import * as Accordion from '@radix-ui/react-accordion';

interface RememberContentProps {
  remember: string[]
}

export default function RememberContent ({remember}:RememberContentProps) {

  return (
    <Accordion.Content className="w-full">
      <div className={css["content"]}>
        {remember.map((text) => (
          <p
            className={css["item"]} 
            key={text}
          >
            { text }
          </p>
        ))}
      </div>
    </Accordion.Content>
  )
}