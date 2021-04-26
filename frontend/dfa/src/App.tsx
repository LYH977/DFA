import React from "react";
import Container from "./components/Container";
import { Navbar } from "./components/Navbar";
import { ContextProvider } from "./contexts";

function App() {
  return (
    <div
    // style={{
    //   background: "rgb(201, 201, 201)",
    // }}
    >
      <ContextProvider>
        <Navbar />
        <Container />
      </ContextProvider>
    </div>
  );
}

export default App;
