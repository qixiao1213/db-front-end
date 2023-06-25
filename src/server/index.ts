import axios from 'axios'
import { type UserInfo } from '../interface/index'
const baseUrl = "http://localhost:5000/"
export const signIn = (id: number | undefined, password: string) => {
    return axios.post(baseUrl + 'login', {
        params: {
            id,
            password,
        }
    })
}
export const getUserInfo = (id: string | undefined): Promise<UserInfo> => axios.get(baseUrl + 'user'+id)  //   /user/id   获取指定id的用户
export const getMsgList = () => axios.get(baseUrl + 'msg')                                                //   /msg       获取所有留言
export const getNoteList = () => axios.get(baseUrl + 'note')                                              //   /note      获取所有通知
export const getPostList = () => axios.get(baseUrl + 'post')                                              //  /post       获取所有帖子
