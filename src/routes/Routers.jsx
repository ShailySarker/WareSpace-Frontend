import { Route, Routes } from "react-router";
import MainLayouts from "../layouts/MainLayouts";
import Home from "../pages/Home/Home";
import LandingPage from "../pages/LandingPage/LandingPage";

const Routers = () => {
    return (
        <Routes>
            <Route
                path="/"
                element={<MainLayouts />}
            >
                <Route
                    index
                    element={<LandingPage />}
                />
            </Route>
            <Route
                path="/home"
                element={<Home />}
            />
        </Routes >
    );
};

export default Routers;