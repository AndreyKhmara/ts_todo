import { Route, Routes } from "react-router-dom";
import { LoginPage, RegPage, TodoPage } from "./pages";
import { useEffect } from "react";

import { useAppDispatch } from "../hooks";
import { getUserAsync } from "../thunks";

function App() {
  const dispatch = useAppDispatch();

  // useEffect(() => {
  //   dispatch(getUserAsync());
  // }, []);

  return (
    <div>
      <Routes>
        <Route path="/reg" element={<RegPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/todo" element={<TodoPage />} />
      </Routes>
    </div>
  );
}

export default App;
