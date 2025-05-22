import { IParagraph } from "@/assets/types/document/paragraph";
import useParagraph from "./useParagraph";

export default function Strong(element: IParagraph) {
    const paragraph = useParagraph(element);

    return (
        <strong {...paragraph}>
            { element.content }
        </strong>
    );
}