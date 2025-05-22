import { IParagraph } from "./paragraph";
import { IImage } from "./images";
import { IGrid } from "./grid";
import { IEmpty } from "./empty";

export interface IGenericElement {
    id: string;
    type: string;
    className?: string;
}

export type TypeDocumentBody = (
    string[]
)

export type TypeDocumentElements = (
    IParagraph | IImage | IGrid | IEmpty
)

export interface IHeadDocument {
    title: string;
    createAt: Date;
    updateAt: Date;
}

export interface IDocument {
	head: IHeadDocument,
	body: TypeDocumentBody[],
    elements: TypeDocumentElements[]
}