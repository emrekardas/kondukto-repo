<script setup>
import { usePostsStore } from '@/stores/posts'
import { onMounted } from 'vue'

const postsStore = usePostsStore()

onMounted(() => {
  postsStore.fetchPosts()
})
</script>

<template lang="pug">
.container
    div(v-if="postsStore.isLoading").mt-5.text-center
        p Please wait, posts are being loaded...
    div(v-else).d-flex.flex-column.align-items-end
        button(@click="postsStore.fetchPosts").btn.btn-success.my-3 Refresh
        table.table
            thead
                tr
                    th User Id
                    th Id
                    th Title
                    th Body
            tbody
                tr(v-for="post in postsStore.posts" :key="post.id")
                    td {{ post.userId }}
                    td {{ post.id }}
                    td {{ post.title }}
                    td {{ post.body }}
</template>
