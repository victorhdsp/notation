import { IParagraph } from "@/assets/types/document/paragraph";
import useParagraph from "./useParagraph";

export default function Underline(element: IParagraph) {
    const paragraph = useParagraph(element);

    return (
        <u {...paragraph}>
            { element.content }
        </u>
    );
}