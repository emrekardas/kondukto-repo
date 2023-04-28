import { ref } from 'vue'
import { defineStore } from 'pinia'
import api from "@/api/api";

export const usePostsStore = defineStore('posts', () => {
  const isLoading = ref(false)
  const posts = ref([])

  async function fetchPosts() {
    isLoading.value = true
    await new Promise(resolve => {
      setTimeout(resolve, 1500)
    })
    posts.value = await api.getPosts()
    isLoading.value = false
  }

  return { posts, isLoading, fetchPosts }
})
