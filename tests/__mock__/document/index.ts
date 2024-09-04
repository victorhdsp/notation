import { IDocument } from "@/assets/types/document";

const mockDocumentComplete: IDocument = {
    head: {
        title: "Mock Document",
        createAt: new Date("2021-01-01"),
        updateAt: new Date("2021-01-01")
    },
    body: [
        {
            type: "grid",
            content: [
                {
                    type: "options",
                    sizes: ["1fr", "1fr"]
                },
                {
                    type: "paragraph",
                    content: [
                        {
                            type: "text",
                            text: "This is a "
                        },
                        {
                            type: "strong",
                            text: "a paragraph"
                        },
                    ]
                },
                {
                    type: "image",
                    content: [
                        {
                            type: "default",
                            src: "https://via.placeholder.com/150",
                            alt: "Placeholder"
                        }
                    ]
                }
            ]
        },
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
};
const mockDocumentInComplete: IDocument = {
    head: {
        title: "Mock Document",
        createAt: new Date("2021-01-01"),
        updateAt: new Date("2021-01-01")
    },
    body: [
        {
            type: "other" as "empty",
            content: []
        }
    ]
};

const mockDocument = {
    complete: mockDocumentComplete,
    incomplete: mockDocumentInComplete
};

export default mockDocument;