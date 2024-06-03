import NavBar from "./components/NavBar/NavBar.tsx";
import Home from "./pages/home/home.tsx";
import PrivateRoutes from "./PrivateRoutes.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {AuthProvider} from "./AuthContext.js";
import Admin from "./pages/admin-page/AdminPage.tsx";

function App() {
  return (
    <>
    <AuthProvider>
     <BrowserRouter>
        <Routes>
          <Route path="/" element={
            <div className="container">
              <NavBar />
              <Home />
            </div>
          } />
            <Route element={<PrivateRoutes />}>
                <Route element={<Admin/>} path="/admin" />
            </Route>
        </Routes>
      </BrowserRouter>
      </AuthProvider>
    </>
  );
}

export default App;
