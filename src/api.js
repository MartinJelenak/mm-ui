
import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:3000/api',
})

export const insertUser = payload => api.post(`/user`, payload,)
export const loginUser = payload => api.post(`/login`, payload,)
export const getAllUsers = () => api.get(`/users`)
export const updateUserById = (id, payload) => api.put(`/user/${id}`, payload)
export const deleteUserById = id => api.delete(`/user/${id}`)
export const getUserById = id => api.get(`/user/${id}`)

export const insertBlog = payload => api.post(`/blog`, payload,)
export const getAllBlogs = () => api.get(`/blogs`)
export const updateBlogById = (id, payload) => api.put(`/blog/${id}`, payload)
export const deleteBlogById = id => api.delete(`/blog/${id}`)
export const getBlogById = id => api.get(`/blog/${id}`)

const apis = {
    insertBlog,
    getAllBlogs,
    updateBlogById,
    deleteBlogById,
    getBlogById,
    insertUser,
    loginUser,
    getAllUsers,
    updateUserById,
    deleteUserById,
    getUserById,
}

export default apis