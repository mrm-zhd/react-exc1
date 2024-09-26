import { useRoutes } from "react-router-dom"
import Home from "./components/common/pages/Home";
import UsersShow from "./components/common/pages/UsersShow";
import UserInfo from "./components/common/pages/UserInfo";

const Routes = () => {
    const myRoutes = useRoutes([
        {
            path: "/",
            element: <Home />,
        },
        {
            path: "/users",
            element: <UsersShow />,
            children:[
                {
                    path: "/users:id",
                    element: <UserInfo/>,
                },
            ],
        },
    ]);
return myRoutes;
}
export default Routes;