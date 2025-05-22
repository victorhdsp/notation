import { IParagraph } from "@/assets/types/document/paragraph";
import useParagraph from "./useParagraph";

export default function Italic(element: IParagraph) {
    const paragraph = useParagraph(element);

    return (
        <em {...paragraph}>
            { element.content }
        </em>
    );
}