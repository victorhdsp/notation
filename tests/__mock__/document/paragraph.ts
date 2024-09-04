import { IDocument } from "@/assets/types/document";

const mockDocumentMultipleParagraph: IDocument = {
    head: {
        title: "Mock Document",
        createAt: new Date("2021-01-01"),
        updateAt: new Date("2021-01-01")
    },
    body: [
        {
            type: "paragraph",
            content: [
                {
                    type: "text",
                    text: "This is "
                },
                {
                    type: "text",
                    text: "a paragraph",
                    className: "font-bold"
                },
            ]
        }
    ]
}
const mockDocumentUniqueParagraph: IDocument = {
    head: {
        title: "Mock Document",
        createAt: new Date("2021-01-01"),
        updateAt: new Date("2021-01-01")
    },
    body: [
        {
            type: "paragraph",
            content: [
                {
                    type: "text",
                    text: "This is a paragraph"
                }
            ]
        }
    ]
}
const mockDocumentBoldParagraph: IDocument = {
    head: {
        title: "Mock Document",
        createAt: new Date("2021-01-01"),
        updateAt: new Date("2021-01-01")
    },
    body: [
        {
            type: "paragraph",
            content: [
                {
                    type: "strong",
                    text: "This is a bold paragraph"
                }
            ]
        }
    ]
}
const mockDocumentItalicParagraph: IDocument = {
    head: {
        title: "Mock Document",
        createAt: new Date("2021-01-01"),
        updateAt: new Date("2021-01-01")
    },
    body: [
        {
            type: "paragraph",
            content: [
                {
                    type: "italic",
                    text: "This is an italic paragraph"
                }
            ]
        }
    ]
}
const mockDocumentUnderlineParagraph: IDocument = {
    head: {
        title: "Mock Document",
        createAt: new Date("2021-01-01"),
        updateAt: new Date("2021-01-01")
    },
    body: [
        {
            type: "paragraph",
            content: [
                {
                    type: "underline",
                    text: "This is an underline paragraph"
                }
            ]
        }
    ]
}
const mockDocumentClassParagraph: IDocument = {
    head: {
        title: "Mock Document",
        createAt: new Date("2021-01-01"),
        updateAt: new Date("2021-01-01")
    },
    body: [
        {
            type: "paragraph",
            content: [
                {
                    type: "text",
                    className: "text-red-500",
                    text: "This is paragraph"
                }
            ]
        }
    ]
}

const mockDocument = {
    multipleParagraph: mockDocumentMultipleParagraph,
    uniqueParagraph: mockDocumentUniqueParagraph,
    boldParagraph: mockDocumentBoldParagraph,
    italicParagraph: mockDocumentItalicParagraph,
    underlineParagraph: mockDocumentUnderlineParagraph,
    classParagraph: mockDocumentClassParagraph
}

export default mockDocument;