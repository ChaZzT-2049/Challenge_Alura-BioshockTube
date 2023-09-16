import axios from "axios"

export const api = axios.create({
    baseURL: "https://65051f36ef808d3c66efc950.mockapi.io/api"
})

export const getData = async (url, setData) => {
    const response = await api.get(url)
    setData(response.data)
}

export const postData = async (url, dataForm) => {
    const response = await api.post(url, dataForm)
}

export const putData = async (url, dataForm) => {
    const response = await api.put(url, dataForm)
}

export const deleteData = async (url) => {
    const response = await api.delete(url)
}