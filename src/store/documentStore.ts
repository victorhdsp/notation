import { create } from 'zustand'
import { persist } from 'zustand/middleware'

import cheerio from "cheerio"

import { DocumentState } from '../types/document'

interface DocumentStore {
  documents: DocumentState[],
  updateContent: (document:DocumentState) => void
}

const documentsState: DocumentState[] = [
  {
    id: "1",
    title: "",
    content: "<h1>Tip tap, Hello World!</h1>",
    remember: []
  }
]

const useDocumentStore = create<DocumentStore>()(
  persist(
    (set) => ({
      documents: documentsState,
      updateContent: (editedDocument) => set(({documents}) => ({
        documents: documents.map((document) => {
          if (editedDocument.id === document.id) {
            const $ = cheerio.load(editedDocument.content);
            const rememberList:string[] = []
            $("mark").each((_, element) => {
              rememberList.push($(element).text())
            })

            return { ...editedDocument, remember: rememberList };
          } else {
            
            return document
          }
        })
      }))
    }),
    {
      name: 'document-storage'
    }
  )
)

export default useDocumentStore;