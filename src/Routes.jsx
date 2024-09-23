import { useRoutes } from "react-router-dom"
import Home from "./components/common/pages/Home";
import UsersShow from "./components/common/pages/UsersShow";

const Routes = () => {
    const myRoutes = useRoutes([
        {
            path: "/",
            element: <Home />,
        },
        {
            path: "/users",
            element: <UsersShow />,
        }
    ])
return myRoutes;
}
export default Routes;