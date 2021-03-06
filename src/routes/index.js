//Layouts
import { HeaderOnly } from '@/components/Layout';

import Home from '@/Pages/Home';
import Following from '@/Pages/Following';
import Profile from '@/Pages/Profile';
import Upload from '@/Pages/Upload';
import Search from '@/Pages/Search';

//Public routes
const publicRoutes = [
    { path: '/', component: Home },
    { path: '/following', component: Following },
    { path: '/profile', component: Profile },
    { path: '/upload', component: Upload, layout: HeaderOnly },
    { path: '/Search', component: Search, layout: null },
];
//
const privateRoutes = [];

export { publicRoutes, privateRoutes };
