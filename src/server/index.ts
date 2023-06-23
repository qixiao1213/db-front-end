import axios from 'axios'

const baseUrl = "http://localhost:3000/"
export const signIn = (id: number | undefined, password: string) => {
    return  axios.post(baseUrl + 'login', {
        params: {
            id,
            password,
        }
    })
}

export const getUserInfo = (id: number | undefined) => axios.get(baseUrl + id)
export const getMsgList = () => axios.get(baseUrl + 'msg')