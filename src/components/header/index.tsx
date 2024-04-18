import css from "./header.module.css"

import Tabs from "./components/tabs";
import Config from "./components/config";

export default function Header () {
  return (
    <header id={css["header"]}>
      <Tabs />
      <Config />
    </header>
  ) 
}