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
export const getUserInfo = (id: string | number | undefined) => api.get(baseUrl + '/user/me')  //   /user/id   获取指定id的用户
export const getUserList = () => api.get(baseUrl + '/user');
export const getUserMsgList = () => api.get(baseUrl + '/message')                                   //   /msg       获取所有留言
export const getNoteList = () => api.get(baseUrl + '/announcement')                                 //   /note      获取所有通知
export const getPostList = () => api.get(baseUrl + '/post/home')                                    //  /post       获取所有帖子
export const getPostById = (id: string) => api.get(baseUrl + '/post/' + id)                                      //  /post       获取所有帖子
export const postMsg = (content: string, useId: string) => api.post(baseUrl + '/message', {
    params: {
        content,
        useId,
    }
})
export const getPostModList = () => api.get(baseUrl + '/post/check')
export const getBanWordList = () => api.get(baseUrl + '/ban_word')

export const postForm = (title: string, content: string) => api.post(baseUrl + '/post', {
    post_type: '1',
    comment_content: content,
    post_title: title,
}, {
    headers: {
        "Content-Type": 'application/json'
    }
})
export const commentForm = (post_id: string,comment_content: string) => api.post(baseUrl + '/comment/add', {
    post_id,
    comment_content
}, {
    headers: {
        "Content-Type": 'application/json'
    }
})
export const msgForm = (message_content: string) => api.post(baseUrl + '/message/add', {
    message_content,
}, {
    headers: {
        "Content-Type": 'application/json'
    }
})

export const noteForm = (announce_content: string) => api.post(baseUrl + '/announcement/add', {
    announce_content,
}, {
    headers: {
        "Content-Type": 'application/json'
    }
})

export const banwordForm = (word: string) => api.post(baseUrl + '/ban_word/add', {
    word
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
export const commentCheck = (id: string | number | undefined) => api.get(baseUrl + '/post/comment/check' + id)