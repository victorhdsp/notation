import { IGenericElement } from "./index";

export interface IParagraph extends IGenericElement {
    type: "text" | "strong" | "italic" | "underline",
	content: string
}
