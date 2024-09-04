import { IEmpty } from "@/assets/types/document/empty";

export default function resolveEmpty(document: IEmpty) {
    const placeholder = document.content.map((content) => {
        return [
            '<span className="is-placeholder">',
                content.text,
            "</span>"
        ].join("");
    }).join("");

    return placeholder;
}