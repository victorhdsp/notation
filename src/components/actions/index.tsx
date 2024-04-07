import css from "./actions.module.css"

import Remember from "./components/remembers";

export default function Actions () {

  return (<>{
    <div className={css["actions"]}>
      <Remember />
    </div>
  }</>)
}