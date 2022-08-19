import * as axios from 'axios';

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY" : "801b2ddd-d60b-4ebf-a733-d2ce97c9e74a"
    },
});

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 1) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
        .then(response => response.data)
    },
    unfollow (userId) {
        return instance.delete(`follow/${userId}`)
        .then(response => response.data)
    },
    follow (userId) {
        return instance.post(`follow/${userId}`)
        .then(response => response.data)
    },
}

export const authAPI = {
    authMe () {
        return instance.get(`auth/me`)
        .then(response => response.data)
    }
}

export const profileAPI = {
    setUserProfile (userId) {
        return instance.get(`profile/${userId}`)
        .then(response => response.data)
    },
    getStatus (userId) {
        return instance.get(`profile/status/${userId}`)
        .then(response => response.data)
    },
    updateStatus (status) {
        return instance.put(`profile/status`, { status: status })
    }
}

