import useDocumentStore from "@/store/document";
import { TypeDocumentElements } from "@/assets/types/document";
import Text from "./paragraph/text";
import Strong from "./paragraph/strong";
import Italic from "./paragraph/italic";
import Underline from "./paragraph/underline";
import Empty from "./empty";

interface ComponentSelectorProps {
    id: string;
}

export default function ComponentSelector(props: ComponentSelectorProps) {
    const elements = useDocumentStore((state) => state.elements);
    const element = elements.find((el) => el.id === props.id);

    if (!element) return <></>;

    const Components = (element: TypeDocumentElements) => {
        switch (element.type) {
            case "text": return <Text {...element}/>;
            case "strong": return <Strong {...element}/>;
            case "italic": return <Italic {...element}/>;
            case "underline": return <Underline {...element}/>;
            case "empty": return <Empty {...element}/>;
            default: return <></>;
        }
    }

    return (
        <Components {...element} />
    );
}