import "./App.css";
import Nav from "./components/Nav";
import styled from "styled-components";
import Banner from "./components/Banner";
import { Outlet, Route, Routes } from "react-router-dom";
import Category from "./components/Category";
import Row from "./components/Row";
import MainPage from "./pages/MainPage";
import LoginPage from "./pages/LoginPage";
import DetailPage from "./pages/DetailPage";
import SearchPage from "./pages/SearchPage";

const Layout = () => {
  return (
    <div>
      <Nav />

      <Outlet />
    </div>
  );
};

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<LoginPage />} />
        <Route path="main" element={<MainPage />} />
        <Route path="search" element={<SearchPage />} />
        <Route path=":movieId" element={<DetailPage />} />
      </Route>
    </Routes>
  );
}

export default App;
