import css from "./empty.module.scss";
import { IEmpty } from "@/assets/types/document/empty";
import useRichEditor, { ReturnRichEditor } from "@/components/rich-editor/useRichEditor";
import { FocusEventHandler } from "react";

type ReturnEmpty = ReturnRichEditor;

export default function useEmpty(element: IEmpty): ReturnEmpty {
    const richEditor = useRichEditor({ element });

    const handleInput:FocusEventHandler<HTMLElement> = (event) => {
        richEditor.onChangeElement({
            ...element,
            type: "text",
            content: event.currentTarget.textContent || element.content
        });
    }

    const handleFocus:FocusEventHandler<HTMLElement> = (event) => {
        if (element.content === "")
            event.currentTarget.textContent = "";
    }

    

    return {
        ...richEditor,
        className: `${richEditor.className} ${css.is_empty}`,
        onInput: handleInput,
        onFocus: handleFocus
    };
}