import Login from "../pages/Login";
import index from "../pages/admin/dashboard";
import List from "../pages/admin/context/List";
import Edit from "../pages/admin/context/Edit";
import Err_404 from "../pages/Err_404";

export const loginRoutes = [{
    path: '/login',
    component: Login
},
{
    path: '/404',
    component: Err_404
}]

export const adminRoutes = [{
    path: '/admin/dashboard',
    component: index
},
{
    path: '/admin/context',
    component: List,
    exact: true
},
{
    path: '/admin/context/edit/:id',
    component: Edit
}]