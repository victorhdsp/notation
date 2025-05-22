"use client";

import { IDocument } from "@/assets/types/document";
import { useEffect } from "react";
import useDocumentStore from "@/store/document";
import Row from "./componentSelector/row";

interface RichEditorProps {
  document: IDocument;
}

export default function RichEditor(props: RichEditorProps) {
  const [setElements] = useDocumentStore(
    (state) => [state.setElements]
  );
  
  useEffect(() => {
    setElements(props.document.elements);
  }, []);

  return (
    <div>
      {props.document.body.map((row) => {
        const id = row.join("-");
        return <Row key={id} body={row}/>;
      })}
    </div>
  );
}