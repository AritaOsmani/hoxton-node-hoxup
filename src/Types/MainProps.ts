import { User } from "./UserType";

export type MainProps = {
    currentUser: User | null
    logOut: () => void
    users: User[]
    setModal: React.Dispatch<React.SetStateAction<string>>
    modal: string
}