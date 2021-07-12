import * as axios from 'axios'

let instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/'
})

export let getUsers = (pageSize, currentPage) => {
    return instance.get(`users?count=${pageSize}&page=${currentPage}`)
        .then(response => response.data)
}
