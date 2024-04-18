import { create } from 'zustand'
import { persist } from 'zustand/middleware';

interface ConfigStore {
  opacityBackground: number,
  setOpacityBackground: (opacity: number) => void
}

const useConfigStore = create<ConfigStore>()(
  persist(
    (set) => ({
      opacityBackground: 80,
      setOpacityBackground: (opacity) => set(() => ({ opacityBackground: opacity }))
    }),
    {
      name: 'global-storage'
    }
  )
)

export default useConfigStore;