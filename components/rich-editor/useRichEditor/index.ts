import { BodyDocumentType } from "@/assets/types/document";
import resolveDocument from "./resolvers";
import resolveGrid from "./grid";

export default function useRichEditor() {
    const write = () => "write";

    function read(document: BodyDocumentType[]) {
        return document.map((content) => {
            return resolveDocument(content);
        }).join("");
    }

    return { read, write };
}