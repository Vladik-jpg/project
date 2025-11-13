import type { IStatsProps } from "./stats.model"

const TodoStats = ({all, todo, done}: IStatsProps) => {
    return(
    <div className="stats">
            Всего:{all}  | Активных: {todo} | Завершено: {done}
        </div>
    )
}
export default TodoStats