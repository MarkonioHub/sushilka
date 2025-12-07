import { defineStore } from "pinia"
import type { contentPage } from "./types.ts"
import { fetchData } from "@/shared/helpers/fetchData.ts";

export const useContentPagesStore = defineStore('ContentPages', {
  state: () => ({
    pages: [] as contentPage[]
  }),
  actions: {
    async getContentPages() {
      this.pages = await fetchData<contentPage[]>('content-pages')
    },
    getCurrentContentPage(slug: string) {
      return this.pages.find((page) => page.slug === slug)
    }
  }
})
