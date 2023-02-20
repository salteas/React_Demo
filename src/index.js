// import { StrictMode } from "react";
// import ReactDom from "react-dom";

// import App from "./App";

// ReactDom.render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
//   document.getElementById("root")
// );

import React from "react";
import ReactDom from "react-dom";
import App from "./App.jsx";
// const App = () => {
//   return (
//     <>
//       <h1>こんにちは</h1>
//       <p>お元気ですか？</p>
//     </>
//   );
// };

ReactDom.render(<App />, document.getElementById("root"));
