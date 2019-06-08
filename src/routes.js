import Home from './Views/Home.jsx'
import Listing from './Views/Listing.jsx'
import Detail from './Views/Detail.jsx'
import CategoryListing from './Views/CategoryListing.jsx'
import Contact from './Views/Contact.jsx'
import Search from './Views/Search.jsx'
import NotFound from './Views/NotFound.jsx'

const routes = [
    {
        path: '/',
        component: Home,
        exact: true
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
        component: NotFound
    },
    
]



export default routes