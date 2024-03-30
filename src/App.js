import Products from "./components/Products/Products";
import Header from "./components/Layout/Header"
import Subheader from "./components/Layout/Subheader";
import { Routes, Route, Navigate } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Header/>
      <Subheader/>
      <Routes>
        <Route path="/404" exact element={
            <>
              <h1>Not Found!</h1>
            </>
        }
        />
        <Route path="/:category?" exact element={
            <>
              <Products />
            </>
        }
        />
        <Route
      path="/"
      element={
        <Navigate
          to="/404"
          //replace
        />
      }
    />
      </Routes>
    </div>
  );
}

export default App;
