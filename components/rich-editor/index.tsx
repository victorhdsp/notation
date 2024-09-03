"use client";

import { useEffect } from "react";
import useRichEditor from "@/components/rich-editor/useRichEditor";

export default function RichEditor() {
  const { read, write } = useRichEditor();

  useEffect(() => {
    // console.log(read());
  }, [read]);

  return <div>RichEditor</div>;
}