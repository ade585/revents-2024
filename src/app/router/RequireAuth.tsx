import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAppSelector } from "../store/store"

export default function RequireAuth() {
    const { authentificated, initialised } = useAppSelector(state => state.auth);
    const location = useLocation();

    if (!authentificated && initialised) {
        return <Navigate to='/unauthorized' replace state={{ from: location }} />
    }

    return (
        <Outlet />
    )
}