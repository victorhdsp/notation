import { IGenericElement } from "."

export interface IEmpty extends IGenericElement {
    type: "empty",
    content: string
}