import { IDocument } from "@/assets/types/document";

const mockDocumentImageHaveSources: IDocument = {
    head: {
        title: "Mock Document",
        createAt: new Date("2021-01-01"),
        updateAt: new Date("2021-01-01")
    },
    body: [
        {
            type: "image",
            content: [
                {
                    type: "default",
                    src: "https://via.placeholder.com/150",
                    alt: "Placeholder"
                },
                {
                    type: "source",
                    src: "https://via.placeholder.com/150",
                }
            ]
        }
    ]
}

const mockDocumentImageNoHaveSources: IDocument = {
    head: {
        title: "Mock Document",
        createAt: new Date("2021-01-01"),
        updateAt: new Date("2021-01-01")
    },
    body: [
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
}

const mockDocument = {
    haveSources: mockDocumentImageHaveSources,
    noHaveSources: mockDocumentImageNoHaveSources
}

export default mockDocument;