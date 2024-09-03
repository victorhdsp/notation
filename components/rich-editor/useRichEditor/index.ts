import { BodyDocumentType } from "@/assets/types/document";
import resolveParagraph from "./paragraph";

export default function useRichEditor() {
    const write = () => "write";

    function read(document: BodyDocumentType) {
        switch (document.type) {
            case "paragraph":
                return resolveParagraph(document);
            case "grid":
                return "read1";
        }
        return "O tipo de documento não é suportado.";
    }

    return { read, write };
}