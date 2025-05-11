import { Routes, Route, Navigate } from "react-router";
import Users from "../pages/Users"


export function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Navigate to="/users" replace />} />
            <Route path="/users" element={<Users />} />
        </Routes>
    )
}