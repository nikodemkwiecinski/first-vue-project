import { defineStore } from 'pinia'
import { UserStateProps } from '../types/UserType'

export const useUserStore = defineStore('UserStore', {
  state: (): UserStateProps => ({
    users: [
      {
        id: 1655648533193,
        login: 'user',
        password: 'user',
        favouriteFoods: [],
      },
    ],
    activeUser: null,
  }),

  actions: {
    addUser(login: string, password: string) {
      const newUsers = [...this.users]
      newUsers.push({
        id: new Date().getTime(),
        login,
        password,
        favouriteFoods: [],
      })
      this.users = [...newUsers]
    },

    delUser(userId: number) {
      this.users = this.users.filter((user) => user.id !== userId)
    },

    validateUser(login: string, password: string) {
      const testPassword = this.users.find(
        (user) => user.login === login && user.password === password
      )
      this.activeUser = testPassword !== undefined ? testPassword.id : null
      return testPassword !== undefined ? true : false
    },
  },
})
