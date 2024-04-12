import { create } from 'zustand'
import { persist } from 'zustand/middleware';

interface GlobalStore {
  selectedDocumentId: string,
  selectDocument: (id: string) => void
  documentsInTab: string[],
  addDocumentToTab: (id: string) => void
  removeDocumentFromTab: (id: string) => void
}

const useGlobalStore = create<GlobalStore>()(
  persist(
    (set) => ({
      selectedDocumentId: '',
      selectDocument: (id) => set((_) => ({ selectedDocumentId: id })),
      documentsInTab: [],
      addDocumentToTab: (id) => set((state) => {
        const ids: string[] = [...state.documentsInTab]

        if (!state.documentsInTab.includes(id)) ids.push(id)

        return { documentsInTab: ids, selectedDocumentId: id}
      }),
      removeDocumentFromTab: (id) => set((state) => {
        const ids: string[] = state.documentsInTab.filter((docId) => docId !== id)

        if (state.selectedDocumentId === id) {
          set({ selectedDocumentId: ids[0] })
        }

        return { documentsInTab: ids }
      })
    }),
    {
      name: 'global-storage'
    }
  )
)

export default useGlobalStore;