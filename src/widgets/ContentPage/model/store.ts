import { defineStore } from "pinia"
import type { contentPages } from "./types.ts"

export const useContentPagesStore = defineStore('ContentPages', {
  state: (): contentPages => ({
    pages: [],
  }),
  actions: {
    async getContentPages() {
      try {
        const response = await fetch(`${import.meta.env.VITE_VUE_API_URL}/content-pages`)
        if (!response.ok) throw new Error(response.statusText)
        this.pages = await response.json()
      } catch (error) {
        console.log('Error fetching /content-pages:', error)
      }
    },
    getCurrentContentPage(slug: string) {
      return this.pages.find((page) => page.slug === slug)
    }
  }
})
