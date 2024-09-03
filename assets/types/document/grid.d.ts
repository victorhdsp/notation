import { BodyDocumentType } from "./index";

export interface IGridOptions {
    type: "options",
    sizes: string[]
}

export interface IGrid {
    type: "grid",
    content: (
        IGridOptions |
        BodyDocumentType
    )[]
}