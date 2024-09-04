import { IDocument } from "@/assets/types/document";

const mockDocumentEmptyPlaceholder: IDocument = {
    head: {
        title: "Mock Document",
        createAt: new Date("2021-01-01"),
        updateAt: new Date("2021-01-01")
    },
    body: [
        {
            type: "empty",
            content: [
                {
                    type: "placeholder",
                    text: "This is a placeholder"
                }
            ]
        }
    ]
}
const mockDocumentEmpty: IDocument = {
    head: {
        title: "Mock Document",
        createAt: new Date("2021-01-01"),
        updateAt: new Date("2021-01-01")
    },
    body: [
        {
            type: "empty",
            content: []
        }
    ]
}

const mockDocument = {
    placeholder: mockDocumentEmptyPlaceholder,
    empty: mockDocumentEmpty,
}

export default mockDocument;