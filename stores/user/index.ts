// stores/user/index.ts
import { defineStore } from 'pinia'
import { userState } from './state'
import { userActions } from './actions'

export const useUserStore = defineStore('user', {
    state: userState,
    actions: userActions
})

