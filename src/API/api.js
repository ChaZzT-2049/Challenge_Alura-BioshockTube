import axios from "axios"

export const api = axios.create({
    baseURL: "https://bioshocktube.vercel.app"
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