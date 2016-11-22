import React from "react";
import {Button, Icon} from 'antd';

import Login from "./login.jsx";
import Home from "./home.jsx";

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            login: sessionStorage.getItem("login")
        }
    }
    changeState(state) {
        this.setState({
            login: state
        })
    }
    render() {
        return (
            this.state.login
                ?
                // 传递属性给子组件, 接受组附件的值 this.props.login == this.state.login
                <Home loginFun={this.changeState.bind(this)} login={this.state.login} />
                :
                // 传递时间给子组件, 通过子组件调用改变父组件的值
                <Login loginFun={this.changeState.bind(this)} />


        )
    }
}

export default Main;
