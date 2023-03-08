import { Route, Routes } from 'react-router-dom';

import { PrivateRoute } from './PrivateRoute';

import { Admin } from '../pages/Admin';
import { Home } from '../pages/Home';
import { Login } from '../pages/Login';
import { Lessons } from '../pages/sub/Lessons';


export function Router() {
  return (
    <Routes>
      <Route path='/*' element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route path="/lessons" element={<Lessons />} />
      <Route path="/lessons/:slug" element={<Lessons />} />
      <Route element={<PrivateRoute />}>
        <Route path='/login' element={<Admin />} />
      </Route>
    </Routes>
  )
}
