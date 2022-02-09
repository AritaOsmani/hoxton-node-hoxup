import { User } from "./UserType";

export type LogInProps = {
    users: User[]
    logIn: (value: User) => void
    setModal: React.Dispatch<React.SetStateAction<string>>
}