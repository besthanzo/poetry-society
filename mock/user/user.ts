import type { MockMethod } from 'vite-plugin-mock'
import type { requestParams } from '../_util'
import { getRequestToken, resultError, resultSuccess } from '../_util'
import { ResultEnum } from '@/enums/httpEnum'

const fakeUserList = [
  {
    userId: 1,
    username: 'admin',
    password: '123456',
    nickname: '轮回诗社',
    realname: 'administrator',
    avatar: 'https://gss0.bdstatic.com/6LZ1dD3d1sgCo2Kml5_Y_D3/sys/portrait/item/tb.1.9e2abe53.9n0YlsLxMEnQwEyTC0u5Ag?t=1696734940',
    cover: '',
    sign: '开发中',
    industry: 4,
    gender: 0,
    phone: '15758791450',
    token: 'fakeToken1',
  },
  {
    userId: 2,
    username: 'test',
    password: '123456',
    nickname: '萝卜头',
    realname: 'test user',
    avatar:
      'https://link.jscdn.cn/1drv/aHR0cHM6Ly8xZHJ2Lm1zL3UvcyFBaFhWN0U3bHBTaWtsbkNaWjYxY0lLczdEUGlpP2U9Yldkd0Fp.jpg',
    cover: '',
    sign: '这个家伙很懒，什么都没有写~',
    industry: 7,
    gender: 1,
    phone: '18822137893',
    token: 'fakeToken2',
  },
]

export default [
  {
    url: '/api/login',
    timeout: 1000,
    method: 'post',
    response: ({ body }) => {
      const { username, password } = body
      const checkUser = fakeUserList.find(
        item => item.username === username && password === item.password,
      )
      if (!checkUser) {
        return resultError('帐号或密码不正确')
      }
      const { userId, username: _username, token, realname, sign } = checkUser
      return resultSuccess({
        userId,
        username: _username,
        token,
        realname,
        sign,
      })
    },
  },
  {
    url: '/api/getUserInfo',
    timeout: 1000,
    method: 'get',
    response: (request: requestParams) => {
      const token = getRequestToken(request)
      if (!token) {
        return resultError('无效令牌')
      }
      const checkUser = fakeUserList.find(item => item.token === token)
      if (!checkUser) {
        return resultError('没有获取到对应的用户信息', {
          code: ResultEnum.TOKEN_EXPIRED,
        })
      }
      return resultSuccess(checkUser)
    },
  },
  {
    url: '/api/logout',
    timeout: 1000,
    method: 'post',
    response: (request: requestParams) => {
      const token = getRequestToken(request)
      if (!token) {
        return resultError('无效令牌')
      }
      const checkUser = fakeUserList.find(item => item.token === token)
      if (!checkUser) {
        return resultError('无效令牌')
      }
      return resultSuccess(undefined, { message: '令牌已被销毁' })
    },
  },
] as MockMethod[]
