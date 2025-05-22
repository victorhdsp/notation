import { IParagraph } from "@/assets/types/document/paragraph";
import { DetailedHTMLProps, HTMLAttributes } from "react";
import useRichEditor from "../../useRichEditor";

type ReturnParagraph = DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>;

export default function useParagraph(element: IParagraph): ReturnParagraph {
    const richEditor = useRichEditor({ element });

    const handleInput = (e: React.FormEvent<HTMLParagraphElement>) => {
        richEditor.onChangeElement({
            ...element,
            content: e.currentTarget.textContent || element.content
        });
    }

    return {
        ...richEditor,
        onInput: handleInput,
    };
}