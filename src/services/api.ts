import axios from 'axios';

const EXPO_SERVER_URL = "https://exp.host/--/api/v2/push/send"
const TOKEN_SERVER_URL = 'https://60c189ce4f7e880017dbfc9e.mockapi.io/gau-server'

export interface Token {
    id: number,
    token: string
}

export const submitToken = async (token:string) => {
    const response = await axios.post(TOKEN_SERVER_URL, {token})
    const result = response.data as Token
    return result;
}

export const getToken = async (id: number | string ) => {
    const response = await axios.get(`${TOKEN_SERVER_URL}/${id}`)
    const result = response.data as Token
    return result;
}

export const sendPushNotification = async (token: string, title: string, body: string) => {
    const message = {
        to: token,
        sound: 'default',
        title,
        body,
    }

    await axios.post(EXPO_SERVER_URL, message)
    alert('Triệu hồi gấu thành công!')
}