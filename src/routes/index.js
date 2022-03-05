import About from "../pages/About";
import Home from "../pages/Home";
import { Navigate } from "react-router-dom";
import News from "../pages/Home/News";
import Message from "../pages/Home/Message";
import Detail from "../pages/Home/Message/Detail";

const routes = [
    {
        path: '/about',
        element: <About />
    },
    {
        path: '/home',
        element: <Home />,
        children: [
            {
                path: 'news',
                element: <News />
            },
            {
                path: 'message',
                element: <Message />,
                children: [
                    {
                        // path: 'detail/:id/:title',
                        path: 'detail',
                        element: <Detail />
                    }
                ]
            }
        ]
    },
    {
        path: '/',
        element: <Navigate to='/about' />
    }
]

export default routes;