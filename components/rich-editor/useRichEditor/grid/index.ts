import { IGrid } from "@/assets/types/document/grid";
import resolveDocument from "../resolvers";

const getGridColumns = (sizes: string[], lenght: number) => {
    const columns: string[] = [...sizes];

    if (sizes.length > 0) {
        lenght = lenght -1;
    }

    for (let i = 0; i < lenght; i++) {
        if (!columns[i]) {
            columns.push("1fr");
        }
    }
    
    return columns;
};

export default function resolveGrid(grid: IGrid) {
    const html:string[] = [];
    const options = grid.content.find((content) => content.type === "options");
    const style = getGridColumns(options?.sizes || [], grid.content.length);
    grid.content.forEach((content) => {
        if (content.type === "options") return;
        html.push(resolveDocument(content));
    });

    return [
        `<div className="grid" style="grid-template-columns: ${style.join(" ")};">`,
            html.join(""),
        "</div>"
    ].join("");
}