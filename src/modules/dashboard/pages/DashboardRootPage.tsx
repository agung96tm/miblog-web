import {SideMenu} from "@modules/dashboard/components";
import {Outlet} from "react-router-dom";

export const DashboardRootPage = () => {
    return (
        <div style={{
            display: "flex",
        }}>
            <SideMenu />
            <div>
                <Outlet />
            </div>
        </div>
    )
}

