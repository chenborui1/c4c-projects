import NavBar from "./components/NavBar/NavBar.tsx";
import Home from "./pages/home/home.tsx";
import PrivateRoutes from "./PrivateRoutes.js";
import AdminNavBar from "./pages/admin-page/components/NavBar.tsx"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Admin from "./pages/admin-page/AdminHome.tsx";

function App() {
  return (
    <>

     <BrowserRouter>
        <Routes>
          <Route path="/" element={
            <div className="container">
              <NavBar />
              <Home />
            </div>
          } />
            <Route element={<PrivateRoutes />}>
                <Route element={<div>
                <AdminNavBar/>
                <Admin/></div>} path="/admin" />
            </Route>
        </Routes>
      </BrowserRouter>
 
    </>
  );
}

export default App;
