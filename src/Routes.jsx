import { useRoutes } from "react-router-dom"
import Home from "./components/common/pages/Home";
import UsersShow from "./components/common/pages/PrdctShow";
import UserInfo from "./components/common/pages/UserInfo";
import BasketLayout from "./components/common/layout/BasketLayout";
import Basket from "./components/common/pages/Basket";

const Routes = () => {
    const myRoutes = useRoutes([
        {
            path: "/",
            element: <Home />,
        },
        {
            path: "/basket",
            element: <Basket />,
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