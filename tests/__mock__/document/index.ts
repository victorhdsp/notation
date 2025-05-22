import { IDocument } from "@/assets/types/document";

const mockDocument: IDocument = {
    head: {
        title: "Mock Document",
        createAt: new Date(),
        updateAt: new Date()
    },
    body: [
        ["1", "2"],
        ["3"],
        ["4"]
    ],
    elements: [
        {
            id: "1",
            type: "text",
            content: "Hello"
        },
        {
            id: "2",
            type: "strong",
            content: "World"
        },
        {
            id: "3",
            type: "italic",
            content: "Ola mundo"
        },
        {
            id: "4",
            type: "empty",
            content: ""
        }
    ]
}

export default mockDocument;