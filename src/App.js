import React from 'react';
import { Routes, Route } from "react-router-dom";
import Footer from './components/global-component/Footer';
import Menu from './components/global-component/Menu';
import logo from './logo.svg';
import routes from './Routes/routes';

function App() {

  const getRoutes = (allroute) => {
    // console.log(allroute)
    // if(allroute.length>0){
      return allroute.map((route,i) => (<Route key={i} exact path={route.to} element={route.component} />))
    // }
  }

  console.log(getRoutes(routes))


  return (
    <>
      <Menu />
        <Routes>
          {getRoutes(routes)}
        </Routes>
      <Footer />
    </>
  );
}

export default App;
