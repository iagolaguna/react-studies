import ReactDOM from "react-dom/client";
import { AppClass } from "./aula-1/Aula1";
import { ClockToggle } from "./aula-2/Aula2";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(<ClockToggle />);