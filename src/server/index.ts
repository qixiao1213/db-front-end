import axios from 'axios'
import { type UserInfo } from '../interface/index'
const baseUrl = "www.starstens.com:5000/8000/"
export const signIn = (id: number | undefined, password: string) => {
    return axios.post(baseUrl + 'login', {
        params: {
            id,
            password,
        }
    })
}
export const getUserInfo = (id: string | undefined): Promise<UserInfo> => axios.get(baseUrl + 'user/' + id)  //   /user/id   获取指定id的用户
export const getMsgList = () => axios.get(baseUrl + 'msg')                                                //   /msg       获取所有留言
export const getNoteList = () => axios.get(baseUrl + 'note')                                              //   /note      获取所有通知
export const getPostList = () => axios.get(baseUrl + 'post')                                              //  /post       获取所有帖子
export const getPostById = (id: string) => axios.get(baseUrl + 'post/' + id)                                              //  /post       获取所有帖子
export const postMsg = (title: string, content: string, useId: string) => axios.post(baseUrl + 'msg', {
    params: {
        title,
        content,
        useId,
    }
}) 

export const postForm = (title: string, content: string, useId: string) => axios.post(baseUrl + 'post', {
    params: {
        title,
        content,
        useId,
    }
}) 