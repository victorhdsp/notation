import { describe, test, expect } from "vitest";
import resolveGrid from "./index";
import mockDocument from "@/tests/__mock__/document/grid";
import { IGrid } from "@/assets/types/document/grid";

describe("useRichEditor - Grid", () => {
    test("quando contem varios elementos, deve retornar os elementos separados por <div> e envolvidos por <div>.", () => {
        const mock = mockDocument.multiples.body[0] as IGrid;
        const response = resolveGrid(mock);

        expect(response).toEqual('<div className="grid" style="grid-template-columns: 1fr 1fr;"><span><p>This is a paragraph</p></span><picture><img src="https://via.placeholder.com/150" alt="Placeholder"/></picture></div>');
    });

    test("quando contem um elemento, deve retornar o elemento envolvido por <div>.", () => {
        const mock = mockDocument.unique.body[0] as IGrid;
        const response = resolveGrid(mock);

        expect(response).toEqual('<div className="grid" style="grid-template-columns: 1fr;"><span><p>This is a paragraph</p></span></div>');
    });

    test("quando contem 'options', deve retornar o grid com os sizes determinados.", () => {
        const mock = mockDocument.optionsComplete.body[0] as IGrid;
        const response = resolveGrid(mock);

        expect(response).toEqual('<div className="grid" style="grid-template-columns: 1fr 1fr;"><span><p>This is a paragraph</p></span><picture><img src="https://via.placeholder.com/150" alt="Placeholder"/></picture></div>');
    });

    test("quando contem 'options' mas não com a quantidade de colunas correta, deve retornar o grid com as colunas faltantes preenchidas com '1fr'.", () => {
        const mock = mockDocument.optionsIncomplete.body[0] as IGrid;
        const response = resolveGrid(mock);

        expect(response).toEqual('<div className="grid" style="grid-template-columns: 2fr 1fr;"><span><p>This is a paragraph</p></span><picture><img src="https://via.placeholder.com/150" alt="Placeholder"/></picture></div>');
    });
});