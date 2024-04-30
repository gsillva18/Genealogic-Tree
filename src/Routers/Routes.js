import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Home from "../Pages/Home";

function MyRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<RedirectDefault />} />
             
                <Route path="/home" element={<Home/>}></Route>
              
            </Routes>
        </BrowserRouter>
    );
}

function RedirectDefault() {
    return <Navigate to="/home" replace />;
}

export default MyRoutes;