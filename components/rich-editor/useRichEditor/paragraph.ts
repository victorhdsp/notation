import { IParagraph } from "@/assets/types/document/paragraph";

export default function resolveParagraph(paragraph: IParagraph) {
    return paragraph.content.map((content) => {
        let className = "";

        if (content.className) {
            ` className="${content.className}"`
        }	
        
        if (content.type === "text") {
            return `<p${className}>${content.text}</p>`
        }
        return "";
    }).join("");
}