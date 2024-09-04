export interface IParagraphContent {
    type: "text" | "strong" | "italic" | "underline",
    text: string,
    className?: string
}

export interface IParagraph {
	type: "paragraph",
	content: IParagraphContent[]
}
