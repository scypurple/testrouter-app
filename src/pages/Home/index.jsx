import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import MyNavLink from '../../components/MyNavLink'
import News from './News'
import Message from './Message'

export default class Home extends Component {
  render() {
    return (
      <div>
        <h1>Home 展示区</h1>
        <ul className="nav nav-tabs">
						<li>
							<MyNavLink to="/home/news">News</MyNavLink>
						</li>
						<li>
							<MyNavLink to="/home/message">Message</MyNavLink>
						</li>
					</ul>
          {/* <Switch>
            <Route path='home/news' component={News} />
            <Route path='home/message' component={Message} />
          </Switch> */}
          <div className="col-xs-6">
                        <div className="panel">
                            <div className="panel-body">
                                {/* 展示区要根据路径去决定展示哪个组件----注册路由 */}
                                <Switch>
                                    <Route path='/home/news' component={News} />
                                    <Route path='/home/message' component={Message} />
                                </Switch>
                            </div>
                        </div>
                    </div>
      </div>
    )
  }
}
