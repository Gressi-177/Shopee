import { User } from './user.type'
import { SuccessApi } from './utils.type'

export type AuthResponse = SuccessApi<{
  access_token: string
  expires: number
  user: User
}>
