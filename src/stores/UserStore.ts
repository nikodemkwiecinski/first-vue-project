import { defineStore } from 'pinia'
import { UserStateProps } from '../types/UserType'

export const useUserStore = defineStore('UserStore', {
  state: (): UserStateProps => ({
    users: [],
  }),

  actions: {
    addUser(login: string, password: string) {
      const newUsers = [...this.users]
      newUsers.push({ id: new Date().getTime(), login, password })
      this.users = [...newUsers]
    },
    delUser(userId: number) {
      this.users = this.users.filter((user) => user.id !== userId)
    },
  },
})
