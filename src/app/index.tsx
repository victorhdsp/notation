import Header from "../components/header";
import Documents from "../components/documents";
import Actions from "../components/actions";
import useDocumentStore from "../store/documentStore";
import useGlobalStore from "../store/globalStore";

function App() {
  const firstDocumentId = useDocumentStore((store) => store.documents[0].id)
  const documents = useDocumentStore((store) => store.documents)
  const {selectDocument, selectedDocumentId} = useGlobalStore()
  
  const document = documents.find(doc => doc.id === selectedDocumentId)

  if (!selectedDocumentId || !document) {
    selectDocument(firstDocumentId)
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
