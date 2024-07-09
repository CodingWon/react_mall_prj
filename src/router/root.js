import { Suspense , lazy } from "react";
import MainPage from "../pages/MainPage";
const {createBrowserRouter} = require("react-router-dom");

const Loading = <div>Loading ....</div>
const Main = lazy(() => import("../pages/MainPage"))

const root = createBrowserRouter([
    {
        path: '',
        element: <Suspense fallback={Loading}><Main/></Suspense>
    }

])

export default root