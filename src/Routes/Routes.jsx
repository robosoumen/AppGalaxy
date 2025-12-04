import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home";
import AppDetails from "../Pages/AppDetails";
import AppInstallationPage from "../Pages/AppInstallationPage";
import AllApp from "../Pages/AllApp";
import ErrorApp from "../Pages/ErrorApp";
import ErrorPage from "../Pages/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement:<ErrorPage></ErrorPage>,
    hydrateFallbackElement:<p>Loading......</p>,
    children:[
        {
            index:true,
            element:<Home></Home>,
            loader: () => fetch('./appData.json')
        },
        {
            path:'/details',
            element:<AppDetails></AppDetails>
        },
        {
            path:'/appInstall',
            element:<AppInstallationPage></AppInstallationPage>
        },
        {
            path:'/allApp',
            element:<AllApp></AllApp>
        },
        {
            path:'/appDetails/:id',
            element:<AppDetails></AppDetails>
        },
    ]
  },
]);

export default router;