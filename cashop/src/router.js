import {Routes, Route} from "react-router-dom";
import { ROUTERS } from "./utils/router";
import Homepage from "./pages/user/homepage";
import MasterLayout from "./pages/user/theme/masterLayout";

const renderUserRouter = () => {
    const userRouters = [
        {
            path: ROUTERS.USER.HOME,
            component: <Homepage/>,
        },
    ];
    return (
        <MasterLayout>
            <Routes>
                {userRouters.map((item, key) => (
                    <Route key={key} path={item.path} element={item.component} />
                ))}
            </Routes>
        </MasterLayout>
    );
}


const RouterCustom = () =>{
    return renderUserRouter();
}
export default RouterCustom;