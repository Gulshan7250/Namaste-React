import { createRoot } from "react-dom/client";
import Header from "./component/Header";
import Body from "./component/Body";
// not using keys (not acceptable) <<< index as key <<<<< unique id(best practice)



const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = createRoot(document.getElementById("root"));

root.render(<AppLayout />);