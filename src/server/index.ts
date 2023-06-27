import axios from 'axios'
import { type UserInfo } from '../interface/index'
const baseUrl = "/api"
export const signIn = (id: number | undefined, password: string) => {
    return axios.post(baseUrl + 'login', {
        params: {
            id,
            password,
        }
    })
}

export const getUserInfo = (id: string | number): Promise<UserInfo> => axios.get(baseUrl + 'login/' + id)  //   /user/id   获取指定id的用户
export const getUserList = () => axios.get(baseUrl + '/user');
export const getMsgList = () => axios.get(baseUrl + '/message')                                                //   /msg       获取所有留言
export const getNoteList = () => axios.get(baseUrl + '/note')
export const getNoteById = (user_id: number | string) => axios.get(baseUrl + '/announcement/' + user_id)                                         //   /note      获取所有通知
export const getPostList = () => axios.get(baseUrl + 'post/')                                                 //  /post       获取所有帖子
export const getPostById = (id: string) => axios.get(baseUrl + '/post' + id)                                              //  /post       获取所有帖子
export const postMsg = (content: string, useId: string) => axios.post(baseUrl + '/msg', {
    params: {
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

