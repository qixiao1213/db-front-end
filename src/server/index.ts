import axios from 'axios'

const baseUrl = "/api"



// const baseUrl = "http://www.starstens.com:5000"
const api = axios.create({
    headers: {
        'Authorization': 'Bearer ' + localStorage.getItem('token')
    }
})

export const getToken = () => {
    console.log(localStorage.getItem('token'));
}
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
export const getUserMsgList = () => api.get(baseUrl + '/message')                                                //   /msg       获取所有留言
export const getNoteList = () => api.get(baseUrl + '/announcement')                                      //   /note      获取所有通知
export const getPostList = () => api.get(baseUrl + '/post/home')                                                 //  /post       获取所有帖子
export const getPostById = (id: string) => api.get(baseUrl + '/post/' + id)                                              //  /post       获取所有帖子
export const postMsg = (content: string, useId: string) => api.post(baseUrl + '/message', {
    params: {
        content,
        useId,
    }
})
export const getPostModList = () => api.get(baseUrl + '/post/check')
export const getBanWordList = () => api.get(baseUrl + '/banword')

export const postForm = (title: string, content: string, user_id: string) => api.post(baseUrl + 'post', {
    post_type: '1',
    comment_content: content,
    post_title: title,
    user_id
}, {
    headers: {
        "Content-Type": 'application/json'
    }
})
export const noteForm = (message_content: string, user_id: string) => api.post(baseUrl + 'announcement', {
    message_content,
    user_id
}, {
    headers: {
        "Content-Type": 'application/json'
    }
})
export const delMsg = (id: string | number | undefined) => api.delete(baseUrl + '/message/' + id)
export const delNote = (id: string | number | undefined) => api.delete(baseUrl + '/announcement/' + id)
export const delUser = (id: string | number | undefined) => api.delete(baseUrl + '/user/' + id)
export const delPost = (id: string | number | undefined) => api.delete(baseUrl + '/post/' + id)
export const delComment = (id: string | number | undefined) => api.delete(baseUrl + '/post/comment/' + id)
export const delBanWord = (id: string | number | undefined) => api.delete(baseUrl + '/banword/' + id)
export const postCheck = (id: string | number | undefined) => api.get(baseUrl + '/post/check' + id)
export const commentCheck = (id: string | number | undefined) => api.get(baseUrl + '/comment/check' + id)