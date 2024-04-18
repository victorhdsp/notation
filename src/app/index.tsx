import css from './app.module.css'

import Header from "../components/header";
import Documents from "../components/documents";
import Actions from "../components/actions";
import useDocumentStore from "../store/documentStore";
import useGlobalStore from "../store/globalStore";
import useConfigStore from "../store/configStore";

import { useEffect } from "react";
import { appWindow } from "@tauri-apps/api/window"

function App() {
  const firstDocument = useDocumentStore((store) => store.documents[0])
  const documents = useDocumentStore((store) => store.documents)
  const {selectDocument, selectedDocumentId, addDocumentToTab} = useGlobalStore()
  const opacityBackground = useConfigStore((state) => state.opacityBackground)
  
  const document = documents.find(doc => doc.id === selectedDocumentId)

  if (!selectedDocumentId || !document && firstDocument) {
    selectDocument(firstDocument.id)
    addDocumentToTab(firstDocument.id)
  }

  useEffect(() => {
    appWindow.setDecorations(true)
  }, [])

  return (
    <div 
      id={css["app"]}
      style={{ backgroundColor: `rgba(255, 255, 255, ${(opacityBackground+1) / 100})` }}
    >
      <Header />
      <Documents />
      <Actions />
    </div>
  );
}

export default App;
