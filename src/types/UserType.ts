export interface UserStateProps {
  users: Array<UserProps>
}

export interface UserProps {
  id: number
  login: string
  password: string
}
