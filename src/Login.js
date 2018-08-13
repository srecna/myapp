import React from "react";
import axios from 'axios';
import { withRouter} from "react-router-dom";
// 添加响应拦截器
axios.interceptors.response.use(function (response) {
  // 对响应数据做点什么
  return response.data;
}, function (error) {
  // 对响应错误做点什么
  return Promise.reject(error);
});
class Login extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      uname: '',
      pwd: ''
    }
  }
  // http://47.96.21.88:8086/user/login
  handleChangename = (event)=>{
    this.setState({
      uname: event.target.value
    })
  }
  handleChangepw = (event)=>{
    this.setState({
      pwd: event.target.value
    })
  }
  handleSubmit = ()=> {
    // console.log(this.props)
    const {history} = this.props
    axios.post('http://47.96.21.88:8086/users/login',{
      uname: this.state.uname,
      pwd: this.state.pwd
    }).then(res=>{
      if (res.meta.status === 200) {
        localStorage.setItem('mytoken',res.data.token)
        history.push('/home') 
      }
    })
  }
  render() {
    return (
      <div>
      <div>
        用户名：<input type="text" value={this.state.uname} onChange={this.handleChangename} name="uname"/>
      </div>
      <div>
        密码<input type="password" value={this.state.pwd} onChange={this.handleChangepw} name="pw"/>
      </div>
      <button onClick={this.handleSubmit}>登录</button>
      </div>
    )
  }
}
export default withRouter (Login);