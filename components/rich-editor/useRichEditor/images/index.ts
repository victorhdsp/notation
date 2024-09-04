import { IImage } from "@/assets/types/document/images";

export default function resolveImage(image: IImage) {
    const picture = image.content.map((content) => {
        if (content.type === "source") {
            return `<source srcset="${content.src}"/>`
        }

        let className = "";

        if (content.className) {
            className = ` className="${content.className}"`
        }

        return `<img${className} src="${content.src}" alt="${content.alt}"/>`
    });
    
    return `<picture>${picture.join("")}</picture>`;
}