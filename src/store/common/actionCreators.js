import { actionTypes } from './index'
import { Toast } from 'antd-mobile'
import httpUtil from 'utils/request/index'

// 用户登录成功
export const userLoginSuccess = data => ({
  type: actionTypes.USER_LOGIN_SUCCESS,
  userMessage: data,
})

export const postLogin = (params, history) => {
  return dispatch => {
    httpUtil.postLogin(params).then(res => {
      if (res.errCode === 0) {
        Toast.success('登陆成功', 0.5)
        dispatch(userLoginSuccess({ userId: params.email, password: params.password }))

        // 把用户的登录信息存储在 sessionStorage 中
        sessionStorage.setItem(
          'userData',
          JSON.stringify({
            userMessage: { userId: params.email },
          })
        )
        history.push('/main')
      } else {
        Toast.fail(res.errMessage, 1)
      }
    })
  }
}
