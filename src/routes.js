import Home from './Views/Home.jsx'
import Listing from './Views/Listing.jsx'
import Detail from './Views/Detail.jsx'
import CategoryListing from './Views/CategoryListing.jsx'
import Contact from './Views/Contact.jsx'
import Search from './Views/Search.jsx'
import NotFound from './Views/NotFound.jsx'
import Login from './Views/Login.jsx';
import Admin from './Views/Admin/Admin.jsx';
import ContactQueries from './Views/Admin/ContactQueries.jsx';
import Categories from './Views/Admin/Categories.jsx';
import EditCategories from './Views/Admin/EditCategories.jsx';

const routes = [
    {
        path: '/',
        component: Home,
        exact: true,
        
    },
    {
        path: '/products',
        component: Listing,
    },
    {
        path: '/product/:id',
        component: Detail,
    },
    {
        path: '/category/:id',
        component: CategoryListing,
    },
    {
        path: '/contact',
        component: Contact,
    },
    {
        path: '/search',
        component: Search,
    },
    {
        path: '/login',
        component: Login
    },
    {
        path: '/admin',
        component: Admin,
        privateRoute: true,
        exact: true
    },
    {
        path: '/admin/contact-queries',
        component: ContactQueries,
        privateRoute: true,
    },
    {
        path: '/admin/categories',
        component: Categories,
        privateRoute: true,
        exact: true
    },
    {
        path: '/admin/categories/:id',
        component: EditCategories,
        privateRoute: true,
        exact: true
    },
    {
        component: NotFound
    },
    
]



export default routes