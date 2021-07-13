import * as axios from 'axios'

let instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': '4e0c2e3a-1448-441a-bba9-5de74fac940c' 
    },
})

export const UserAPI = {
    getUsers(pageSize, currentPage) {
        return instance.get(`users?count=${pageSize}&page=${currentPage}`)
            .then(response => response.data)
    },
    unfollowUser(userID) {
        return  instance.delete(`follow/${userID}`)
    },
    followUser(userID) {
        return  instance.post(`follow/${userID}`)
    },
    getProfile(userID){
        return instance.get(`profile/${userID}`)
    },
    authUser(){
        return  instance.get(`auth/me`)
    }
}