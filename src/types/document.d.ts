export interface DocumentState {
    id: string,
    title: string,
    content: string,
    remember: string[],
    folders?: string[],
}