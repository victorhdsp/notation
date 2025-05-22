import { IImage } from "@/assets/types/document/images";
import Image from "next/image";

export default function Text(element: IImage) {
    return (
        <picture>
            {element.content.map((content, index) => {
                if (content.type === "default") {
                    return (
                        <Image
                            key={index}
                            src={content.src}
                            alt={content.alt}
                        />
                    );
                } else if (content.type === "source") {
                    return (
                        <source
                            key={index}
                            srcSet={content.src}
                        />
                    );
                }
            })}
        </picture>
    );
}