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
                {/* <Route index element={<Page404 />} /> */}
                <Route index element={<UnderDevelopment />} />

                <Route path="kanban-board" element={<KanbanBoard />} />
                <Route path="project-setting" element={<ProjectSetting />} />

                <Route path="Releases" element={<UnderDevelopment />} />
                <Route path="Issues" element={<UnderDevelopment />} />
                <Route path="Pages" element={<UnderDevelopment />} />
                <Route path="Reports" element={<UnderDevelopment />} />
                <Route path="Components" element={<UnderDevelopment />} />

                <Route path='*' element={<Page404 />} />
            </Route>
        </Routes>
    )
}

export default ProjectLayoutRoute