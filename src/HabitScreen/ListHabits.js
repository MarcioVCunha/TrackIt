import Habit from "./Habit";

export default function ListHabits(props) {
    return (
        <div>{props.listHabits.map((habit, index) => {
            return (
                <Habit loadHabits={props.loadHabits} habit={habit} key={index} />
            )
        })}</div>
    )
}