import { useRoutes } from "react-router-dom"
import Home from "./components/common/pages/Home";
import UsersShow from "./components/common/pages/PrdctShow";
import UserInfo from "./components/common/pages/UserInfo";
import BasketLayout from "./components/common/layout/BasketLayout";

const Routes = () => {
    const myRoutes = useRoutes([
        {
            path: "/",
            element: <Home />,
        },
        {
            path: "/basket",
            element: <BasketLayout />,
            // children:[
            //     {
            //         path: "/users:id",
            //         element: <UserInfo/>,
            //     },
            // ],
        },
    ]);
return myRoutes;
}
export default Routes;