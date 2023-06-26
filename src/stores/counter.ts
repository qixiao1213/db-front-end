import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', () => {
  const userId = ref()

  return { userId }
})

export const usePostStore = defineStore('post', () => {
  const post = ref([])
  return { post }
})

export const useMsgStore = defineStore('msg', () => {
  const msg = ref([])
  return { msg }
})

export const useNoteStore = defineStore('note', () => {
  const note = ref([])
  return { note }
})
