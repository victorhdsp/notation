import { BodyDocumentType, IDocument } from "@/assets/types/document";

const content: BodyDocumentType[] = [
    {
        type: "paragraph",
        content: [
            {
                type: "text",
                text: "This is a paragraph"
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

const mockDocumentMultipleGrid: IDocument = {
    head: {
        title: "Mock Document",
        createAt: new Date("2021-01-01"),
        updateAt: new Date("2021-01-01")
    },
    body: [
        {
            type: "grid",
            content,
        }
    ]
}
const mockDocumentUniqueGrid: IDocument = {
    head: {
        title: "Mock Document",
        createAt: new Date("2021-01-01"),
        updateAt: new Date("2021-01-01")
    },
    body: [
        {
            type: "grid",
            content: [ content[0] ],
        }
    ]
}
const mockDocumentOptionsComplete: IDocument = {
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
                ...content
            ]
        }
    ]
}
const mockDocumentOptionsIncomplete: IDocument = {
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
                    sizes: ["2fr"]
                },
                ...content
            ]
        }
    ]
}

const mockDocument = {
    multiples: mockDocumentMultipleGrid,
    unique: mockDocumentUniqueGrid,
    optionsComplete: mockDocumentOptionsComplete,
    optionsIncomplete: mockDocumentOptionsIncomplete,
}

export default mockDocument;