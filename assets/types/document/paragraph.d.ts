export interface IParagraph {
	type: "paragraph",
	content: {
        type: "text",
        text: string,
        className?: string
    }[]
}
