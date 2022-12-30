import { Route, Routes } from "react-router-dom"

import ProjectLayout from "../layouts/ProjectLayout";

import Page404 from '../pages/Page404'
import KanbanBoard from "../pages/KanbanBoard";
import ProjectSetting from "../pages/ProjectSetting";
import UnderDevelopment from "../pages/UnderDevelopment";
import ProtectRoute from "./ProtectRoute";


const ProjectLayoutRoute = () => {
    return (
        <Routes>
            <Route element={<ProtectRoute><ProjectLayout /></ProtectRoute>}>
                <Route index element={<Page404 />} />

                <Route path="kanban-board" element={<KanbanBoard />} />
                <Route path="project-setting" element={<ProjectSetting />} />
                <Route path='*' element={<UnderDevelopment />} />
            </Route>
        </Routes>
    )
}

export default ProjectLayoutRoute