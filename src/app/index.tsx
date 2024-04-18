import Header from "../components/header";
import Documents from "../components/documents";
import Actions from "../components/actions";
import useDocumentStore from "../store/documentStore";
import useGlobalStore from "../store/globalStore";
import useConfigStore from "../store/configStore";

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

  return (
    <div 
      className="min-h-screen"
      style={{ backgroundColor: `rgba(255, 255, 255, ${(opacityBackground+1) / 100})` }}
    >
      <Header />
      <Documents />
      <Actions />
    </div>
  );
}

export default App;
