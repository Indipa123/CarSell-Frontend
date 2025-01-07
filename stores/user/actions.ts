// stores/user/actions.ts
import type { UserState } from './state'

export const userActions = {
    setFirstName(state: UserState, firstName: string) {
        state.firstName = firstName
    },
    incrementAge(state: UserState) {
        state.age++
    }
}