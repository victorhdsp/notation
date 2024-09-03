import { IDocument } from "@/assets/types/document";

const mockDocument: IDocument = {
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
                            text: "This is "
                        },
                        {
                            type: "text",
                            text: "a paragraph",
                            className: "font-bold"
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
            content: []
        }
    ]
}

export default mockDocument;