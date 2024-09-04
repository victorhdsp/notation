import { IParagraph, IParagraphContent } from "@/assets/types/document/paragraph";

const selectTag = (content: IParagraphContent) => {
    const className = content.className ? ` className="${content.className}"` : "";

    switch (content.type) {
        case "text":
            return `<p${className}>${content.text}</p>`;
        case "strong":
            return `<b${className}>${content.text}</b>`;
        case "italic":
            return `<em${className}>${content.text}</em>`;
        case "underline":
            return `<u${className}>${content.text}</u>`;
    }
}
export default function resolveParagraph(paragraph: IParagraph) {
    let texts = paragraph.content.map((content) => {
        return selectTag(content);
    }).join("");

    return [
        "<span>",
            texts,
        "</span>"
    ].join("");
}