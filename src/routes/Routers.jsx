import { Route, Routes } from "react-router";
import MainLayouts from "../layouts/MainLayouts";
import Home from "../pages/Home/Home";
import LandingPage from "../pages/LandingPage/LandingPage";

const Routers = () => {
    return (
        <Routes>
            <Route
                index
                element={<LandingPage />}
            />
            <Route
                path="/"
                element={<MainLayouts />}
            >
                <Route
                    path="/home"
                    element={<Home />}
                />
            </Route>
        </Routes >
    );
};

export default Routers;