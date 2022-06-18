import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import Signup from "./pages/Singup";
import Detail from "./pages/Detail";
import Write from "./pages/Write";
import Main from "./pages/Main";
import Start from "./pages/Start";
import Modify from "./pages/Modify";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/post/:id" element={<Detail />} />
        <Route path="/modify/:id" element={<Modify />} />
        <Route path="/write" element={<Write />} />
        <Route path="/main" element={<Main />} />
        {/*         <Route path="*" element={<NotFound />} />
         */}{" "}
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
