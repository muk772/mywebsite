import logo from "./logo.svg";
import "./App.css";
import Header from "./Header";

import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import Footer from "./Footer";
import { Provider, useSelector } from "react-redux";
import store from "../src/Utils/Store";

function App() {
  return (
    <div>
      <Provider store={store}>
        <Header />
        <Outlet />
        <Footer />
      </Provider>
    </div>
  );
}

export default App;
