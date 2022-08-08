import ReactDOM from "react-dom/client";
import { AppClass } from "./aula-1/Aula1";
// import { ClockToggle } from "./aula-2/Aula2";
import { ClockFunc } from "./aula-3/Aula3";
import { ClockToggle } from "./aula-3/components/ClockToggle";
import { Aula4 } from "./aula-4/Aula4";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(<Aula4 />);
