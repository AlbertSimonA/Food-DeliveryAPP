import React from "react";
import AppLayout from "./Components/AppLayout";

function App() {
  return (
    <>
      <Provider store={store}>
        <AppLayout />
      </Provider>
    </>
  );
}

export default App;
