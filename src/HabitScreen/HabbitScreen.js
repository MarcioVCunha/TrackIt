import { useContext } from "react"
import UserContext from "../Contexts/UserContext"

export default function HabitScreen() {
    const { token } = useContext(UserContext);

    return (
        <p>{token}</p>
    )
}