import axios from 'axios'
import { type UserInfo } from '../interface/index'

const baseUrl = "/api"
const token = localStorage.getItem('token');
// const baseUrl = "http://www.starstens.com:5000"
const api = axios.create({
    headers: {
        'Authorization': localStorage.getItem('token')
    }
})
export const signIn = (id: number, password: string) => {
    return api.post(baseUrl + '/user/login', {
        user_id: id,
        password,
    },
        {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
}
export const getUserInfo = (id: string | number | undefined) => api.get(baseUrl + '/user/' + id)  //   /user/id   获取指定id的用户
export const getUserList = () => api.get(baseUrl + '/user');
export const getUserMsgList = () => api.get(baseUrl + '/message/')                                                //   /msg       获取所有留言
export const getNoteList = () => api.get(baseUrl + '/announcement')                                      //   /note      获取所有通知
export const getPostList = () => api.get(baseUrl + '/post/home')                                                 //  /post       获取所有帖子
export const getPostById = (id: string) => api.get(baseUrl + '/post/' + id)                                              //  /post       获取所有帖子
export const postMsg = (content: string, useId: string) => api.post(baseUrl + '/message', {
    params: {
        content,
        useId,
    }
})
export const getPostModList = () => api.get(baseUrl + '/not-post')
export const postForm = (title: string, content: string, useId: string) => api.post(baseUrl + 'post', {
    params: {
        title,
        content,
        useId,
    }
})

