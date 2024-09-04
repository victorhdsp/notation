import { describe, test, expect } from "vitest";
import resolveGrid from "./index";
import mockDocument from "@/tests/__mock__/document/empty";
import { IEmpty } from "@/assets/types/document/empty";

describe("useRichEditor - Empty", () => {
    test("quando contem um placeholder, deve retornar um placeholder", () => {
        const mock = mockDocument.placeholder.body[0] as IEmpty;
        const response = resolveGrid(mock);

        expect(response).toEqual('<span className="is-placeholder">This is a placeholder</span>');
    });

    test("quando não contem um placeholder, deve retornar nada", () => {
        const mock = mockDocument.empty.body[0] as IEmpty;
        const response = resolveGrid(mock);

        expect(response).toEqual('');
    });
});