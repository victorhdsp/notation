import { describe, test, expect } from "vitest";
import mockDocument from "../../../tests/__mock__/document";
import useRichEditor from "./index";
import { IParagraph } from "@/assets/types/document/paragraph";

describe("useRichEditor", () => {
  test("deve retornar os parágrafos de um documento em JSON.", () => {
    const { read } = useRichEditor();
    const mockParagraph = mockDocument.body[0].content[1] as IParagraph;
    const response = read(mockParagraph);

    expect(response).toEqual("read");

    expect(response).toEqual("<p>Teste de parágrafo</p>");
  });

  test.todo("deve retornar o 'grid' de um documento em JSON.");
  test.todo("deve retornar a 'image' de um documento em JSON.");
  test.todo("deve retornar o 'empty' de um documento em JSON.");
});