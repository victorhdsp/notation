import { create } from 'zustand'
import { persist } from 'zustand/middleware';

interface GlobalStore {
  selectedDocumentId?: string,
  selectDocument: (id: string) => void
}

const useGlobalStore = create<GlobalStore>()(
  persist(
    (set) => ({
      selectDocument: (id) => set((_) => ({ selectedDocumentId: id }))
    }),
    {
      name: 'global-storage'
    }
  )
)

export default useGlobalStore;