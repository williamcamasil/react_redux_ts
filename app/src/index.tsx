import { render } from "react-dom";
import "./index.css";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import store from "./store/index";
import { Provider } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Provider store={store}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
      </Routes>
    </Provider>
  </BrowserRouter>,
  rootElement
);
