import Home from "./Pages/Home/Home";
import About from "./Pages/Home/About";
import News from "./Pages/Home/News";
import Movies from "./Pages/Home/Movies";

const routesHome = [
    {
        path:"/",
        exact: true,
        component: Home
    },
    {
        path: "/home",
        exact: false,
        component: Home
      
    },
    {
        path: "/about",
        exact: false,
        component: About
      },
      {
        path: "/tin-tuc",
        exact: false,
        component: News
      },
]

export { routesHome };