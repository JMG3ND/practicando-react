import XComponent from "./components/XComponent";
import { useData } from "./data/useData";

export default function App() {
  return (
    <>
      {useData.map((obj) => (
        <XComponent key={obj.id} {...obj} />
      ))}
    </>
  );
}
