import { describe, test, expect } from "vitest";
import resolveParagraph from "./index";
import mockDocument from "@/tests/__mock__/document/paragraph";
import { IParagraph } from "@/assets/types/document/paragraph";

describe("useRichEditor - Paragraph", () => {
    test("quando varios textos, deve retornar textos separados por <p> e envolvidos por <span>.", () => {
        const mock = mockDocument.multipleParagraph.body[0] as IParagraph;
        const response = resolveParagraph(mock);

        expect(response).toEqual('<span><p>This is </p><p className="font-bold">a paragraph</p></span>');
    });

    test("quando um texto, deve retornar texto em <p> e envolvidos por <span>.", () => {
        const mock = mockDocument.uniqueParagraph.body[0] as IParagraph;
        const response = resolveParagraph(mock);

        expect(response).toEqual('<span><p>This is a paragraph</p></span>');
    });

    test("quanto contem negrito, deve retornar o texto com negrito envolvido por <strong>.", () => {
        const mock = mockDocument.boldParagraph.body[0] as IParagraph;
        const response = resolveParagraph(mock);

        expect(response).toEqual('<span><b>This is a bold paragraph</b></span>');
    });

    test("quanto contem itálico, deve retornar o texto com itálico envolvido por <em>.", () => {
        const mock = mockDocument.italicParagraph.body[0] as IParagraph;
        const response = resolveParagraph(mock);

        expect(response).toEqual('<span><em>This is an italic paragraph</em></span>');
    });

    test("quanto contem sublinhado, deve retornar o texto com sublinhado envolvido por <u>.", () => {
        const mock = mockDocument.underlineParagraph.body[0] as IParagraph;
        const response = resolveParagraph(mock);

        expect(response).toEqual('<span><u>This is an underline paragraph</u></span>');
    });

    test("quanto contem classe, deve retornar o texto com a classe envolvido por <span>.", () => {
        const mock = mockDocument.classParagraph.body[0] as IParagraph;
        const response = resolveParagraph(mock);

        expect(response).toEqual('<span><p className="text-red-500">This is paragraph</p></span>');
    });
});