import { TypeDocumentElements } from "@/assets/types/document";
import useDocumentStore from "@/store/document";
import { HTMLAttributes } from "react";
import { useState } from "react";

export interface ReturnRichEditor extends HTMLAttributes<HTMLElement> {
    onChangeElement: (element: TypeDocumentElements) => void;
}

interface RichEditorProps {
    element: TypeDocumentElements;
}

export default function useRichEditor(props: RichEditorProps): ReturnRichEditor {
    const changeElement = useDocumentStore((state) => state.changeElement);
    const [element, setElement] = useState(props.element);
    
    const handleChangeElement = (changedElement: TypeDocumentElements) => {
        setElement(changedElement);
    }

    const handleBlur = () => {
        if (element !== props.element)
            changeElement(element);
    }

    return {
        className: element.className || "",
        contentEditable: true,
        suppressContentEditableWarning: true,
        onChangeElement: handleChangeElement,
        onBlur: () => handleBlur()
    };
}