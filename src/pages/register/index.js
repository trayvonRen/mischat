import './index.scss'
import { List, InputItem, NavBar, Icon, Button } from 'antd-mobile'

function Register() {
  return (
    <div className="register-wrapper">
      <NavBar
        mode="light"
        icon={<Icon type="left" />}
        onLeftClick={() => console.log('onLeftClick')}>
        注册信聊
      </NavBar>
      <List>
        <InputItem clear placeholder="请输入昵称">
          昵称
        </InputItem>
        <InputItem clear placeholder="请输入邮箱">
          邮箱
          <div className="list-btn">
            <Button disabled className="btn" type="primary">
              获取验证码
            </Button>
          </div>
        </InputItem>
        <InputItem clear placeholder="请输入邮箱验证码">
          验证码
        </InputItem>
        <InputItem type="password" clear placeholder="请输入密码">
          密码
        </InputItem>
        <InputItem type="password" clear placeholder="请输入确认密码">
          确认密码
        </InputItem>
      </List>
      <br></br>
      <Button disabled className="btn" type="primary">
        确认注册
      </Button>
    </div>
  )
}

export default Register
