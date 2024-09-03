export interface IImageDefault {
    type: "default",
    src: string,
    alt: string,
    className?: string
}

export interface IImageSource {
    type: "source",
    src: string
}

export interface IImage {
    type: "image",
    content: (IImageDefault | IImageSource)[]
}