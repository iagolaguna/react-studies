import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const App = () => {
  return <div>Hello World!</div>;
};

class AppClass extends React.Component {

  render(): React.ReactNode {
      return <div>Hello World!</div>
  }
}

root.render(<AppClass />);
