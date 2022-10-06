import React from "react";
import AboutUs from "../pages/aboutUs";
import HistoryDetail from "../pages/HistoryDetail";
import LandingPage from "../pages/LandingPage";
import News from "../pages/News";
import OurDirectors from "../pages/ourDirectors";

const routes = [
    {
        to: '/',
        component: <LandingPage />
    },
    {
        to:'/news',
        component:<News/>
    },
    {
        to:'/about',
        component:<AboutUs/>
    },
    {
        to:'/history',
        component:<HistoryDetail/>
    },
    {
        to:'/our_directors',
        component:<OurDirectors/>
    }
    // 
]

export default routes;