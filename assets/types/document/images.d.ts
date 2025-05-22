import { IGenericElement } from "./index";

export interface IImageDefault {
    type: "default",
    src: string,
    alt: string
}

export interface IImageSource {
    type: "source",
    src: string
}

export type TypeImageContent = IImageDefault | IImageSource;

export interface IImage extends IGenericElement {
    type: "image",
    content: TypeImageContent[]
}