import React from "react";
import LandingPage from "../pages/LandingPage";
import News from "../pages/News";

const routes = [
    {
        to: '/',
        component: <LandingPage />
    },
    {
        to:'/news',
        component:<News/>
    }
]

export default routes;