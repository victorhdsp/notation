import { IParagraph } from "./paragraph";
import { IImage } from "./images";
import { IGrid } from "./grid";
import { IEmpty } from "./empty";

export type BodyDocumentType = (
    IParagraph |
    IImage |
    IGrid | 
    IEmpty
)

export interface IHeadDocument {
    title: string;
    createAt: Date;
    updateAt: Date;
}

export interface IDocument {
	head: IHeadDocument,
	body: BodyDocumentType[]
}