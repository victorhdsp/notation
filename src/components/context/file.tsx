import css from "./context.module.css"

import * as ContextMenu from '@radix-ui/react-context-menu';
import ContextItem from './components/item';

import { DocumentState } from '../../types/document';
import useDocumentStore from "../../store/documentStore";
import { Trash } from "lucide-react";

interface FileContextProps {
  children: React.ReactNode
  document: DocumentState
}

export default function FileContext (props:FileContextProps) {
  const deleteDocument = useDocumentStore(store => store.deleteDocument)

  const handleDelete = () => deleteDocument(props.document.id)

  return (
    <ContextMenu.Root>
      <ContextMenu.Trigger>
        {props.children}
      </ContextMenu.Trigger>

      <ContextMenu.Content className={css["content"]}>
        <ContextItem title="Deletar" onClick={handleDelete}>
          <Trash size={16} strokeWidth={1} />
        </ContextItem>
      </ContextMenu.Content>
    </ContextMenu.Root>
  )
}