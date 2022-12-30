import { Route, Outlet, Routes } from 'react-router-dom'

import DefaultLayout from "../layouts/DefaultLayout";

import Page404 from '../pages/Page404'

import MyProjects from "../pages/MyProjects";
import UserList from "../pages/UserList";
import UserDetail from "../pages/UserDetail";
import ProjectList from "../pages/ProjectList";
import ProtectRoute from './ProtectRoute';


const DefaultLayoutRoute = () => {
    return (
        <Routes>
            <Route element={<DefaultLayout />}>
                {/* Jira Home Page */}
                <Route index element={<div>Jira Page Home</div>} />

                {/*----------------------------- Protect Route -----------------------------------------*/}
                <Route element={<ProtectRoute><Outlet /></ProtectRoute>}>

                    {/* User Route */}
                    <Route path="users" element={<UserList />} />
                    <Route path="users/:userId" element={<UserDetail />} />

                    {/* Project Route */}
                    <Route path="projects" element={<ProjectList />} />

                    {/* My Projects Route */}
                    <Route path="my-works" element={<MyProjects />} />

                    <Route path="*" element={<Page404 />} />
                </Route>
            </Route>
        </Routes>
    )
}

export default DefaultLayoutRoute