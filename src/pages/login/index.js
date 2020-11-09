import React, { useState, useMemo } from 'react'
import { Button } from 'antd-mobile'
import { connect } from 'react-redux'
import './index.scss'
import LoginLogo from 'assets/img/loginlogo.svg'
import { actionCreators as CommonActionCreators } from 'store/common/index.js'
import { Link, withRouter } from 'react-router-dom'

const LoginForm = props => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const loginTyoe = useMemo(() => {
    if (email.length > 0 && password.length > 0) {
      return false
    } else {
      return true
    }
  }, [password, email])

  const changeEmail = e => {
    setEmail(e.target.value)
  }

  const changePassword = e => {
    setPassword(e.target.value)
  }

  const onSubmit = () => {
    console.log(props.form)
    props.postLogin({ email, password }, props.history)
  }

  return (
    <>
      <div className="item">
        <input
          value={email}
          name="email"
          onChange={changeEmail}
          placeholder="请输入登录邮箱"></input>
      </div>
      <div className="item">
        <input
          type="password"
          value={password}
          name="password"
          onChange={changePassword}
          placeholder="请输入密码"></input>
      </div>
      <div className="item">
        <Button disabled={loginTyoe} className="btn" onClick={onSubmit} type="primary">
          登录
        </Button>
      </div>
    </>
  )
}
const mapDispatchToProps = {
  postLogin: CommonActionCreators.postLogin,
}

const LoginFormWrapper = connect(null, mapDispatchToProps)(withRouter(LoginForm))

function Login() {
  return (
    <div className="login-wrapper">
      <img alt="" className="login-logo" src={LoginLogo} />
      <div className="content-wrapper">
        <LoginFormWrapper></LoginFormWrapper>
        <div className="item">
          <Link to="/register">
            <div className="/register">用户注册</div>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Login
