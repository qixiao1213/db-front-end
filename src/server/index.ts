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

export const getUserInfo = (id: string | undefined): Promise<UserInfo> => axios.get(baseUrl + id)
export const getMsgList = () => axios.get(baseUrl + 'msg')