import { Root as AccordionRoot } from "@radix-ui/react-accordion";

import Remember from "./components/remember";
import Archives from "./components/archives";

export default function Actions () {

  return (<>{
    <AccordionRoot type="multiple">
      <Archives />
      <Remember />
    </AccordionRoot>
  }</>)
}