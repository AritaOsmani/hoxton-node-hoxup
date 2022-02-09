import { User } from "./UserType";

export type UserLogInProps = {
    user: User
    logIn: (value: User) => void
}