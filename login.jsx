import React from "react";
import {Row, Col, Button, Input, Icon, Form, message} from "antd";
class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            password: ""
        }
    }

    changeName(e) {
        this.setState({
            name: e.target.value
        })
    }

    changePassword(e) {
        this.setState({
            password: e.target.value
        })
    }

    loginClick() {
        if(this.state.name == "zhangxuchao" && this.state.password == "heping") {
            // 调用父组件传递过来的方法, 改变父组件的this.state.login的值
            sessionStorage.setItem("login", true);
            this.props.loginFun(true);
        }
        else {
            message.error("用户名和密码不匹配");
            sessionStorage.setItem("login", false);
            this.props.loginFun(false);
        }
    }

    render() {
        return (
            <div className="login">
                <Form>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <h1 style={{textAlign: "center"}}>登录{this.props.login}</h1>
                    <br/>
                    <Row>
                        <Col span={10} offset={7}>
                            <Input type="text" name="name" value={this.state.name} onChange={this.changeName.bind(this)}
                                   className="name"/>
                            <br/>
                            <br/>
                        </Col>
                        <Col span={10} offset={7}>
                            <Input type="password" name="password" value={this.state.password}
                                   onChange={this.changePassword.bind(this)} className="password"/>
                            <br/>
                            <br/>
                        </Col>
                        <Col span={10} offset={7}>
                            <Button type="primary" icon="user" onClick={this.loginClick.bind(this)}> 登录</Button>
                            <br/>
                            <br/>
                        </Col>
                    </Row>
                </Form>
            </div>
        )
    }
}
export default Login;
