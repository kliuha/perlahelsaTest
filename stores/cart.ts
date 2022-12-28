import { defineStore } from "pinia"

export const useCartStore = defineStore("cart", {
  state: () => {
    return {
      itemsCount: 0 as number
    }
  },
  actions: {
    increment (count) {
      this.itemsCount = this.itemsCount + count
    }
  },
  getters: {
    getCount: state => state.itemsCount
  }
})
