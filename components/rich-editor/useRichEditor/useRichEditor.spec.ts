import { describe, test, expect } from "vitest";
import resolveGrid from "./index";
import mockDocument from "@/tests/__mock__/document";

describe("useRichEditor", () => {
    test("quando envio um documento completo, deve retornar todos os elementos sem mensagem de erro.", () => {
        const mock = mockDocument.complete.body;
        const { read } = resolveGrid();
        const response = read(mock);

        expect(response).toEqual('<div className="grid" style="grid-template-columns: 1fr 1fr;"><span><p>This is a </p><b>a paragraph</b></span><picture><img src="https://via.placeholder.com/150" alt="Placeholder"/></picture></div><span className="is-placeholder">This is a placeholder</span>');
    });

    test("quando envio no documento um elemento que não existe, deve retornar o elemento com a mensagem de erro.", () => {
        const mock = mockDocument.incomplete.body;
        const { read } = resolveGrid();
        const response = read(mock);

        expect(response).toEqual('<span>O tipo de documento não é suportado.</span>');
    });
});