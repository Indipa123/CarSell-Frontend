// stores/user/state.ts
export const userState = () => ({
    firstName: 'John',
    lastName: 'Doe',
    age: 25
})

export type UserState = ReturnType<typeof userState>