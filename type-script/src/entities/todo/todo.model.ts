export interface ITodo{
    title: string,
    status: boolean,
    id: number
}

export interface ITodoProps extends ITodo{
    setStatus: () => void
    deleteTodo: () => void
}