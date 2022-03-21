import React from "react";
function App() {
  let list = ["divya", "renu", "mithun", "nuthan", "deekshith"];

  return (
    <div>
      <ol key={"relativeList"}>
        {list.map((ele, idex) => {
          let no = idex + 1;
          return <li key={"relativeListItem" + no}>{ele}</li>;
        })}
      </ol>
    </div>
  );
}

export default App;
