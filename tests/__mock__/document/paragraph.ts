import { IParagraph } from "@/assets/types/document/paragraph";

const mockDocumentText: IParagraph = {
    id: "1",
    type: "text",
    content: "Hello"
}

const mockDocumentStrong: IParagraph = {
    id: "2",
    type: "strong",
    content: "World"
}

const mockDocumentItalic: IParagraph = {
    id: "3",
    type: "italic",
    content: "Ola mundo"
}

const mockDocumentUnderline: IParagraph = {
    id: "4",
    type: "underline",
    content: "Hello World"
}

const mockDocumentTextClass: IParagraph = {
    id: "4",
    type: "text",
    content: "Hello World",
    className: "bg-red-500"
}

const mockDocument = {
    Text :mockDocumentText,
    Strong :mockDocumentStrong,
    Italic :mockDocumentItalic,
    Underline :mockDocumentUnderline,
    TextClass :mockDocumentTextClass
}

export default mockDocument;