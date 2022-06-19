export interface UserStateProps {
 users: Array<UserProps>
 activeUser: null | number
}

export interface UserProps {
 id: number
 login: string
 password: string
 favouriteFoods: Array<string>
}
