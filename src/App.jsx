import React from 'react'
import { useRoutes, useNavigationType, Navigate } from 'react-router-dom'
import MyNavLink from './components/MyNavLink'
import routes from './routes'
import Header from './components/Header'

export default function App() {

    const element = useRoutes(routes);
    const urlParams = new URL(window.location.href);
    const pathname = urlParams?.pathname;
   // console.log("pathname:", pathname);
    return (useNavigationType() === 'POP') ? <Navigate to={pathname} /> :
        (




            <div>
                <div className="row">
                    <Header />
                </div>

                <div className="row">
                    <div className="col-xs-2 col-xs-offset-2">
                        <div className="list-group">

                            {/* 原生html中使用a标签实现【页面】的【跳转】 */}
                            {/* <a className="list-group-item" href="./about.html">About</a>
                    <a className="list-group-item" href="./home.html">Home</a> */}

                            {/* react中使用Link标签实现【组件】的【切换】------编写路由导航 */}
                            <MyNavLink to='/about'>About</MyNavLink>
                            <MyNavLink end to='/home'>Home</MyNavLink>
                        </div>
                    </div>
                    <div className="col-xs-6">
                        <div className="panel">
                            <div className="panel-body">
                                {/* 展示区要根据路径去决定展示哪个组件----注册路由 */}
                                {element}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
}

