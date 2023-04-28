import axios from 'axios'

const Endpoints = {
    GetPosts: "https://jsonplaceholder.typicode.com/posts",
}

export default {
    async getPosts() {
        const response = await axios.get(Endpoints.GetPosts)
        return response?.data
    }
}