import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom"

import LoadingPage from './components/LoadingPage'

import Login from './pages/Login'
import Register from './pages/Register'
import Page404 from './pages/Page404'
import Entry from "./pages/Entry";

const DefaultLayoutRoutes = lazy(() => import("./routes/DefaultLayoutRoute"))
const ProjectLayoutRoutes = lazy(() => import("./routes/ProjectLayoutRoute"))

function App() {
  return (
    <Routes>
      {/* Entry Route */}
      <Route path="/" element={<Entry />} />

      {/* Auth Route */}
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      {/* Manage Route */}
      <Route path="/jira/*" element={
        <Suspense fallback={<LoadingPage />}>
          <DefaultLayoutRoutes />
        </Suspense>
      } />

      {/* Project Route */}
      <Route path="/jira/projects/:projectId/*" element={
        <Suspense fallback={<LoadingPage />}>
          <ProjectLayoutRoutes />
        </Suspense>
      } />

      <Route path="*" element={<Page404 />} />
    </Routes>
  );
}

export default App;
