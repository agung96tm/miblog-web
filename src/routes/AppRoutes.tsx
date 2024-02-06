import { QueryParamProvider } from "use-query-params";
import { ReactRouter6Adapter } from "use-query-params/adapters/react-router-6";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import * as mainPages from '@modules/main/pages';
import * as mainRoutes from '@modules/main/routes';

import * as authPages from '@modules/auth/pages';
import * as authRoutes from '@modules/auth/routes';

import * as dashboardPages from '@modules/dashboard/pages';
import * as dashboardRoutes from '@modules/dashboard/routes';

import * as userPages from '@modules/user/pages';
import * as userRoutes from '@modules/user/routes';

import * as blogPages from '@modules/blog/pages';
import * as blogRoutes from '@modules/blog/routes';

import { Navbar } from "@miblog/components/Navbar";
import { Footer } from "@miblog/components/Footer/Footer";
import {ToastContainer} from "react-toastify";
import {AuthRoute} from "@routes/AuthRoute";

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <QueryParamProvider adapter={ReactRouter6Adapter}>
                <div>
                    <Navbar />

                    <div className="container mt-3">
                        <Routes>
                            <Route
                                path={mainRoutes.HOME_PAGE}
                                element={<mainPages.HomePage />}
                            />

                            {/* Auth */}
                            <Route
                                path={authRoutes.LOGIN_PAGE}
                                element={<authPages.LoginPage />}
                            />
                            <Route
                                path={authRoutes.REGISTER_PAGE}
                                element={<authPages.RegisterPage />}
                            />

                            {/* Dashboard */}
                            <Route
                                path={dashboardRoutes.DASHBOARD_PAGE}
                                element={<dashboardPages.DashboardRootPage/>}
                            >
                                <Route
                                    path={dashboardRoutes.DASHBOARD_PAGE}
                                    element={
                                        <AuthRoute>
                                            <dashboardPages.DashboardPage/>
                                        </AuthRoute>
                                    }
                                />
                                <Route
                                    path={dashboardRoutes.DASHBOARD_PASSWORD_PAGE}
                                    element={
                                        <AuthRoute>
                                            <dashboardPages.DashboardPasswordPage/>
                                        </AuthRoute>
                                    }
                                />
                                <Route
                                    path={dashboardRoutes.DASHBOARD_EDIT_PAGE}
                                    element={
                                        <AuthRoute>
                                            <dashboardPages.DashboardEditPage/>
                                        </AuthRoute>
                                    }
                                />
                            </Route>

                            {/* Blog */}
                            <Route
                                path={blogRoutes.BLOG_LIST_PAGE}
                                element={<blogPages.BlogListPage />} />
                            <Route
                                path={blogRoutes.BLOG_LIST_PAGE}
                                element={<blogPages.BlogDetailPage />} />

                            {/* User */}
                            <Route
                                path={userRoutes.USER_LIST_PAGE}
                                element={<userPages.UserListPage />} />
                            <Route
                                path={userRoutes.USER_DETAIL_PAGE}
                                element={<userPages.UserDetailPage />} />


                            {/* Page Not Found */}
                            <Route path={"*"} element={<mainPages.NotFoundPage />} />
                        </Routes>
                    </div>

                    <ToastContainer position="bottom-right"/>

                    <Footer />
                </div>
            </QueryParamProvider>
        </BrowserRouter>
    )
}

export default AppRoutes;