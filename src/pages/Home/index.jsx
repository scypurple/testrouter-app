import React from 'react'
import {Navigate, Route, Routes} from 'react-router-dom'
import MyNavLink from '../../components/MyNavLink'
import News from './News'
import Message from './Message'

export default function Home() {
    return (
      <div>
        <h1>Home 展示区</h1>
        <ul className="nav nav-tabs">
						<li>
							<MyNavLink to="/news">News</MyNavLink>
						</li>
						<li>
							<MyNavLink to="/message">Message</MyNavLink>
						</li>
					</ul>
          <Routes>
            <Route path='/news' element={<News/>} />
            <Route path='/message' element={<Message/>} />
            <Route path='/' element={<Navigate to='/news' />} />
            {/* <Redirect to='/home/news'/> */}
          </Routes>
          {/* <div className="col-xs-6">
                        <div className="panel">
                            <div className="panel-body">
                                <Switch>
                                    <Route path='/home/news' component={News} />
                                    <Route path='/home/message' component={Message} />
                                </Switch>
                            </div>
                        </div>
                    </div> */}
      </div>
    )
  }

