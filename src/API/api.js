import * as axios from 'axios'

export let getUsers = (pageSize, currentPage) => {
   return axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${pageSize}&page=${currentPage}`, {withCredentials: true})
}
