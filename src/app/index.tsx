import Header from "../components/header";
import Documents from "../components/documents";
import Actions from "../components/actions";
import useDocumentStore from "../store/documentStore";
import useGlobalStore from "../store/globalStore";

function App() {
  const firstDocument = useDocumentStore((store) => store.documents[0])
  const documents = useDocumentStore((store) => store.documents)
  const {selectDocument, selectedDocumentId, addDocumentToTab} = useGlobalStore()
  
  const document = documents.find(doc => doc.id === selectedDocumentId)

  if (!selectedDocumentId || !document && firstDocument) {
    selectDocument(firstDocument.id)
    addDocumentToTab(firstDocument.id)
  }

  return (
    <div>
      <Header />
      <Documents />
      <Actions />
    </div>
  );
}

export default App;
