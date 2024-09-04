import { BodyDocumentType } from "@/assets/types/document";
import resolveGrid from "./grid";
import resolveParagraph from "./paragraph";
import resolveImage from "./images";
import resolveEmpty from "./empty";

export default function resolveDocument(document: BodyDocumentType): string {
    switch (document.type) {
        case "paragraph":
            return resolveParagraph(document);
        case "grid":
            return resolveGrid(document);
        case "image":
            return resolveImage(document);
        case "empty":
            return resolveEmpty(document);
    }
    return "<span>O tipo de documento não é suportado.</span>";
}