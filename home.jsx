import React from "react";
import {Router, Route, hashHistory} from "react-router";
import {Row, Col, Button, Icon, Menu} from "antd";

import Status from "./status.jsx";
import About from "./about.jsx";
import Me from "./me.jsx";
import Set from "./set.jsx";
class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            current: "status"
        }
    }

    handleClick(e) {
        this.setState({
            current: e.key
        })
    }

    outFun() {
        // 调取属性loginFun传递过来的函数, 改变父组件的this.state.login的值
        sessionStorage.setItem("login", false);
        this.props.loginFun(false);
    }

    render() {
        return (
            <div className="home">
                <Menu onClick={this.handleClick.bind(this)}
                      selectedKeys={[this.state.current]}
                      mode="horizontal"
                >
                    <Menu.Item key="status">
                        <a href="#/"><Icon type="home"/>动态</a>
                    </Menu.Item>
                    <Menu.Item key="about">
                        <a href="#/about"><Icon type="edit"/>我的动态</a>
                    </Menu.Item>
                    <Menu.Item key="me">
                        <a href="#/me"><Icon type="setting"/>设置</a>
                    </Menu.Item>
                    <Menu.Item key="set">
                        <a href="#/set"><Icon type="user"/>我</a>
                    </Menu.Item>
                </Menu>
                <Router history={hashHistory}>
                    <Route path="/" component={Status}/>
                    <Route path="/about" component={About}/>
                    <Route path="/me" component={Me}/>
                    <Route path="/set" component={Set}/>
                </Router>

                <Button type="danger" onClick={this.outFun.bind(this)}>退出登录</Button>
            </div>
        )
    }

}
export default Home;
