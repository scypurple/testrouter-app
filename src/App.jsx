import React from 'react'
import {Navigate, Route, Routes} from 'react-router-dom'
import MyNavLink from './components/MyNavLink'
import About from './pages/About'
import Home from './pages/Home'

export default function App() {
        return (
            <div>
                <div className="row">
                    <div className="col-xs-offset-2 col-xs-8">
                        <div className="page-header"><h2>React Router Demo</h2></div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-2 col-xs-offset-2">
                        <div className="list-group">

                            {/* 原生html中使用a标签实现【页面】的【跳转】 */}
                            {/* <a className="list-group-item" href="./about.html">About</a>
                    <a className="list-group-item" href="./home.html">Home</a> */}

                            {/* react中使用Link标签实现【组件】的【切换】------编写路由导航 */}
                            <MyNavLink to='/about'>About</MyNavLink>
                            <MyNavLink to='/home'>Home</MyNavLink>
                        </div>
                    </div>
                    <div className="col-xs-6">
                        <div className="panel">
                            <div className="panel-body">
                                {/* 展示区要根据路径去决定展示哪个组件----注册路由 */}
                               <Routes>
                                    <Route path='/about' element={<About/>} />
                                    <Route path='/home' element={<Home/>} />
                                    <Route path='/' element={<Navigate to='/about' />} />
                                    {/* <Redirect to='/about' /> */}
                                </Routes>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

