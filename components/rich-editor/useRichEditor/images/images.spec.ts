import { describe, test, expect } from "vitest";
import mockDocument from "@/tests/__mock__/document/image";
import resolveImage from "./index";
import { IImage } from "@/assets/types/document/images";

describe("useRichEditor - images", () => {
    test("quando contem sources, deve retornar um picture com sources", () => {
        const mock = mockDocument.haveSources.body[0] as IImage;
        const response = resolveImage(mock);

        expect(response).toEqual('<picture><img src="https://via.placeholder.com/150" alt="Placeholder"/><source srcset="https://via.placeholder.com/150"/></picture>');
    });

    test("quando não contem sources, deve retornar um picture com img", () => {
        const mock = mockDocument.noHaveSources.body[0] as IImage;
        const response = resolveImage(mock);

        expect(response).toEqual('<picture><img src="https://via.placeholder.com/150" alt="Placeholder"/></picture>');
    });
});