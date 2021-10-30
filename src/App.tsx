import { useState } from "react";
import CardList from "./components/card-list";
import CustomInput, { inputValueType } from "./components/custom-input";

function App() {

  const [sizes, setSizes] = useState<inputValueType[]>([])

  return <div className="App">
      <CustomInput getSizes={(value) => setSizes(value)} />
      {sizes.length ? <CardList sizeList={sizes} /> : null}
  </div>;
}

export default App;
