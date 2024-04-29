import css from "./header.module.css"

import Tabs from "./components/tabs";
import Menu from "./components/menu";

export default function Header () {
  return (
    <header id={css["header"]}>
      <Tabs />
      <Menu />
    </header>
  ) 
}