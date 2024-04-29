import { create } from 'zustand'
import { persist } from 'zustand/middleware'

import cheerio from "cheerio"

import { DocumentState } from '../types/document'
import useGlobalStore from './globalStore'

const addDocumentToTab = useGlobalStore.getState().addDocumentToTab

interface DocumentStore {
  documents: DocumentState[],
  updateContent: (document:DocumentState) => void,
  createNewDocument: () => void,
  deleteDocument: (documentId: string) => void

  addFolder: (documentId: string, folderName: string) => void,
  removeFolder: (documentId: string, folderName: string) => void
}

const documentsState: DocumentState[] = [
  {
    id: "1",
    title: "",
    content: "<h1>Tip tap, Hello World!</h1>",
    remember: [],
    folders: []
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
      })),
      createNewDocument: () => set(({documents}) => {
        const newDocument: DocumentState = {
          id: window.crypto.randomUUID(),
          title: "",
          content: "",
          remember: [],
          folders: []
        }
        
        setTimeout(() => addDocumentToTab(newDocument.id), 0)

        return { documents: [ ...documents, newDocument ] }
      }),
      deleteDocument: (documentId) => set(({documents}) => {
        if (documents.length > 1) {
          return { documents: documents.filter(doc => doc.id !== documentId) }
        } else {
          return { documents }
        }
      }),
      addFolder: (documentId, folderName) => set(({documents}) => ({
        documents: documents.map((document) => {
          if (document.id === documentId) {
            const folders = document.folders || []
            folders.push(folderName)
            return { ...document, folders }
          } else {
            return document
          }
        })
      })),
      removeFolder: (documentId, folderName) => set(({documents}) => ({
        documents: documents.map((document) => {
          if (document.id === documentId) {
            const folders = document.folders || []
            return { ...document, folders: folders.filter((folder) => folder !== folderName) }
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