import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect,
} from "react-router-dom";
//动态传值示例
import Index from "./Pages/Index";
import List from "./Pages/List";
import ListDetail from "./Pages/ListDetail";
//重定向示例
import Home from "./Redirect/Home";

class AppRouter extends React.Component {
  render() {
    return (
      <Router>
        <ul>
          <li>
            <Link to="/">首页</Link>
          </li>
          <li>
            <Link to="/list/123">列表</Link>
          </li>
        </ul>
        <Switch>
          {/* 动态传值路由 */}
          <Route path="/" exact component={Index} />
          <Route path="/list/:id" component={List} />
          <Route path="/listDetail/:id" component={ListDetail} />
          {/* 重定向路由 */}
          <Route path="/home" exact component={Home} />
          <Redirect from="/" to="/home" />
        </Switch>
      </Router>
    );
  }
}

export default AppRouter;
