import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";


// import PageNotFound from "./Pages/PageNotFound";
import { routesHome, routesAdmin } from "./Routes";
import HomeTemplate from "./Template/HomeTemplate";
 



function App() {
  const showMenuHome = routes => {
    if (routes && routes.length > 0) {
      return routes.map((item, index) => {
        return (
          <HomeTemplate
            key={index}
            exact={item.exact}
            path={item.path}
            Component={item.component}
          />
        );
      });
    }
  };
 
  
  return (
    <BrowserRouter>
      <div>
        
        <Switch>
          {showMenuHome(routesHome)}
          

          




          {/* Trang Khong Co */}
          {/* <Route path="" component={PageNotFound} /> */}
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;