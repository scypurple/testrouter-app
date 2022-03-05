import React from 'react'
import { Outlet } from 'react-router-dom'
import MyNavLink from '../../components/MyNavLink'
//import routes from '../../routes'

export default function Home() {
   // const element = useRoutes(routes);

    return (
      <div>
        <h1>Home 展示区</h1>
        <ul className="nav nav-tabs">
						<li>
							<MyNavLink to="news">News</MyNavLink>
						</li>
						<li>
							<MyNavLink to="message">Message</MyNavLink>
						</li>
					</ul>
          
          <div className="col-xs-6">
                        <div className="panel">
                            <div className="panel-body">
                                {/* <Switch>
                                    <Route path='/home/news' component={News} />
                                    <Route path='/home/message' component={Message} />
                                </Switch> */}
                                <Outlet />
                            </div>
                        </div>
                    </div>
      </div>
    )
  }

