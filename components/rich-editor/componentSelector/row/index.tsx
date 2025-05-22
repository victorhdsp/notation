"use client";

import { TypeDocumentBody } from "@/assets/types/document";
import ComponentSelector from "../index";

interface RowProps {
    body: TypeDocumentBody;
}

export default function Row(props: RowProps) {

  return (
    <div className="flex gap-1">
      {props.body.map((id) => (
        <ComponentSelector key={id} id={id}/>
      ))}
    </div>
  );
}