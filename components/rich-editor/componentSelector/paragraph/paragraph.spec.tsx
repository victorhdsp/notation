import { describe, test, expect } from "vitest";
import { render } from "@testing-library/react";
import mockDocument from "@/tests/__mock__/document/paragraph";
import Text from "./text";
import Strong from "./strong";
import Italic from "./italic";
import Underline from "./underline";

describe("Paragraph components", () => {
    test("Deve retornar um texto comum, sem classes", async () => {
        const mock = mockDocument.Text;
        const screen = render(<Text {...mock} />);
        const result = screen.container.querySelector("p");

        if (!result) throw new Error("Element not found");

        expect(result).toBeTruthy();
        expect(result?.textContent).toBe("Hello");
        expect(result?.classList.length).toBe(0);
    });

    test("Retornar um texto em negrito", async () => {
        const mock = mockDocument.Strong;
        const screen = render(<Strong {...mock} />);
        const result = screen.container.querySelector("strong");

        expect(result).toBeTruthy();
        expect(result?.textContent).toBe("World");
    });

    test("Retornar um texto em itálico", async () => {
        const mock = mockDocument.Italic;
        const screen = render(<Italic {...mock} />);
        const result = screen.container.querySelector("em");

        expect(result).toBeTruthy();
        expect(result?.textContent).toBe("Ola mundo");
    });

    test("Retornar um texto sublinhado", async () => {
        const mock = mockDocument.Underline;
        const screen = render(<Underline {...mock} />);
        const result = screen.container.querySelector("u");

        expect(result).toBeTruthy();
        expect(result?.textContent).toBe("Hello World");
    });
    
    test("Retornar um texto com classe", async () => {
        const mock = mockDocument.TextClass;
        const screen = render(<Underline {...mock} />);
        const result = screen.container.querySelector("u");

        expect(result).toBeTruthy();
        expect(result?.textContent).toBe("Hello World");
        expect(result?.classList.contains("bg-red-500")).toBe(true);
    });
});