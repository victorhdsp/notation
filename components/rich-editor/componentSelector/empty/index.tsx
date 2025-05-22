import { IEmpty } from "@/assets/types/document/empty";
import useEmpty from "./useEmpty";

export default function Empty(element: IEmpty) {
    const empty = useEmpty(element);
    const placeholder = "Digite alguma coisa";

    return (
        <span {...empty}>
            { element.content || placeholder }
        </span>
    );
}