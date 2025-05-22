import { TypeDocumentElements } from "@/assets/types/document";
import { create } from "zustand";

interface IDocumentStore {
    elements: TypeDocumentElements[];
    setElements: (elements: TypeDocumentElements[]) => void;
    changeElement: (element: TypeDocumentElements) => void;
}

const useDocumentStore = create<IDocumentStore>((set) => ({
    elements: [],
    setElements: (elements) => set((state) => {
        return { elements };
    }),
    changeElement: (element) => set((state) => {
        try {
            const elementIndex = state.elements.findIndex(
                (el) => el.id === element.id
            );
            if (elementIndex === -1) {
                throw new Error("Element not found");
            };
    
            const elements = [...state.elements];
            elements[elementIndex] = element;
    
            return { elements };
        } catch (error) {
            console.error(error);
            return {}
        }
    }),
}));

export default useDocumentStore;