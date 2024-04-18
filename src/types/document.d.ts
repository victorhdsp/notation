export interface DocumentState {
    id: string,
    title: string,
    content: string,
    remember: string[],
    folder?: string,
}