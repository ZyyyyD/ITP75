import "./App.css";
import List from "./Examples/list";
import SampleRam from "./Examples/useState";
import UseState from "./Examples/sampleRam";

import Sidebar from "./components/Home/sidebar";
import Navbar from "./components/Home/navbar";
import { Routes, Route } from "react-router-dom";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Users from "./components/Home/users";
import Role from "./components/Home/role";
import Home from "./components/Home/home";
import UserRegistration from "./components/Home/userRegistration";
import Profile from "./components/Home/profile";
import Login from "./components/Home/login";
import { Outlet } from "react-router-dom";

const SidebarLayout = () => (
  <>
    <div className="container-scroller">
      <Navbar />
      <Sidebar />
      <Outlet />
    </div>
  </>
);
const shet = () => (
  <>
    <div className="main-panel"></div>
  </>
);
function App() {
  return (
    <>
<<<<<<< HEAD
      <div className="container-scroller">
        <Navbar />
        <Sidebar />

        <div className="main-panel">
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/role" element={<Role />}></Route>
            <Route path="/users" element={<Users />}></Route>
          </Routes>
        </div>
=======
      <div className="main-panel">
        <Routes>
          <Route element={<SidebarLayout />}>
            <Route path="/dashboard" index element={<Home />}></Route>
            <Route path="/users" element={<Users />}></Route>
            <Route path="/role" element={<Role />}></Route>
            <Route path="/user/adduser" element={<UserRegistration />}></Route>
            <Route path="/user/profile" element={<Profile />}></Route>
          </Route>
          <Route path="/" element={<Login />} />
        </Routes>
>>>>>>> 697232f35286e9962b9d9e18c88061762c34c65e
      </div>
    </>
  );
}

export default App;
