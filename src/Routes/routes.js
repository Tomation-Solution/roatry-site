import React from "react";
import AboutUs from "../pages/aboutUs";
import AchiveMents from "../pages/AchiveMents";
import ByeLaws from "../pages/ByeLaws";
import ClubMembers from "../pages/ClubMembers";
import ContactPage from "../pages/contact";
import GalleryPage from "../pages/GalleryPage";
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
        to:'/club-directory',
        component:<OurDirectors/>
    },{
        to:'/contact',
        component:<ContactPage/>
    },{
        to:'/activities',
        component:<AchiveMents/>
    },{
        to:'/members',
        component:<ClubMembers/>
    },{
        to:'/our-law',
        component:<ByeLaws/>
    },{
        to:'/gallery',
        component:<GalleryPage/>
    }
    // 
]

export default routes;