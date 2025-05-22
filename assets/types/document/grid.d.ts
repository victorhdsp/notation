import { TypeDocumentBody, IGenericElement } from "./index";

export interface IGridOptions {
    type: "options",
    sizes: string[]
}

export interface IGrid extends IGenericElement {
    type: "grid",
    content: (
        IGridOptions |
        TypeDocumentBody
    )[]
}