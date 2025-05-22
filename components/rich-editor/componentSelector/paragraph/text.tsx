import { IParagraph } from "@/assets/types/document/paragraph";
import useParagraph from "./useParagraph";

export default function Text(element: IParagraph) {
    const paragraph = useParagraph(element);

    return (
        <p {...paragraph}>
            { element.content }
        </p>
    );
}