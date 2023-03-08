import { Navigate, Outlet } from 'react-router-dom';

export function PrivateRoute() {
  const user = null;
  
  return (
    user ? <Outlet /> : <Navigate to={"/"} />
  )
}
